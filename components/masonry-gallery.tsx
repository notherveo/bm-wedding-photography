"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

export const MasonryGallery = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {images.map((src, i) => (
        <div key={i} className="relative group overflow-hidden">
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <AnimatePresence>
            {active === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
