"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgDark,
  imgClassName,
  titleClassName,
  spareImg,
  spareImgDark,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgDark?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
  spareImgDark?: string,
}) => {

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

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('jasondl0517@gmail.com');

    setCopied(true);
  }

  return (
    <>
    {mounted && (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-non justify-between flex flex-col space-y-4 border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.7)] ",
          className
        )}
        style={{
          background: resolvedTheme === 'dark' ? "rgb(4,7,29)" :"rgb(250 250 250)",
          // backgroundColor:
          //   resolvedTheme === 'dark' ?
          //   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" :
          //   "linear-gradient(90deg, rgb(252, 251, 238) 0%, rgb(212 212 216) 100%)",
        }}
      >
      
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
          <div className="w-full h-full absolute">
            {img && imgDark && (
              
              <img
                src={resolvedTheme === 'dark' ? imgDark : img}
                alt={resolvedTheme === 'dark' ? imgDark : img}
                className={cn(imgClassName, 'object-cover, object-center')}
              />
            )}
          </div>

          <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && spareImgDark && (
              <img 
                src={resolvedTheme === 'dark' ? spareImgDark : spareImg}
                alt={resolvedTheme === 'dark' ? spareImgDark : spareImg}
                className={'object-cover, object-center w-full h-full'}
              />
            )}
          </div>

          {id === 6 && (
            <BackgroundGradientAnimation>
              <div 
                className="absolute z-50 flex items-center justify-center text-white font-bold"
              />
            </BackgroundGradientAnimation>
          )}

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex  flex-col px-5 p-5 lg:p-10',
          )}>

            <div className="font-sans font-extralight text-[#c1cc2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-md max-w-96 z-10">
            {title}
            </div>

            {id === 2 && <GlobeDemo />}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 lg:right-3">

              {/* tech stack lists */}
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    {['Next.js', 'Typescript', 'Python'].map
                    ((item) => (
                      <span key={item} className="py-5 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#e8e8e8] dark:bg-[#10132E]">
                        {item}
                      </span>
                    ))}

                    <span className="py-5 px-3 rounded-lg text-center bg-[#e8e8e8] dark:bg-[#10132E]"/>
                  </div>

                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#e8e8e8] dark:bg-[#10132E]"></span>
                    {['AWS', 'SST', 'Tailwind'].map
                    ((item) => (
                      <span
                        key={item}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#e8e8e8] dark:bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

              </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="bg-zinc-200 text-black-100 dark:!bg-[#161A31] dark:text-white-100"
                />
              </div>
            )}

          </div>
        </div>
      </div>
    )}
    </>
  );
};
