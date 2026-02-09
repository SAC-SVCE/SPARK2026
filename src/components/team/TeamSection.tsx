import type { TeamMember } from "@/components/data/teamData";
import TeamCard from "./TeamCard";
import SectionHeading from "./SectionHeading";

interface Props {
    title: string;
    members: TeamMember[];
    columns?: 3 | 4 | 5|6;
    variant?: "default" | "highlight" | "dark";
    className?: string;
}

const colsMap = {
    3: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-5",
    4: "grid-cols-4 sm:grid-cols-4 lg:grid-cols-5",
    5: "grid-cols-4 sm:grid-cols-4 lg:grid-cols-5",
    6: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-6",
};

const TeamSection = ({ title, members, columns = 4, variant = "default", className = "" }: Props) => (
    <section className={`py-20 px-4 md:px-8 ${className}`}>
        <div className="max-w-7xl mx-auto">
            <SectionHeading title={title} />
            <div className={`grid ${colsMap[columns]} gap-8 justify-items-center`}>
                {members.map((m, i) => (
                    <TeamCard key={m.name} member={m} index={i} variant={variant} />
                ))}
            </div>
        </div>
    </section>
);

export default TeamSection;
