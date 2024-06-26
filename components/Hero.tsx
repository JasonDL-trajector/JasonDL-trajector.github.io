"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaGithub, FaAngleDoubleDown, FaClipboardList } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [ isChecked, setIsChecked ] = useState(false);
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setMounted(true);
    setIsChecked(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return (
    <>
      {mounted && (
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
                      className='text-center text-[36px] md:text-4xl lg:text-6xl'
                      words='Emmanuel Jason De Lara'
                  />

                  <p className="text—center md:tracking—wider mb—4 text—sm md:text—lg lg:text—2xl">
                      a Software Engineer based in the Philippines
                  </p>

                  <div className='flex flex-col md:flex-row items-center justify-center lg:items-start lg:justify-between md:gap-x-10 gap-y-2 gap-x-2'>
                    <a href="https://github.com/JasonDL-trajector" target="_blank" rel="noreferrer" className='mt-10 md:mt-0 w-[15rem] md:w-auto scale-90 md:scale-100'>
                        <MagicButton 
                        title="Show my GitHub Profile"
                        icon={<FaGithub />}
                        position= 'right'
                        otherClasses='text-white'
                        />
                    </a>

                    <a href="/De Lara - Resume.pdf" download="De Lara - CV" className='w-[15rem] md:w-auto scale-90 md:scale-100'>
                        <MagicButton 
                        title="Save my CV"
                        icon={<FaClipboardList />}
                        position= 'right'
                        otherClasses='text-white'
                        />
                    </a>

                  </div>

                  {!isMdScreen && (

                    <a href="#about" className='mt-[10rem] lg:mt-0 scale-90'>
                      <MagicButton 
                      title="Show my work"
                      icon={<FaAngleDoubleDown />}
                      position= 'right'
                      otherClasses='text-black-100 dark:text-white-100 bg-zinc-100 dark:bg-black-100'
                      />
                    </a>

                  )}
              

              </div>
            </div>

              {!isMdScreen && (

                <a href="#about" className='mt-[5rem] lg:mt-0 scale-90'>
                  <MagicButton 
                  title="Show my work"
                  icon={<FaAngleDoubleDown />}
                  position= 'right'
                  otherClasses='text-black-100 dark:text-white-100 bg-zinc-100 dark:bg-black-100'
                  />
                </a>

              )}
        </div>
      )}
    </>
  )
}

export default Hero
