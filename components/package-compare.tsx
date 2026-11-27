"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const PackageCompare = ({
  packages,
  className,
}: {
  packages: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  className?: string;
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={cn("grid gap-4", className)}>
      {packages.map((pkg, i) => (
        <div
          key={i}
          className={cn(
            "relative p-6 rounded-lg border transition-all",
            pkg.popular && "border-gold",
            selected === i ? "ring-2 ring-gold" : "opacity-70"
          )}
        >
          {pkg.popular && (
            <span className="absolute -top-3 right-3 bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">
              Popular
            </span>
          )}
          <h3 className="text-xl font-display font-bold text-gray-900">
            {pkg.name}
          </h3>
          <p className="text-3xl font-bold text-gold mt-2">{pkg.price}</p>
          <ul className="mt-4 space-y-2">
            {pkg.features.map((feature, j) => (
              <li key={j} className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
