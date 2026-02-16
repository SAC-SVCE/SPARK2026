import type { TeamMember } from "@/components/data/teamData";
import TeamCard from "./TeamCard";
import SectionHeading from "./SectionHeading";

interface Props {
    title: string;
    members: TeamMember[];
    columns?: 3 | 4 | 5 | 6;
    variant?: "default" | "highlight" | "dark";
    className?: string;
}

const containerMap = {
    3: "max-w-3xl",
    4: "max-w-5xl",
    5: "max-w-6xl",
    6: "max-w-7xl",
};

const itemClassMap = {
    3: "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]",
    4: "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.7rem)]",
    5: "w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.4rem)] lg:w-[calc(20%-1.7rem)]",
    6: "w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.4rem)] lg:w-[calc(16.666%-1.75rem)]",
};

const TeamSection = ({ title, members, columns = 4, variant = "default", className = "" }: Props) => (
    <section className={`py-20 px-4 md:px-8 ${className}`}>
        <div className={`${containerMap[columns] || "max-w-7xl"} mx-auto`}>
            <SectionHeading title={title} />
            <div className="flex flex-wrap justify-center gap-8">
                {members.map((m, i) => (
                    <div key={m.name} className={itemClassMap[columns] || "w-full"}>
                        <TeamCard member={m} index={i} variant={variant} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TeamSection;
