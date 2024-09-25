"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      addAnimation();
    }
  }, [mounted]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <>
      {mounted && (
        <div
          ref={containerRef}
          className={cn(
            "mt-10 mb-10 scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className={cn(
                  "w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-100 dark:border-slate-800 p-5 md:p-16 md:w-[60vw] shadow-[0_4px_8px_rgb(0_0_0/0.3)]"
                )}
                style={{
                  background:
                    resolvedTheme === "dark" ? "rgb(4,7,29)" : "rgb(250, 250, 250)",
                  backgroundColor:
                    resolvedTheme === "dark"
                      ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
                      : "linear-gradient(90deg, rgb(252, 251, 238) 0%, rgb(212, 212, 216) 100%)",
                }}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-black dark:text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <div className="me-3">
                        <img
                          src="https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/364795308_817233696693335_2916061795925917316_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9niNZmm9uFAQ7kNvgEWC3zj&_nc_ht=scontent-mnl1-1.xx&_nc_gid=AY7j3Sazfi6TS1RfEZzDys0&oh=00_AYAhdMHlefQAOGHRlaVzwcKwu08tzsnrG6aHb10j-roIqA&oe=66F9DE98"
                          alt="profile"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xl leading-[1.6] text-black dark:text-white font-bold">
                          {item.name}
                        </span>
                        <span className="text-sm leading-[1.6] text-black-200 dark:text-white-200 font-normal">
                          {item.title}
                        </span>
                      </div>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
