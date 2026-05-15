"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "The", "future", "doesn't", "belong", "to", "companies",
  "that", "follow", "technology.", "It", "belongs", "to",
  "those", "who", "build", "it.",
];

function Word({ word, progress, start, end }: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.08, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}

export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white px-6 dark:bg-slate-950">
        <p className="max-w-4xl text-center text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
          {words.map((word, i) => {
            const step = 1 / words.length;
            const start = i * step;
            const end = start + step;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
