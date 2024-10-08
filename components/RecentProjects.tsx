"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useTheme } from "next-themes";
import Image from 'next/image'

const RecentProjects = () => {

  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [ isChecked, setIsChecked ] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsChecked(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return (
    <>
      {mounted && (
        <div className="py-20" id="projects">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-zinc-600 dark:text-purple">recent projects</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map((item) => (
              
              <div
                className="sm:h-[41rem] h-[32rem] first-line:lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                key={item.id}
              >
                
                  <PinContainer
                    title={item.jump}
                    href={item.link}
                  >
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">

                      <div
                          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                          style={{ backgroundColor: resolvedTheme === 'dark' ? '#13162D' : '#090909' }}
                        >
                        <Image src="/bg.png" alt="bgimg" width={500} height={500} />
                      </div>
                      <Image
                        width={600} height={600}
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0"
                      />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: resolvedTheme === 'dark' ? 'text-zinc-500' : '#626264',
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-zinc-200 dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <Image src={icon} alt="icon5" width={500} height={500} className="p-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-zinc-600 dark:text-purple">
                          Check GitHub Repo
                        </p>
                        <FaLocationArrow className="ms-3" color={resolvedTheme === 'dark' ? '#CBACF9' : '#626264'} />
                      </div>
                    </div>
                    </a>
                  </PinContainer>
              
              </div>
            
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentProjects;