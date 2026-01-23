"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ------------ CONFIG ------------ */
  const IMAGES_PER_COLUMN = 7;
  const IMAGE_HEIGHT = 152; // image height + gap (must match exactly)
  const SPEED_DESKTOP = 1.4;
  const SPEED_MOBILE = 2.4;
  /* -------------------------------- */

  /* 📱 Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Ensure enough images (21 total) */
  const repeatToLength = (arr: string[], len: number) =>
    Array.from({ length: len }, (_, i) => arr[i % arr.length]);

  const fixedImages = repeatToLength(images, IMAGES_PER_COLUMN * 3);

  const col1 = fixedImages.slice(0, 7);
  const col2 = fixedImages.slice(7, 14);
  const col3 = fixedImages.slice(14, 21);

  const loopHeight = IMAGES_PER_COLUMN * IMAGE_HEIGHT;

  /* 🔥 MASTER INFINITE LOOP */
  useEffect(() => {
    let raf: number;
    const speed = isMobile ? SPEED_MOBILE : SPEED_DESKTOP;

    const animate = () => {
      setOffset((prev) => (prev + speed) % loopHeight);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isMobile, loopHeight]);

  /* 🔁 COLUMN COMPONENT */
  const Column = ({
    images,
    direction,
    speed,
  }: {
    images: string[];
    direction: "up" | "down";
    speed: number;
  }) => (
    <div className="overflow-hidden h-full">
      <motion.div
        style={{
          y:
            direction === "up"
              ? -offset * speed
              : offset * speed - loopHeight, // ✅ NO BLACK GAP
        }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="mb-3 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 transition hover:border-pink-400/60">
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover transition hover:brightness-125"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className={cn("w-full bg-black/20", className)}>
      <div
        className="
          w-full
          h-[75vh]
          md:h-[85vh]
          lg:h-[100dvh]
          max-w-7xl
          mx-auto
          px-4
          overflow-hidden
        "
      >
        {/* ✅ 3 COLUMNS EVEN ON MOBILE */}
        <div className="grid grid-cols-3 gap-2 h-full">

          {/* COLUMN 1 – UP */}
          <Column images={col1} direction="up" speed={1} />

          {/* COLUMN 2 – DOWN */}
          <Column images={col2} direction="down" speed={0.9} />

          {/* COLUMN 3 – UP (FASTER) */}
          <Column images={col3} direction="up" speed={1.3} />

        </div>
      </div>

      {/* 🖼️ MODAL */}
{selectedImage && (
  <div
    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
    onClick={() => setSelectedImage(null)} // Click on backdrop closes modal
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative max-w-5xl max-h-[95vh]"
      onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
    >
      {/* ✅ ADD ONCLICK HERE */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-12 right-0 text-white text-4xl hover:text-pink-400 transition"
      >
        ×
      </button>
      <img
        src={selectedImage}
        alt="Fullscreen"
        className="w-full max-h-[95vh] object-contain rounded-3xl shadow-2xl border-4 border-white/20"
      />
    </motion.div>
  </div>
)}

    </div>
  );
};
