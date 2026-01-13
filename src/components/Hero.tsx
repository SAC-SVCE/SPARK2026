import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sword, Trophy, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import homebackground from "@/assets/Home_bannerfinal.jpeg";
import sparkLogo from "@/assets/spark-logo.png";
import { motion } from "framer-motion";

const Hero = () => {
    const navigate = useNavigate();
    const ref = useRef(null);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("2026-02-28T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            ref={ref}
            className="relative min-h-[100dvh] md:min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] py-20"
        >
            {/* Static Professional Background */}
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${homebackground})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/20 via-transparent to-transparent" />
            </div>

            {/* Grid Overlay - Very Subtle */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Center Content - Scroll Triggered */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-30 container mx-auto px-4 flex flex-col items-center justify-center text-center w-full h-full"
            >
                {/* Logo - Static & Centered */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 w-full max-w-[500px] mx-auto"
                >
                    {/* Uncomment your logo */}
                    {/* <img
            src={sparkLogo}
            alt="SPARK 2026"
            className="w-full h-auto object-contain drop-shadow-2xl"
          /> */}
                </motion.div>

                {/* Tagline */}
                {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-2xl text-zinc-300 font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          An Inter-College <span className="text-white font-semibold">Techno-Cultural</span> Sports Event.
        </motion.p> */}

                {/* Buttons - Clean & Professional */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto mb-8 md:mb-16"
                >
                    {/* <Button
            className="bg-primary hover:bg-primary/90 text-white min-w-[180px] h-12 text-base font-medium tracking-wide rounded-sm shadow-lg shadow-primary/20 transition-all duration-300"
            onClick={() => { document.getElementById("events")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <Sword className="w-4 h-4 mr-2" /> JOIN THE SPARK
          </Button>

          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white min-w-[180px] h-12 text-base font-medium tracking-wide rounded-sm backdrop-blur-sm transition-all duration-300"
            onClick={() => navigate("/events")}
          >
            <Trophy className="w-4 h-4 mr-2" /> VIEW EVENTS
          </Button> */}
                </motion.div>

                {/* Sleek Countdown Timer */}
                {/* Countdown Timer - Top Right Corner (REPLACE THE OLD TIMER) */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className=" fixed top-6 right-6 z-50 md:top-20 md:right-8 lg:top-12 lg:right-12"
                >
                    <div className="bg-transparent border border-white/20 rounded-lg p-4 md:p-6 shadow-2xl shadow-black/50">
                        <div className="flex items-center justify-center gap-2 md:gap-4 text-white">
                            <div className="text-center">
                                <div className="text-xl md:text-3xl lg:text-4xl font-light font-orbitron">{String(timeLeft.days).padStart(2, '0')}</div>
                                <div className="text-xs md:text-sm text-zinc-400 tracking-widest uppercase mt-1">Days</div>
                            </div>
                            <div className="text-zinc-500 text-lg md:text-2xl font-light">:</div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl lg:text-4xl font-light font-orbitron">{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="text-xs md:text-sm text-zinc-400 tracking-widest uppercase mt-1">Hrs</div>
                            </div>
                            <div className="text-zinc-500 text-lg md:text-2xl font-light">:</div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl lg:text-4xl font-light font-orbitron">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="text-xs md:text-sm text-zinc-400 tracking-widest uppercase mt-1">Mins</div>
                            </div>
                            <div className="text-zinc-500 text-lg md:text-2xl font-light">:</div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl lg:text-4xl font-light font-orbitron">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                <div className="text-xs md:text-sm text-zinc-400 tracking-widest uppercase mt-1">Secs</div>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <span className="text-xs md:text-sm text-zinc-500 tracking-widest uppercase">SPARK 2026</span>
                        </div>
                    </div>
                </motion.div> */}

            </motion.div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-5 h-5 text-zinc-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
