import HeroSection from "@/components/team/HeroSection";
import TeamSection from "@/components/team/TeamSection";
import FooterCTA from "@/components/team/FooterCTA";
import {
    organizationTeam,
    promotionTeam,
    websiteTeam,
    smdcTeam,
    technicalTeam,
} from "@/components/data/teamData";

import SparkNavbar from "../components/SparkNavbar";
import Footer from "@/components/Footer";

const Index = () => (
    <main className="bg-background min-h-screen relative">
        <div className="flex justify-center pt-10 absolute top-0 left-0 right-0 z-50">
            <SparkNavbar />
        </div>
        <HeroSection />

        <TeamSection title="Organization Team" members={organizationTeam} columns={5} />
        <TeamSection title="Promotion Team" members={promotionTeam} columns={6} />
        <TeamSection title="Spark Website Team" members={websiteTeam} columns={3} />

        <TeamSection title="SMDC Team" members={smdcTeam} columns={4} variant="default" />

        <TeamSection title="Technical Team" members={technicalTeam} columns={5} variant="default" />

        <FooterCTA />
    </main>
);

export default Index;
