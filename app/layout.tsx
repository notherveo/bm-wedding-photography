import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumière | Luxury Wedding Photography & Film",
  description:
    "A luxury wedding photography & film studio. We capture love in its most beautiful moments. Timeless portraits, cinematic films, and an unforgettable day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
