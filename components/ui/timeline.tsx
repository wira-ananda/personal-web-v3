"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Hitung tinggi seluruh konten, bukan hanya viewport
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, data]);

  // Scroll progress untuk seluruh container
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end 90%"], // sampai akhir kontainer
  });

  // Transform progress menjadi tinggi dan opacity garis
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={contentRef}>
      <div className="max-w-5xl mx-auto"></div>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pb-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs md:w-full">
              <div
                className="h-10 absolute left-4 w-10 rounded-full bg-muted dark:bg-black flex items-center justify-center"
                id="dot"
              >
                <div className="h-4 w-4 rounded-full bg-primary-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 font-medium">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-medium">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* Garis timeline */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-2 bg-linear-to-t from-teal-600 via-teal-800 to-black from-0% via-90% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
