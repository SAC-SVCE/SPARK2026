import { motion } from "framer-motion";
import type { TeamMember } from "@/components/data/teamData";

interface TeamCardProps {
    member: TeamMember;
    index: number;
    variant?: "default" | "highlight" | "dark";
}

const variants = {
    default: "bg-card border border-border hover-glow",
    highlight: "bg-spark-card-highlight border border-primary/20 card-glow-orange",
    dark: "bg-secondary border border-border card-glow-red",
};

const TeamCard = ({ member, index, variant = "default" }: TeamCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className={`group rounded-2xl overflow-hidden ${variants[variant]} transition-all duration-300`}
    >
        <div className="relative overflow-hidden aspect-[3/4] group-hover:shadow-lg transition-all duration-500">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 contrast-125 saturate-125 brightness-110"
                loading="lazy"
            />
            <div className="absolute inset-0 from-background/90 via-background/20 to-transparent" />

            {/* HD Glare Shimmy Effect */}
            <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent z-10"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 1, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    repeatDelay: 3
                }}
            />
        </div>
        <div className="p-4 text-center">
            <h3 className="font-display font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">{member.name}</h3>
            <p className="text-sm text-primary mt-1">{ }</p>
        </div>
    </motion.div>
);

export default TeamCard;
