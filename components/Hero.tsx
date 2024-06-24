"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { Switch } from './ui/Switch'
import { Label } from './ui/label'

const Hero = () => {

  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [ isChecked, setIsChecked ] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsChecked(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const onChange = (checked: boolean) => {
    if (!mounted) {
      return null;
    }

    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className='pb-20 pt-36'>
        <div>
           <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill={ resolvedTheme === 'dark' ? 'white' : '#71717a' } />
           <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill={ resolvedTheme === 'dark' ? 'purple' : '#cbd5e1' } /> 
           <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill={ resolvedTheme === 'dark' ? 'blue' : '#71717a' } />
        </div>

        

        <div className="h-screen w-full dark:bg-black-100 bg-zinc-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.01] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-zinc-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          
          
          
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center text-slate-700 dark:text-blue-100 max-w-80'>
                  Hi, Everybody! I am
              </h2>

              

              <TextGenerateEffect 
                  className='text-center text-[40px] md:text-5xl lg:text-6xl'
                  words='Emmanuel Jason De Lara'
              />

              <p className="text—center md:tracking—wider mb—4 text—sm md:text—lg lg:text—2xl">
                  a Software Engineer based in the Philippines
              </p>

              <a href="https://github.com/JasonDL-trajector" target="_blank" rel="noreferrer" className='mt-10 lg:mt-0'>
                  <MagicButton 
                  title="Show my GitHub Profile"
                  icon={<FaLocationArrow />}
                  position= 'right'
                  otherClasses='text-white'
                  />
              </a>

          </div>
        </div>

    </div>
  )
}

export default Hero