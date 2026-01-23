"use client";
import { ParallaxScroll } from "./Highlights_starting";

interface ParallaxScrollDemoProps {
  images: string[];
}

export function ParallaxScrollDemo({ images }: ParallaxScrollDemoProps) {
  return <ParallaxScroll images={images} />;
}
