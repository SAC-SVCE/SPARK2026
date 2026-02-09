import React from "react";
import { motion } from "motion/react";

// Team images - re-using paths from TeamGallery
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
        { image: abdulImg, name: "Abdul", role: "Lead Organizer", description: "Oversees event planning and execution." },
        { image: abhiramImg, name: "Abhiram", role: "Operations Head", description: "Ensures smooth coordination across teams." },
        { image: kiranImg, name: "Kiran", role: "Logistics Manager", description: "Handles venue and resource management." },
        { image: nivashiniImg, name: "Nivashini", role: "Lead Organizer", description: "Oversees event planning and execution." },
        { image: abhiramImg, name: "Abhiram", role: "Operations Head", description: "Ensures smooth coordination across teams." },
        { image: abhiramImg, name: "Kavyanjali", role: "Operations Head", description: "Ensures smooth coordination across teams." },
    ],
    "Promotions Team": [
        { image: mohithImg, name: "Mohith", role: "Promotions Lead", description: "Builds interactive user experiences." },
        { image: suryaImg, name: "Surya", role: "Marketing Head", description: "Designs scalable marketing strategies." },
        { image: kavyanjaliImg, name: "Kavyanjali", role: "Social Media Manager", description: "Focuses on digital presence and outreach." },
        { image: anushaImg, name: "Anusha", role: "Content Manager", description: "Creates engaging promotional content." },
    ],
    "Spark Team": [
        { image: shashiImg, name: "Shashi", role: "Event Coordinator", description: "Manages schedules and communications." },
        { image: amruthaImg, name: "Amrutha", role: "Program Coordinator", description: "Aligns performances and sessions." },
        { image: hemaImg, name: "Hema", role: "Volunteer Lead", description: "Coordinates volunteer activities." },
    ],
    "Smdc Team": [
        { image: harshaImg, name: "Harsha", role: "SAC President", description: "Leads student activity initiatives." },
        { image: vyshnaviImg, name: "Vyshnavi", role: "SAC President", description: "Leads student activity initiatives." },
        { image: saiGaneshImg, name: "Sai Ganesh", role: "SAC Vice President", description: "Supports student council operations." },
        { image: sujanImg, name: "Sujan", role: "SAC Secretary", description: "Manages council documentation." },
        { image: premChandImg, name: "Prem Chand", role: "Event Support", description: "Ensures smooth student participation." },
        { image: sujanImg, name: "Sujan", role: "Coordination Lead", description: "Bridges students and organizers." },
    ],
};

const NewTeam: React.FC = () => {
    return (
        <div className="w-full py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">
                {Object.entries(teamImages).map(([category, members], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    >
                        {/* Styled Section Header */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                                {category === "sacteam" ? "SAC Team" : category}
                            </h2>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                        </div>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {members.map((member, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                                >
                                    {/* Image Container with Gradient Overlay */}
                                    <div className="relative h-72 w-full overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-transparent to-transparent opacity-80" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="mb-1">
                                            <span className="inline-block px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-cyan-300 bg-cyan-900/30 rounded border border-cyan-500/30 mb-2">
                                                {member.role}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
                                            {member.description}
                                        </p>
                                    </div>

                                    {/* Hover Border Glow */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl pointer-events-none transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewTeam;
