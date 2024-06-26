"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from './ui/Switch'
import { Label } from './ui/label'

const Toggle = () => {

    const [ mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const [ isChecked, setIsChecked ] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsChecked(resolvedTheme === 'dark');
    }, [resolvedTheme]);

    const onChange = (checked: boolean) => {
        if (!mounted) {
            return;
        }

        if (checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div>
            <div className='flex flex-row items-center justify-center space-x-4  md:fixed md:right-10 md:top-10 md:scale-100 absolute top-0 right-0  scale-75 '>
                <Switch 
                    checked={isChecked}
                    onCheckedChange={onChange}
                />
                {mounted && (
                    <Label htmlFor="toggle-theme" className='text-xl'>{resolvedTheme === 'dark' ? '☾' : '☀︎'}</Label>
                )}
            </div>
        </div>
    )
}

export default Toggle