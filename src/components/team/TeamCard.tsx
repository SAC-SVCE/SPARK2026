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
        <div className="relative overflow-hidden aspect-[4/5]">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>
        <div className="p-4 text-center">
            <h3 className="font-display font-semibold text-lg text-foreground">{member.name}</h3>
            <p className="text-sm text-primary mt-1">{member.role}</p>
        </div>
    </motion.div>
);

export default TeamCard;
