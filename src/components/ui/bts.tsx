import React, {
    useEffect,
    useRef,
    useState,
    useMemo,
    useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
    src: string;
}

interface Colors {
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
}

interface CircularTestimonialsProps {
    testimonials: Testimonial[];
    autoplay?: boolean;
    colors?: Colors;
}

function calculateGap(width: number) {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
        return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const CenteredTestimonials: React.FC<CircularTestimonialsProps> = ({
    testimonials,
    autoplay = true,
    colors = {},
}) => {
    // Color config
    const colorArrowBg = colors.arrowBackground ?? "#141414";
    const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
    const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);
    const [containerWidth, setContainerWidth] = useState(1200);

    const imageContainerRef = useRef<HTMLDivElement>(null);
    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);

    // Responsive gap calculation
    useEffect(() => {
        function handleResize() {
            if (imageContainerRef.current) {
                setContainerWidth(imageContainerRef.current.offsetWidth);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Autoplay
    useEffect(() => {
        if (autoplay) {
            autoplayIntervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonialsLength);
            }, 5000);
        }
        return () => {
            if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        };
    }, [autoplay, testimonialsLength]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    // Navigation handlers
    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [testimonialsLength]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    }, [testimonialsLength]);

    // Compute transforms for each image
    function getImageStyle(index: number): React.CSSProperties {
        const gap = calculateGap(containerWidth);
        const maxStickUp = gap * 0.8;
        const isActive = index === activeIndex;
        const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
        const isRight = (activeIndex + 1) % testimonialsLength === index;

        if (isActive) {
            return {
                zIndex: 3,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }
        if (isLeft) {
            return {
                zIndex: 2,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }
        if (isRight) {
            return {
                zIndex: 2,
                opacity: 1,
                pointerEvents: "auto",
                transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
                transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
            };
        }
        return {
            zIndex: 1,
            opacity: 0,
            pointerEvents: "none",
            transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent from-slate-50 to-blue-50/80 p-4 md:p-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="relative w-80 h-80 md:h-140 [perspective:1000px] mx-auto" ref={imageContainerRef}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.src}-${index}`}
                            className="absolute w-full h-full cursor-pointer -inset-0"
                            style={getImageStyle(index)}
                            onClick={() => setActiveIndex(index)}
                        >
                            <motion.img
                                src={testimonial.src}
                                alt=""
                                className="w-full h-full object-cover rounded-3xl transition-all duration-300 border-4 shadow-2xl border-white/50"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls - Centered Below */}
                <div className="flex gap-6 justify-center mt-12">
                    <motion.button
                        className="w-14 h-14 md:w-[2.7rem] md:h-[2.7rem] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-none shadow-xl hover:shadow-2xl hover:scale-110"
                        onClick={handlePrev}
                        style={{
                            backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                        }}
                        onMouseEnter={() => setHoverPrev(true)}
                        onMouseLeave={() => setHoverPrev(false)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous image"
                    >
                        <ArrowLeft size={24} color={colorArrowFg} />
                    </motion.button>
                    <motion.button
                        className="w-14 h-14 md:w-[2.7rem] md:h-[2.7rem] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-none shadow-xl hover:shadow-2xl hover:scale-110"
                        onClick={handleNext}
                        style={{
                            backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                        }}
                        onMouseEnter={() => setHoverNext(true)}
                        onMouseLeave={() => setHoverNext(false)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next image"
                    >
                        <ArrowRight size={24} color={colorArrowFg} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default CenteredTestimonials;
