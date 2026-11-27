"use client";
import * as React from "react";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const RevealText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const m = useMotionValue(0);
  const smoothed = useSpring(m, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    m.set(((x / width) - 0.5) * 20);
  };

  const handleMouseLeave = () => {
    m.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative cursor-none whitespace-nowrap overflow-hidden",
        className
      )}
    >
      <div className="inline-block">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block will-change-transform"
            style={{
              transform: `translateX(${smoothed * -1}px)`,
              transition: "transform 0.5s ease-out",
              opacity: isInView ? 1 : 0,
              transitionDelay: `${i * 0.1 + delay}s`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
