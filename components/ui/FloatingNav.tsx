"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Switch } from './Switch'
import { Label } from "@/components/ui/label"
import { useMediaQuery } from 'react-responsive';


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

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
  
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
          transform: isMdScreen ? 'scale(1.0)' : 'scale(.85)',
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 md:mx-auto border rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5  items-center justify-center space-x-4 border-black-100 dark:border-white/[0.2] bg-gray-100 dark:bg-black-100 ",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-0 text-black-100 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}

        <div className="flex items-center justify-center space-x-2 md:hidden">
          <Link href='' className="w-[0rem] md:w-[9rem]"/>

            <Switch 
                checked={isChecked}
                onCheckedChange={onChange}
            />
           {mounted && (
                <Label htmlFor="toggle-theme" className='text-xl'>{resolvedTheme === 'dark' ? '☾' : '☀︎'}</Label>
            )}

        </div>
        
      </motion.div>
    </AnimatePresence>
  );
};
