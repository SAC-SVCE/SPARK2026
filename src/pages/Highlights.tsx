import React from "react";
import PillNav from "../components/ui/pillNav";
import Logo from "@/assets/spark-logo.png";
import PreviousYear from "@/components/PreviousYear";
import CircularGallery from "@/components/ui/circulargallary";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BeamsBackground } from "@/components/ui/beams";
import CircularTestimonials from "@/components/ui/bts";
import { motion } from "motion/react";
import Footer from "@/components/Footer";
import img1 from "../assets/gallery_images/img1.jpg";
import img2 from "../assets/gallery_images/img2.jpg";
import img3 from "../assets/gallery_images/img3.jpg";
import img4 from "../assets/gallery_images/img4.jpg";
import img5 from "../assets/gallery_images/img5.jpg";
import img6 from "../assets/gallery_images/img6.jpg";
import img7 from "../assets/gallery_images/img7.jpg";
import img8 from "../assets/gallery_images/img8.jpg";
import img9 from "../assets/gallery_images/img9.jpg";
import img10 from "../assets/gallery_images/img10.jpg";
import img11 from "../assets/gallery_images/img11.jpg";
import img12 from "../assets/gallery_images/img12.jpg";
import img13 from "../assets/gallery_images/img13.jpg";
import img14 from "../assets/gallery_images/img14.jpg";
import img15 from "../assets/gallery_images/img15.jpg";
import img16 from "../assets/gallery_images/img16.jpg";
import img17 from "../assets/gallery_images/img17.jpg";
import img18 from "../assets/gallery_images/img18.jpg";
import img19 from "../assets/gallery_images/img19.jpg";
import img20 from "../assets/gallery_images/img20.jpg";
import img21 from "../assets/gallery_images/img21.jpg";
import img22 from "../assets/gallery_images/img22.jpg";
import img23 from "../assets/gallery_images/img23.jpg";
import img24 from "../assets/gallery_images/img24.jpg";
import img25 from "../assets/gallery_images/img25.jpg";
import img26 from "../assets/gallery_images/img26.jpg";
import img27 from "../assets/gallery_images/img27.jpg";
import img28 from "../assets/gallery_images/img28.jpg";
import img29 from "../assets/gallery_images/img29.jpg";
import img30 from "../assets/gallery_images/img30.jpg";
import img31 from "../assets/gallery_images/img31.jpg";
import img32 from "../assets/gallery_images/img32.jpg";
import img33 from "../assets/gallery_images/img33.jpg";
import img34 from "../assets/gallery_images/img34.jpg";
import img35 from "../assets/gallery_images/img35.jpg";
import img36 from "../assets/gallery_images/img36.jpg";
import img37 from "../assets/gallery_images/img37.jpg";
import img38 from "../assets/gallery_images/img38.jpg";
import img39 from "../assets/gallery_images/img39.jpg";
import img41 from "../assets/gallery_images/img41.jpg";
import img42 from "../assets/gallery_images/img42.jpg";







import { useLocation } from "react-router-dom";

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

const images = [
  img25, img39, img42, img26
];

import { SmoothScroll } from "@/components/ui/smooth-scroll";

const HighlightsPage: React.FC = () => {
  const location = useLocation();
  return (
    <>
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
          transition={{ duration: 0.5 }}
          className="min-h-screen text-white relative overflow-x-hidden bg-black selection:bg-pink-500/30"
        >
          {/* Background elements with smooth entry */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-0"
          >
            {/* <BeamsBackground /> */}
          </motion.div>

          <div className="w-full">
            {/* 🔹 Video Section */}

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center justify-center">
              {/* Nav was here */}
            </div>
          </div>



          <div className="relative z-10">
            <section>
              <HeroParallax products={products} />
            </section>

            {/* Featured Highlights Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-h-[80vh] flex flex-col justify-center py-20 relative"
            >
              {/* Decorative side line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />

              <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                HIGHLIGHTS
              </h2>

              <div className="h-[60vh] w-full">
                <CircularGallery items={galleryItems} />
              </div>
            </motion.section>

            {/* Previous Year Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="py-20 bg-gradient-to-b from-transparent via-black/40 to-transparent backdrop-blur-sm"
            >
              <PreviousYear />
            </motion.section>

            {/* BTS Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-20 min-h-[80vh] flex flex-col justify-center relative"
            >
              {/* Decorative side line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-50" />

              <h2 className="text-4xl md:text-6xl font-orbitron font-black text-center mb-4 tracking-widest bg-gradient-to-r from-[#FF1493] to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,20,147,0.5)]">
                BEHIND THE SCENES
              </h2>

              <CircularTestimonials
                testimonials={images.map(src => ({ src }))} />
            </motion.section>
          </div>
        </motion.div>


      </>
      <Footer />

    </>



  );
};

export default HighlightsPage;
