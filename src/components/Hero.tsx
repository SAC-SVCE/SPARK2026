import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import homebackground from "@/assets/WEB.jpg";
import mobilebackground from "@/assets/MOBILE VIEW.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    const ref = useRef(null);

    /* =========================
       🔥 COUNTDOWN UNTIL TOMORROW 11:59:59 PM
    ========================== */

   const getTargetTime = () => {
    const now = new Date();

    // Today at 11:59:59 PM
    const todayNight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),  
        23,
        59,
        59
    );

    return todayNight.getTime();
};


    const [showPopup, setShowPopup] = useState(true);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const targetTime = getTargetTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            if (distance <= 0) {
                clearInterval(interval);
                setShowPopup(false);
                return;
            }

            setTimeLeft(distance);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 🔥 Convert to Total Remaining Hours (not % 24)
    // const totalHours = Math.floor(timeLeft / (1000 * 60 * 60));
    // const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    /* =========================
       🎨 HERO UI
    ========================== */

    return (
        <section
            id="home"
            ref={ref}
            className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] md:min-h-[100vh]"
        >

            {/* 🔥 POPUP */}
            {/* {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-transparent rounded-xl shadow-2xl max-w-xl w-full p-6 text-center">
                       
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                            ⚠️ Registration Closing Soon!
                        </h2>

                        <p className="text-zinc-100 mb-4">
                            Spark registration ends in:
                        </p> */}

                        {/* Live Countdown */}
                        {/* <div className="flex justify-center gap-6 mb-6 text-black">
                            <div>
                                <div className="text-3xl text-white font-bold">
                                    {String(totalHours).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-yellow-400">Hours</div>
                            </div>

                            <div>
                                <div className="text-3xl text-white font-bold">
                                    {String(minutes).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-yellow-400">Minutes</div>
                            </div> */}

                            {/* <div>
                                <div className="text-3xl text-white font-bold">
                                    {String(seconds).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-yellow-400">Seconds</div>
                            </div>
                        </div>
                        <p className="text-red-700 text-xl md:text-2xl py-6">
                          <span className="text-red-700 text-2xl md:text-3xl py-6"> Note!: </span><span className="text-yellow-200">For more information refer Rules and Regulations</span>
                        </p>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white px-6 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300"
                        >
                            OK
                        </button>

                    </div>
                </div>
            )} */}

            {/* Desktop Background */}
            <div className="hidden md:block absolute inset-0">
                <img
                    src={homebackground}
                    alt="Desktop Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Mobile Background */}
            <div className="block md:hidden relative w-full h-auto">
                <img
                    src={mobilebackground}
                    alt="Mobile Banner"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Scroll Indicator */}
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