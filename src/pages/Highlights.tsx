

import React, { Suspense, useEffect, lazy } from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import NewTeam from "@/components/ui/NewTeam";

/* =========================
   LAZY LOADED COMPONENTS
   ========================= */
const SparkNavbar = lazy(() => import("../components/SparkNavbar"));
const ParallaxScrollDemo = lazy(() =>
  import("@/components/ui/ParallelScrolldemo").then((module) => ({
    default: module.ParallaxScrollDemo,
  }))
);
const CircularGallery = lazy(() => import("@/components/ui/circulargallary"));
const PreviousYear = lazy(() => import("@/components/PreviousYear"));
const DemoOne = lazy(() => import("@/components/DemoOne"));
const Footer = lazy(() => import("@/components/Footer"));

/* =========================
   IMAGES
   ========================= */

const img35 = "/gallery_images/img35.jpg";
const img29 = "/gallery_images/img29.jpg";
const img18 = "/gallery_images/img18.jpg";
const img2 = "/gallery_images/img2.jpg";
const img20 = "/gallery_images/img20.jpg";


/* =========================
   DATA
   ========================= */
const galleryItems = [
  { image: img35, text: "" },
  { image: img29, text: "" },
  { image: img18, text: "" },
  { image: img2, text: "" },
  { image: img20, text: "" },
];

/* =========================
   PAGE
   ========================= */
const HighlightsPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-center pt-10">
        <Suspense fallback={null}>
          <SparkNavbar />
        </Suspense>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen text-white relative overflow-x-hidden bg-black selection:bg-pink-500/30"
      >
        <div className="w-full relative z-20">

          {/* PARALLAX (VERY HEAVY) */}
          <Suspense
            fallback={
              <div className="h-[60vh] flex items-center justify-center text-gray-500">
                Loading highlights...
              </div>
            }
          >
            <ParallaxScrollDemo />
          </Suspense>

          {/* HIGHLIGHTS SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[65vh] flex flex-col justify-center py-6 md:py-8 mb-2 relative"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />

            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
              HIGHLIGHTS
            </h2>

            <div className="h-[50vh] md:h-[60vh] w-full">
              <Suspense
                fallback={
                  <div className="h-full flex items-center justify-center text-gray-500 text-lg">
                    Loading gallery...
                  </div>
                }
              >
                <CircularGallery items={galleryItems} />
              </Suspense>
            </div>
          </motion.section>

          {/* PREVIOUS YEAR */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 md:py-16 mb-2 bg-gradient-to-b from-transparent via-black/40 to-transparent min-h-[50vh]"
          >
            <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
              <PreviousYear />
            </Suspense>
          </motion.section>

          {/* BTS SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-6 md:py-8 min-h-[65vh] relative mb-2"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-[#FF1493] to-blue-600 bg-clip-text text-transparent">
              BEHIND THE SCENES
            </h2>

            <div className="h-[700px] w-full flex items-center justify-center overflow-hidden relative z-10 -my-10">
              <Suspense fallback={<div className="text-gray-500">Loading experience...</div>}>
                <DemoOne />
              </Suspense>
            </div>
          </motion.section>

          {/* TEAM SECTION */}

        </div>
      </motion.div>

      {/* FOOTER */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default HighlightsPage;
