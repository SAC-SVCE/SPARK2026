import React from "react";
import PillNav from "../components/ui/pillNav";
import Logo from "@/assets/spark-logo.png";
import Footer from "@/components/Footer";
import ComingSoon from "./ComingSoon";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const HighlightsPage: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[1000]">
        <PillNav
          logo={Logo}
          logoAlt="spark Logo"
          items={[
            { label: "Gallery", href: "/highlights" },
            { label: "Proshow", href: "/proshow" },
            { label: "Team", href: "/team" },
            { label: "Register", href: "/register" },
          ]}
          activeHref="/highlights"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor='#01102bff'
          pillColor="linear-gradient(130deg, #b510ebff, #f81184ff)"
          hoveredPillTextColor="#fbfbfbff"
          pillTextColor="#faf3f3ff"
        />
      </div>
      <SmoothScroll>
        <ComingSoon />
      </SmoothScroll>
      <Footer />
    </>
  );
};

export default HighlightsPage;

