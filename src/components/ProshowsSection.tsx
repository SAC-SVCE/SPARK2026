import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import day1image from "../assets/day1image.jpeg";
import day2image from "../assets/day2image.jpeg";

const ProshowsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section className="py-12 relative bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 pointer-events-none" />

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4 tracking-wider">
                        STAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">PROSHOWS</span>
                    </h2>
                    <p className="text-gray-400 md:text-xl max-w-2xl mx-auto font-exo tracking-wide">
                        Witness the electrifying performances that set the night on fire.
                        Two nights, infinite memories.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Card 1: DJ Night */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                            {/* Image Container */}
                            {/* Image Container */}
                            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                <img
                                    src={day1image}
                                    alt="DJ Night"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-bold tracking-widest uppercase">
                                        Day 1
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-2 font-orbitron italic">
                                        DJ NIGHT
                                    </h3>
                                    
                                    <Link to="/proshow">
                                        <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-purple-400 hover:text-white transition-colors duration-300 skew-x-[-10deg]">
                                            <span className="skew-x-[10deg] inline-block">Explore Lineup</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Absolute Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-purple-500/30 rounded-tr-3xl -z-10 group-hover:border-purple-500 transition-colors" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-purple-500/30 rounded-bl-3xl -z-10 group-hover:border-purple-500 transition-colors" />
                    </motion.div>

                    {/* Card 2: Music Band */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                            {/* Image Container */}
                            {/* Image Container */}
                            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                <img
                                    src={day2image}
                                    alt="Live Band"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-bold tracking-widest uppercase">
                                        Day 2
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-2 font-orbitron italic">
                                        LIVE BAND
                                    </h3>
                                
                                    <Link to="/proshow">
                                        <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-white transition-colors duration-300 skew-x-[-10deg]">
                                            <span className="skew-x-[10deg] inline-block">Explore Lineup</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Absolute Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-cyan-500/30 rounded-tr-3xl -z-10 group-hover:border-cyan-500 transition-colors" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-cyan-500/30 rounded-bl-3xl -z-10 group-hover:border-cyan-500 transition-colors" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProshowsSection;
