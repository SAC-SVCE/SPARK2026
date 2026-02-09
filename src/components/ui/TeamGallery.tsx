import React, { useState, useEffect } from "react";
import day1image from "../../assets/day1image.avif";
import day2image from "../../assets/day2image.avif";
import FadeUpOnScroll from "./FadeupScroll";

// Team images from public folder
const abdulImg = "/team-images/abdul.jpg";
const abhiramImg = "/team-images/abhiram.jpg";
const kiranImg = "/team-images/kiran.jpg";
const anushaImg = "/team-images/anusha2.JPG";
const jaideepImg = "/team-images/jaideep3.JPG";
const saileshImg = "/team-images/sailesh2.JPG";
const suryaImg = "/team-images/surya3.JPG";
const nivashiniImg = "/team-images/nivashini2.JPG";
const hemaImg = "/team-images/hema.JPG";
const amruthaImg = "/team-images/amrutha.JPG";
const mohithImg = "/team-images/mohith4.JPG";
const premChandImg = "/team-images/prem chand2.JPG";
const saiGaneshImg = "/team-images/sai ganesh2.JPG";
const shashiImg = "/team-images/shashi.JPG";
const sujanImg = "/team-images/sujan2.JPG";
const vyshnaviImg = "/team-images/vyshnavi3.JPG";
const jaideep4Img = "/team-images/jaideep4.JPG";
const lehariImg = "/team-images/lehari3.JPG";
const harshaImg = "/team-images/harsha4.JPG";
const kavyanjaliImg = "/team-images/kavyanjali.JPG";


/* ---------------- TYPES ---------------- */
type Category = "Organizers Team" | "Promotions Team" | "Spark Team" | "Smdc Team";

type TeamMember = {
  image: string;
  name: string;
  role: string;
  description: string;
};

/* ---------------- DATA ---------------- */
const teamImages: Record<Category, TeamMember[]> = {
  "Organizers Team": [
    {
      image: abdulImg,
      name: "Abdul",
      role: "Lead Organizer",
      description: "Oversees event planning and execution.",
    },
    {
      image: abhiramImg,
      name: "Abhiram",
      role: "Operations Head",
      description: "Ensures smooth coordination across teams.",
    },
    {
      image: kiranImg,
      name: "Kiran",
      role: "Logistics Manager",
      description: "Handles venue and resource management.",
    },
    {
      image: nivashiniImg,
      name: "Nivashini",
      role: "Lead Organizer",
      description: "Oversees event planning and execution.",
    },
    {
      image: abhiramImg,
      name: "Abhiram",
      role: "Operations Head",
      description: "Ensures smooth coordination across teams.",
    },
    {
      image: abhiramImg,
      name: "Kavyanjali",
      role: "Operations Head",
      description: "Ensures smooth coordination across teams.",
    },
  ],
  "Promotions Team": [
    {
      image: mohithImg,
      name: "Mohith",
      role: "Promotions Lead",
      description: "Builds interactive user experiences.",
    },
    {
      image: suryaImg,
      name: "Surya",
      role: "Marketing Head",
      description: "Designs scalable marketing strategies.",
    },
    {
      image: kavyanjaliImg,
      name: "Kavyanjali",
      role: "Social Media Manager",
      description: "Focuses on digital presence and outreach.",
    },
    {
      image: anushaImg,
      name: "Anusha",
      role: "Content Manager",
      description: "Creates engaging promotional content.",
    },
  ],
  "Spark Team": [
    {
      image: shashiImg,
      name: "shashi",
      role: "Event Coordinator",
      description: "Manages schedules and communications.",
    },
    {
      image: amruthaImg,
      name: "amrutha",
      role: "Program Coordinator",
      description: "Aligns performances and sessions.",
    },
    {
      image: hemaImg,
      name: "hema",
      role: "Volunteer Lead",
      description: "Coordinates volunteer activities.",
    },
    
  ],
  "Smdc Team": [
    {
      image: harshaImg,
      name: "Harsha",
      role: "SAC President",
      description: "Leads student activity initiatives.",
    },
    {
      image: vyshnaviImg,
      name: "vyshnavi",
      role: "SAC President",
      description: "Leads student activity initiatives.",
    },
    {
      image: saiGaneshImg,
      name: "Sai Ganesh",
      role: "SAC Vice President",
      description: "Supports student council operations.",
    },
    {
      image: sujanImg,
      name: "Sujan",
      role: "SAC Secretary",
      description: "Manages council documentation.",
    },
    {
      image: premChandImg,
      name: "Prem Chand",
      role: "Event Support",
      description: "Ensures smooth student participation.",
    },
    {
      image: sujanImg,
      name: "Sujan",
      role: "Coordination Lead",
      description: "Bridges students and organizers.",
    },
  ],
};

/* ---------------- COMPONENT ---------------- */
const TeamGallery: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full pt-20 pb-20 px-4 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {Object.entries(teamImages).map(([category, members]) => (
          <div key={category}>
            {/* MINIMAL HEADING */}
            <FadeUpOnScroll>
              <div className="flex flex-col items-center mt-20 mb-20">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white/90 text-center uppercase mb-3 letterspacing-widest">
                    {category === "sacteam"
                      ? "SAC Team"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>
              </div>
            </FadeUpOnScroll>

            {/* PROFESSIONAL GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {members.map((member, index) => (
                <FadeUpOnScroll key={index} delay={index * 100}>
                  <div
                    className="w-64 h-64 mx-auto group cursor-pointer"
                    onClick={() =>
                      !isDesktop
                        ? setFlippedCard(flippedCard === index ? null : index)
                        : undefined
                    }
                  >
                    {/* ANIMATED GRADIENT BORDER RING */}
                    <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:p-[4px] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5),0_0_60px_rgba(6,182,212,0.3)]">
                      {/* Animated gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                        style={{
                          animation: 'spin 3s linear infinite',
                        }}
                      />
                      {/* Inner rotating gradient for animation effect */}
                      <div
                        className="absolute inset-[-2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                          animation: 'spin 4s linear infinite',
                        }}
                      />

                      {/* CARD CONTAINER */}
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0f1420] transition-all duration-500">

                        {/* FLIP MECHANISM */}
                        <div
                          className={`
                          relative w-full h-full
                          transition-transform duration-700 [transform-style:preserve-3d]
                          ${isDesktop ? "md:group-hover:[transform:rotateY(180deg)]" : ""}
                          ${!isDesktop && flippedCard === index ? "[transform:rotateY(180deg)]" : ""}
                        `}
                        >
                          {/* FRONT - Image */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full overflow-hidden">
                            <div className="relative w-full h-full">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              {/* Subtle gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                              {/* Name overlay at bottom - visible on front */}
                              <div className="absolute bottom-6 left-0 right-0 text-center">
                                <p className="text-white font-medium text-sm tracking-wide drop-shadow-lg">
                                  {member.name}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* BACK - Info */}
                          <div
                            className="absolute inset-0 rounded-full overflow-hidden
                                     bg-gradient-to-b from-[#0f1420] via-[#131825] to-[#0f1420]
                                     flex flex-col items-center justify-center
                                     text-center px-6
                                     [transform:rotateY(180deg)]
                                     [backface-visibility:hidden]"
                          >
                            {/* Decorative top accent */}
                            <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mb-5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

                            {/* Name with gradient */}
                            <h3
                              className="text-xl font-semibold mb-3 tracking-wide bg-gradient-to-r from-cyan-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                              style={{ textShadow: '0 0 20px rgba(139,92,246,0.3)' }}
                            >
                              {member.name}
                            </h3>

                            {/* Role badge with glow */}
                            <div className="px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
                              <p className="text-xs font-medium tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                {member.role}
                              </p>
                            </div>

                            {/* Description with subtle styling */}
                            <p className="text-sm text-white/80 leading-relaxed font-light max-w-[220px] tracking-wide">
                              {member.description}
                            </p>

                            {/* Decorative bottom accent */}
                            <div className="w-16 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mt-5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUpOnScroll>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes for border animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default TeamGallery;