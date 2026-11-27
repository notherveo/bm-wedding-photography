"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const FilmReel = ({
  films,
  className,
}: {
  films: {
    title: string;
    director: string;
    duration: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("grid gap-4", className)}>
      {films.map((film, i) => (
        <div
          key={i}
          className={cn(
            "relative overflow-hidden rounded-lg group",
            active === i ? "ring-2 ring-gold" : "opacity-70"
          )}
        >
          <img
            src={film.image}
            alt={film.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                {film.title}
              </h3>
              <p className="text-sm text-gray-300">
                Directed by {film.director} • {film.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
