import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ComingSoon from "./ComingSoon";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const SponsorsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <SmoothScroll>
        <ComingSoon />
      </SmoothScroll>
      <Footer />
    </>
  );
};

export default SponsorsPage;

