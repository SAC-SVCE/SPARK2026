import SphereImageGrid, { ImageData } from "@/components/ui/img-sphere";
import React, { useEffect, useState } from "react";

/* ================= IMAGE DATA ================= */
const BASE_IMAGES: Omit<ImageData, "id">[] = [
  { src: "/gallery_images/img1.jpg", alt: "Image 1", title: "", description: "" },
  { src: "/gallery_images/img2.jpg", alt: "Image 2", title: "", description: "" },
  { src: "/gallery_images/img3.jpg", alt: "Image 3", title: "", description: "" },
  { src: "/gallery_images/img4.jpg", alt: "Image 4", title: "", description: "" },
  { src: "/gallery_images/img38.jpg", alt: "Image 5", title: "", description: "" },
];

const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  IMAGES.push({ id: `img-${i}`, ...BASE_IMAGES[i % BASE_IMAGES.length] });
}

/* ================= COMPONENT ================= */
export default function DemoOne() {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* 🔥 Reduce image count on mobile for visibility */
  const FINAL_IMAGES = isMobile ? IMAGES.slice(0, 24) : IMAGES;

  /* 🔥 Responsive container + sphere config */
  const mobileContainerSize = Math.min(screenWidth * 0.9, 360);

  const CONFIG = {
    containerSize: isMobile ? mobileContainerSize : 600,
    sphereRadius: isMobile ? 140 : 200,
    baseImageScale: isMobile ? 0.18 : 0.15,
    perspective: isMobile ? 650 : 1000,

    dragSensitivity: 0.8,
    momentumDecay: 0.96,
    maxRotationSpeed: 5,
    hoverScale: 1.2,
    autoRotate: true,
    autoRotateSpeed: isMobile ? 0.08 : 0.2,
  };

  return (
    <main className="w-full flex justify-center items-center py-8 overflow-visible">
      <div
        className="relative flex justify-center items-center"
        style={{
          width: CONFIG.containerSize,
          height: CONFIG.containerSize,
        }}
      >
        <SphereImageGrid
          images={FINAL_IMAGES}
          {...CONFIG}
          style={{
            transform: `scale(${isMobile ? 0.6 : 1})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </main>
  );
}
