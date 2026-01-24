import React from "react";
import PillNav from "./ui/pillNav";
import Logo from "../assets/spark-logo.png";

const SparkNavbar: React.FC = () => {
    return (
        <PillNav
            logo={Logo}
            logoAlt="spark Logo"
            items={[
                { label: "Gallery", href: "/highlights" },
                { label: "Proshow", href: "/proshow" },
                { label: "Team", href: "/team" },
                { label: "Register", href: "/register" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor='#01102bff'
            pillColor="linear-gradient(130deg, #b510ebff, #f81184ff)"
            hoveredPillTextColor="#fbfbfbff"
            pillTextColor="#faf3f3ff"

        />
    );
};

export default SparkNavbar;
