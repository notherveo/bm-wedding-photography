"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const TestimonialSlider = ({
  testimonials,
  className,
}: {
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("grid gap-4", className)}>
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={cn(
            "p-6 rounded-lg border transition-all",
            active === i ? "ring-2 ring-gold" : "opacity-70"
          )}
        >
          <p className="text-lg italic text-gray-700">"{t.quote}"</p>
          <div className="mt-4">
            <p className="font-bold text-gray-900">{t.author}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
