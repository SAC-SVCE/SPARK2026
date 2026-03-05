import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ⚠️ SET YOUR REGISTRATION DEADLINE HERE (IST)
const REGISTRATION_DEADLINE = new Date("2026-03-06T00:00:00+05:30");

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

const RegistrationToast: React.FC = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = REGISTRATION_DEADLINE.getTime() - now.getTime();

            if (difference <= 0) {
                setIsExpired(true);
                return { hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (isExpired) return null;

    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <AnimatePresence mode="wait">
            {!isMinimized ? (
                <motion.div
                    key="toast-full"
                    initial={{ x: 350, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 350, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="fixed top-20 right-2 sm:right-4 z-[9999] w-[220px] sm:w-[280px] cursor-pointer"
                    id="registration-toast"
                    onClick={() => setIsMinimized(true)}
                >
                    <div
                        className="relative rounded-xl overflow-hidden border border-[hsl(var(--fire-orange)/0.35)]"
                        style={{
                            background: "linear-gradient(135deg, hsl(220 25% 8% / 0.95), hsl(220 20% 6% / 0.95))",
                            backdropFilter: "blur(16px)",
                            boxShadow:
                                "0 0 20px hsl(var(--fire-orange) / 0.15), 0 0 40px hsl(var(--fire-orange) / 0.08), 0 8px 24px rgba(0,0,0,0.35)",
                        }}
                    >
                        {/* Shimmer accent bar */}
                        <div
                            className="h-[3px] w-full bg-gradient-to-r from-[hsl(var(--fire-orange))] via-[hsl(0,100%,50%)] to-[hsl(var(--fire-orange))]"
                            style={{ animation: "shimmer 2s linear infinite", backgroundSize: "200% 100%" }}
                        />

                        <div className="px-2.5 py-2 sm:px-4 sm:py-3">
                            {/* Header row — icon + title + warning badge inline */}
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle
                                    size={15}
                                    className="text-[hsl(var(--fire-orange))] shrink-0 animate-pulse"
                                    style={{ filter: "drop-shadow(0 0 4px hsl(var(--fire-orange) / 0.5))" }}
                                />
                                <h4
                                    className="text-[9px] sm:text-[11px] font-orbitron font-bold text-[hsl(var(--fire-orange))] tracking-wide leading-none"
                                    style={{ textShadow: "0 0 10px hsl(var(--fire-orange) / 0.35)" }}
                                >
                                    Registration Closing Soon!
                                </h4>
                            </div>

                            <p className="text-[8px] sm:text-[10px] text-[hsl(var(--muted-foreground))] mb-1.5 sm:mb-2.5 font-exo pl-[23px]">
                                Spark registration ends in:
                            </p>

                            {/* Compact Countdown */}
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                {[
                                    { value: pad(timeLeft.hours), label: "Hrs" },
                                    { value: pad(timeLeft.minutes), label: "Min" },
                                    { value: pad(timeLeft.seconds), label: "Sec" },
                                ].map((item, i) => (
                                    <React.Fragment key={item.label}>
                                        <div className="flex flex-col items-center">
                                            <div
                                                className="w-[40px] h-[32px] sm:w-[52px] sm:h-[42px] flex items-center justify-center rounded-md border border-[hsl(var(--fire-orange)/0.25)] font-orbitron text-sm sm:text-lg font-bold text-white"
                                                style={{
                                                    background: "linear-gradient(180deg, hsl(220 25% 12%) 0%, hsl(220 25% 7%) 100%)",
                                                    boxShadow:
                                                        "0 0 10px hsl(var(--fire-orange) / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.04)",
                                                }}
                                            >
                                                <span className="text-glow-orange">{item.value}</span>
                                            </div>
                                            <span className="text-[7px] sm:text-[8px] mt-0.5 sm:mt-1 text-[hsl(var(--muted-foreground))] font-exo uppercase tracking-widest">
                                                {item.label}
                                            </span>
                                        </div>
                                        {i < 2 && (
                                            <span className="text-[hsl(var(--fire-orange))] text-xs sm:text-base font-bold mb-2 sm:mb-3 animate-pulse">
                                                :
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                /* Minimized — compact pill */
                <motion.button
                    key="toast-minimized"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    onClick={() => setIsMinimized(false)}
                    className="fixed top-20 right-2 sm:right-4 z-[9999] flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-[hsl(var(--fire-orange)/0.4)] font-orbitron text-[9px] sm:text-[11px] font-bold text-[hsl(var(--fire-orange))] cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        background: "linear-gradient(135deg, hsl(220 25% 8% / 0.95), hsl(220 20% 6% / 0.95))",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 0 15px hsl(var(--fire-orange) / 0.15), 0 6px 20px rgba(0,0,0,0.25)",
                        textShadow: "0 0 8px hsl(var(--fire-orange) / 0.4)",
                    }}
                    aria-label="Show registration timer"
                    id="registration-toast-minimized"
                >
                    <AlertTriangle size={13} className="animate-pulse" />
                    <span>
                        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default RegistrationToast;
