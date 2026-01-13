import React from 'react';
import homebackground from "@/assets/Home_background2.jpeg";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComingSoon: React.FC = () => {
    return (
    <>
        <Navbar />
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
           

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black text-white font-[Orbitron] tracking-wider mb-6 drop-shadow-2xl"
                >
                    COMING SOON
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="h-[2px] w-24 bg-[#c30d16] mb-2" />
                    <p className="text-gray-300 text-lg md:text-2xl font-[Exo 2] tracking-[0.3em] font-light uppercase">
                        Zone Under Construction
                    </p>
                </motion.div>
            </div>
        </section>
        <Footer />
    </>
    );
};

export default ComingSoon;
