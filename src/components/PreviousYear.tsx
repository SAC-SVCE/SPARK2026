import { motion } from "motion/react";
import { useState } from "react";
const img22 = "/gallery_images/img22.jpg";
const img34 = "/gallery_images/img34.jpg";
const img38 = "/gallery_images/img38.jpg";
const img43 = "/gallery_images/img43.jpg";
const img40 = "/gallery_images/img6.jpg";
const img44 = "/gallery_images/img44.jpg";



const PreviousYear = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const images = [
        img22, img34, img38, img43, img40, img44
    ];

    return (
        <div id="previous-year" className="max-w-7xl mx-auto px-4 py-16">
            <h2
        
                className="text-4xl md:text-5xl font-orbitron font-black text-center mb-16 bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent hover:text-pink,blue-700 hover:bg-none transition-colors duration-500 cursor-default" >
                PREVIOUS YEARS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`group relative h-80 rounded-xl overflow-hidden cursor-pointer ${activeIndex === index ? 'ring-4 ring-cyan-500 scale-[1.02]' : 'hover:scale-[1.02] hover:ring-4 hover:cyan'}`}
                    >
                        <img src={img} alt={`Previous Year ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousYear;
