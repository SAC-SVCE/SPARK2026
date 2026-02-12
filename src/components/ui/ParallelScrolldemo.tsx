"use client";
import bgvideo from "../../assets/Highlights_bgVedio.mp4";

export function ParallaxScrollDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* <ParallaxScroll images={images} className="h-[200vh] w-full" /> */}
       {/* <section className="relative w-full h-screen overflow-hidden"> */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgvideo}
          autoPlay
          loop
          muted
          playsInline
        />

      {/* 🌟 OVERLAY TITLE HERO SECTION */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-9xl font-orbitron font-black border-2 border-white text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-black drop-shadow-[0_0_35px_rgba(236,72,153,0.6)]">
          SPARK 2026
        </h1>
        <p className="text-orange-400 font-orbitron text-xl md:text-2xl mt-4 tracking-[0.3em] uppercase drop-shadow-lg">
            Inter College Techno Cultural Sports Fest
        </p>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none z-20" />
    </div>
  );
}

const images = [
  "/gallery_images/img1.jpg",
  "/gallery_images/img19.jpg",
  "/gallery_images/img3.jpg",
  "/gallery_images/img4.jpg",
  "/gallery_images/img5.jpg",
  "/gallery_images/img6.jpg",
  "/gallery_images/img7.jpg",
  "/gallery_images/img8.jpg",
  "/gallery_images/img21.jpg",
  "/gallery_images/img25.jpg",
  "/gallery_images/img11.jpg",
  "/gallery_images/img12.jpg",
  "/gallery_images/img13.jpg",
  "/gallery_images/img14.jpg",
  "/gallery_images/img41.jpg",
  "/gallery_images/img35.jpg",
  "/gallery_images/img29.jpg",
  "/gallery_images/img18.jpg",
  "/gallery_images/img2.jpg",
  "/gallery_images/img20.jpg",
  "/gallery_images/img39.jpg",
  "/gallery_images/img42.jpg",
  "/gallery_images/img26.jpg"
];
