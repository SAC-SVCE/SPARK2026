import React, { Suspense, useEffect } from "react";

import PreviousYear from "@/components/PreviousYear";
import CircularGallery from "@/components/ui/circulargallary";
import { ParallaxScrollDemo } from "@/components/ui/ParallelScrolldemo"; // NEW IMPORT
import { motion } from "motion/react";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import SparkNavbar from "../components/SparkNavbar";
import DemoOne from "@/components/DemoOne";


// YOUR EXACT ORIGINAL IMAGES - UNCHANGED
const img1 = "/gallery_images/img1.jpg";
const img19 = "/gallery_images/img19.jpg";
const img3 = "/gallery_images/img3.jpg";
const img4 = "/gallery_images/img4.jpg";
const img5 = "/gallery_images/img5.jpg";
const img6 = "/gallery_images/img6.jpg";
const img25 = "/gallery_images/img25.jpg";

const img35 = "/gallery_images/img35.jpg";
const img29 = "/gallery_images/img29.jpg";
const img18 = "/gallery_images/img18.jpg";
const img2 = "/gallery_images/img2.jpg";
const img20 = "/gallery_images/img20.jpg";
const img39 = "/gallery_images/img39.jpg";
const img42 = "/gallery_images/img42.jpg";
const img26 = "/gallery_images/img26.jpg";





const galleryItems = [
  { image: img35, text: "" },
  { image: img29, text: "" },
  { image: img18, text: "" },
  { image: img2, text: "" },
  { image: img20, text: "" },
];

const images = [...[img25, img39, img42, img26], ...[img25, img39, img42, img26]];

// 🔥 ALL YOUR IMAGES FOR PARALLAX GRID


const HighlightsPage: React.FC = () => {
  const location = useLocation();

  // 🔥 PRELOAD CRITICAL IMAGES FOR SPEED BOOST - Removed to prevent console warnings
  // If needed, we can use <link rel="preload"> in the HTML head or let the browser handle it naturally.


  return (
    <>
      {/* NAVBAR */}

      <div className="flex justify-center pt-10">
            <SparkNavbar />
          </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen text-white relative overflow-x-hidden bg-black selection:bg-pink-500/30"
      >
        {/* BACKGROUND */}


        <div className="w-full relative z-20">

          <ParallaxScrollDemo />


          {/* HIGHLIGHTS SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[65vh] flex flex-col justify-center py-6 md:py-8 mb-2 relative"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              HIGHLIGHTS
            </h2>
            <div className="h-[50vh] md:h-[60vh] w-full">
              <Suspense fallback={<div className="h-full flex items-center justify-center text-gray-500 text-lg">Loading gallery...</div>}>
                <CircularGallery items={galleryItems} />
              </Suspense>
            </div>
          </motion.section>

          {/* PREVIOUS YEAR SECTION */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 md:py-16 mb-2 bg-gradient-to-b from-transparent via-black/40 to-transparent backdrop-blur-sm min-h-[50vh] flex flex-col justify-center"
          >
            <PreviousYear />
          </motion.section>

          {/* BTS SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-6 md:py-8 min-h-[65vh] flex flex-col justify-center relative mb-2"
          >

            <section>

              <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-[#FF1493] to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,20,147,0.5)]">
                BEHIND THE SCENES
              </h2>

              {/* Change h-[400px] to h-[500px] to see the full sphere */}
              <div className="h-[700px] w-full flex items-center justify-center overflow-hidden relative z-10 -my-10">
                <DemoOne />
              </div>

            </section>

          </motion.section>
        </div>


        {/* Change h-[400px] to h-[500px] to see the full sphere */}

      </motion.div>

      <Footer />
    </>
  );
};

export default HighlightsPage;
