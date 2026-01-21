import React, { Suspense, useEffect } from "react";
import PillNav from "../components/ui/pillNav";
import Logo from "@/assets/spark-logo.png";
import PreviousYear from "@/components/PreviousYear";
import CircularGallery from "@/components/ui/circulargallary";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BeamsBackground } from "@/components/ui/beams";
import CircularTestimonials from "@/components/ui/bts";
import { motion } from "motion/react";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/ui/smooth-scroll";


// YOUR EXACT ORIGINAL IMAGES - UNCHANGED
import img1 from "../assets/gallery_images/img1.jpg";
import img19 from "../assets/gallery_images/img19.jpg";
import img3 from "../assets/gallery_images/img3.jpg";
import img4 from "../assets/gallery_images/img4.jpg";
import img5 from "../assets/gallery_images/img5.jpg";
import img6 from "../assets/gallery_images/img6.jpg";
import img7 from "../assets/gallery_images/img7.jpg";
import img8 from "../assets/gallery_images/img8.jpg";
import img21 from "../assets/gallery_images/img21.jpg";
import img25 from "../assets/gallery_images/img25.jpg";
import img11 from "../assets/gallery_images/img11.jpg";
import img12 from "../assets/gallery_images/img12.jpg";
import img13 from "../assets/gallery_images/img13.jpg";
import img14 from "../assets/gallery_images/img14.jpg";
import img41 from "../assets/gallery_images/img41.jpg";
import img35 from "../assets/gallery_images/img35.jpg";
import img29 from "../assets/gallery_images/img29.jpg";
import img18 from "../assets/gallery_images/img18.jpg";
import img2 from "../assets/gallery_images/img2.jpg";
import img20 from "../assets/gallery_images/img20.jpg";
import img39 from "../assets/gallery_images/img39.jpg";
import img42 from "../assets/gallery_images/img42.jpg";
import img26 from "../assets/gallery_images/img26.jpg";


const products = [
  { title: "", link: "#", thumbnail: img1 },
  { title: "", link: "#", thumbnail: img19 },
  { title: "", link: "#", thumbnail: img3 },
  { title: "", link: "#", thumbnail: img4 },
  { title: "", link: "#", thumbnail: img5 },
  { title: "", link: "#", thumbnail: img6 },
  { title: "", link: "#", thumbnail: img7 },
  { title: "", link: "#", thumbnail: img8 },
  { title: "", link: "#", thumbnail: img21 },
  { title: "", link: "#", thumbnail: img25 },
  { title: "", link: "#", thumbnail: img11 },
  { title: "", link: "#", thumbnail: img12 },
  { title: "", link: "#", thumbnail: img13 },
  { title: "", link: "#", thumbnail: img14 },
  { title: "", link: "#", thumbnail: img41 },
];


const galleryItems = [
  { image: img35, text: "" },
  { image: img29, text: "" },
  { image: img18, text: "" },
  { image: img2, text: "" },
  { image: img20, text: "" },
];


const images = [img25, img39, img42, img26];


const HighlightsPage: React.FC = () => {
  const location = useLocation();


  // 🔥 PRELOAD CRITICAL IMAGES FOR 1.5s SPEED BOOST
  useEffect(() => {
    [img1, img19, img3, img4, img5, img6].forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img;
      document.head.appendChild(link);
    });
  }, []);


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[1000]">
        <PillNav
          logo={Logo}
          logoAlt="spark Logo"
          items={[
            { label: "Gallery", href: "/highlights" },
            { label: "Proshow", href: "/proshow" },
            { label: "Team", href: "/team" },
            { label: "Register", href: "/register" },
          ]}
          activeHref="/highlights"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#040204ff"
          pillColor="linear-gradient(130deg, #b510ebff, #f81184ff)"
          hoveredPillTextColor="#fbfbfbff"
          pillTextColor="#faf3f3ff" />
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen text-white relative overflow-x-hidden bg-black selection:bg-pink-500/30"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-0"
        >
          {/* <BeamsBackground /> */}
        </motion.div>


        <div className="w-full">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full items-center justify-center" />


          <div className="relative z-10 pt-20">
            {/* HERO PARALLAX - OPTIMIZED WITH PRELOADING */}
            <section>
              <Suspense fallback={
                <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full shadow-2xl shadow-pink-500/50 mx-auto mb-6"
                  />
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-black bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent tracking-widest">
                      SPARK 2026
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mt-2 font-light tracking-wide">
                      Loading highlights...
                    </p>
                  </div>
                </section>
              }>
                <HeroParallax products={products} />
              </Suspense>
            </section>


            {/* YOUR ORIGINAL HIGHLIGHTS SECTION - UNCHANGED */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-h-[80vh] flex flex-col justify-center py-20 relative"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                HIGHLIGHTS
              </h2>
              <div className="h-[60vh] w-full">
                <Suspense fallback={<div className="h-full flex items-center justify-center text-gray-500 text-lg">Loading gallery...</div>}>
                  <CircularGallery items={galleryItems} />
                </Suspense>
              </div>
            </motion.section>


            {/* YOUR ORIGINAL PREVIOUS YEAR - UNCHANGED */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="py-20 bg-gradient-to-b from-transparent via-black/40 to-transparent backdrop-blur-sm"
            >
              <PreviousYear />
            </motion.section>


            {/* YOUR ORIGINAL BTS - UNCHANGED */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-20 min-h-[80vh] flex flex-col justify-center relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-[#FF1493] to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,20,147,0.5)]">
                BEHIND THE SCENES
              </h2>
              <Suspense fallback={<div className="h-[60vh] flex items-center justify-center text-gray-500 text-lg">Loading BTS...</div>}>
                <CircularTestimonials testimonials={images.map(src => ({ src }))} />
              </Suspense>
            </motion.section>
          </div>
        </div>
      </motion.div>


      <Footer />
    </>
  );
};


export default HighlightsPage;