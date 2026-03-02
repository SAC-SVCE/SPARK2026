import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { sponsorsData, CATEGORY_ORDER, Sponsor, SponsorCategory } from "@/data/sponsors";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// 1. Uniform Sponsor Card Component — fixed size, consistent model
const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      className="group relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(139,92,246,0.2)] flex flex-col p-5"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />

      {/* Logo area */}
      <div className="relative z-10 flex-1 flex items-center justify-center rounded-xl bg-white/5 overflow-hidden mb-4 p-3">
        <img
          src={sponsor.logoUrl}
          alt={sponsor.name}
          className="max-h-full max-w-full object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          style={{ maxHeight: "100px" }}
        />
      </div>

      {/* Name */}
      <div className="relative z-10 text-center">
        <h3 className="font-semibold text-white text-base tracking-wide transition-colors group-hover:text-violet-300 truncate">
          {sponsor.name}
        </h3>
      </div>
    </motion.div>
  );

  if (sponsor.websiteUrl && sponsor.websiteUrl !== "#") {
    return (
      <a href={sponsor.websiteUrl} target="_blank" rel="noreferrer" className="block w-full h-full focus:outline-none">
        {CardContent}
      </a>
    );
  }

  return <div className="w-full h-full">{CardContent}</div>;
};

// 2. Left-aligned section heading with gradient line to the right
const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-8 flex items-center gap-6">
    {/* Accent bar */}
    <div className="w-1 h-7 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 flex-shrink-0" />
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-widest font-serif italic leading-tight">
      {title}
    </h2>
    <div className="h-px flex-grow bg-gradient-to-r from-violet-500/60 to-transparent flex-shrink" />
  </div>
);

// 3. Category Section Component
const CategorySection = ({ category, sponsors, index }: { category: SponsorCategory; sponsors: Sponsor[]; index: number }) => {
  if (sponsors.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16"
    >
      <SectionHeading title={category} />

      {/* Cards — flex-wrap centered, uniform size */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="w-[calc(50%-8px)] sm:w-52 md:w-60 lg:w-64 h-44 md:h-52 flex-shrink-0">
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

// 4. Main Page
const SponsorsPage: React.FC = () => {
  const featuredSponsors = sponsorsData.filter(
    (s) => s.category === "Title Sponsors" || s.category === "Platinum Sponsors"
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-violet-500/30 font-sans">
      <NavBar />
      <SmoothScroll>
        <main>
          {/* HERO SECTION */}
          <div className="relative pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="container relative z-10 mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-3xl"
              >
                <h1 className="mb-3 text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                  Powered by Our{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent inline-block">
                    Esteemed Partners
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-neutral-400 md:text-lg font-medium leading-relaxed px-2">
                  We extend our deepest gratitude to the industry leaders and visionaries who make SPARK 2026 possible.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-14 relative z-10">

            {/* FEATURED SPONSORS ROW */}
            {featuredSponsors.length > 0 && (
              <div className="mb-16">
                <SectionHeading title="Outreach and Student Community Partner" />
                <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                  {featuredSponsors.map((sponsor, idx) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="w-[calc(50%-8px)] sm:w-52 md:w-60 lg:w-64 h-44 md:h-52 flex-shrink-0"
                    >
                      <SponsorCard sponsor={sponsor} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* SPONSORS BY CATEGORY */}
            <div className="mx-auto max-w-8xl">
              {CATEGORY_ORDER.map((cat, idx) => {
                const catSponsors = sponsorsData.filter((s) => s.category === cat);
                return (
                  <CategorySection key={cat} category={cat} sponsors={catSponsors} index={idx} />
                );
              })}
            </div>
          </div>

          {/* APPRECIATION BANNER */}
          <section className="border-y border-white/5 bg-neutral-900/50 py-10 md:py-16 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />

            <div className="container relative z-10 mx-auto px-4 text-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-base sm:text-lg md:text-2xl font-serif italic text-neutral-300 max-w-3xl mx-auto leading-relaxed px-2"
              >
                <span className="text-violet-400">"</span>
                We proudly collaborate with trailblazing industry leaders advancing technology and fostering innovation worldwide.
                <span className="text-violet-400">"</span>
              </motion.p>
            </div>
          </section>

          {/* BECOME A SPONSOR CTA */}
          <section className="container mx-auto px-3 sm:px-4 py-10 md:py-16 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative overflow-hidden rounded-2xl bg-neutral-900/80 border border-white/10 p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/10" />
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="mb-3 text-2xl sm:text-3xl font-black md:text-4xl text-white tracking-tight drop-shadow-lg">
                  Become a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    Sponsor
                  </span>
                </h2>
                <p className="mb-6 max-w-xl text-sm sm:text-base text-neutral-400 font-medium">
                  Partner with SPARK 2026 to elevate your brand, connect with top collegiate talent, and access a vibrant audience of innovative thinkers and creators.
                </p>
                <a
                  href="mailto:sponsorships@spark2026.com"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-sm text-neutral-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Talk <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </div>
            </motion.div>
          </section>
        </main>
      </SmoothScroll>
      <Footer />
    </div>
  );
};

export default SponsorsPage;
