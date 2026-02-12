import React from "react";
import SparkNavbar from "../components/SparkNavbar";
import bgVideo from "../assets/bg-video.mp4";
import ProshowCard from "../components/ui/ProshowCard";
import ProshowCard2 from "../components/ui/ProshowCard2";
import LightRays from "@/components/ui/proshowrays";
import Footer from "@/components/Footer";

import bgImage from "../assets/bgImage.avif";
import ScrollAnimate from "@/components/ui/proshowcardAnimation";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../components/ui/gridAnimation";



const Proshow: React.FC = () => {
  return (
    <div className="w-full ">

      {/* 🎥 VIDEO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* <div className="relative z-10 flex justify-center items-center h-full "> */}
        <SparkNavbar />
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* ✨ Text Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <div>
            <ScrollAnimate>
              <h1 className="text-white text-6xl font-extrabold drop-shadow-[0_0_25px_#ec4899]">
                FEEL THE RHYTHM
              </h1>
            </ScrollAnimate>
            <p></p>
            <ScrollAnimate direction="right">
              <h3 className="text-white text-1xl md:text-3xl font-extrabold tracking-wide">
                Lose Yourself in the Sound
              </h3>
            </ScrollAnimate>
            <p className="mt-6 text-white text-lg md:text-2xl">
              Music That Moves Every Heart
            </p>
            <p className="mt-4 text-white/90 text-lg md:text-2xl">
              This Is Where Memories Are Made.
            </p>
          </div>
        </div>
      </section>

      {/* 🔆 LIGHT RAYS + CARD SECTION */}
      <section
        className="relative w-full min-h-[50vh] overflow-hidden bg-cover bg-center bg-black"
      // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={1.5}
          duration={1}
          repeatDelay={0.5}
          className={cn(
            // "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0  z-0" />


        <div className="relative z-10 flex flex-col items-center gap-12 min-h-[50vh] py-20">

          <ScrollAnimate>
            <ProshowCard />
          </ScrollAnimate>

          <ScrollAnimate>
            <ProshowCard2 />
          </ScrollAnimate>

        </div>

      </section>

      {/* <section>
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
          <div className="text-center animate-pulse">
            <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500 drop-shadow-[0_0_30px_#ec4899]">
              COMING SOON
            </h1>
  
          </div>
        </div>
      </section> */}

      <Footer />


    </div>
  );
};

export default Proshow;
