import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { sponsorsData, CATEGORY_ORDER, Sponsor, SponsorCategory } from "@/data/sponsors";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// 1. Sponsor Card Component
const SponsorCard = ({ sponsor, isFeatured = false }: { sponsor: Sponsor; isFeatured?: boolean }) => {
  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ${isFeatured ? "p-8" : "p-6"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        <div className={`w-full overflow-hidden flex items-center justify-center rounded-xl bg-white/5 px-4 py-6 ${isFeatured ? 'h-32' : 'h-24'}`}>
          <img
            src={sponsor.logoUrl}
            alt={sponsor.name}
            className="max-h-full max-w-full object-contain filter grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
        <h3 className={`font-bold text-white transition-colors group-hover:text-violet-300 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {sponsor.name}
        </h3>
      </div>
    </motion.div>
  );

  if (sponsor.websiteUrl && sponsor.websiteUrl !== "#") {
    return (
      <a href={sponsor.websiteUrl} target="_blank" rel="noreferrer" className="block focus:outline-none">
        {CardContent}
      </a>
    );
  }

  return <div className="block">{CardContent}</div>;
};

// 2. Category Section Component
const CategorySection = ({ category, sponsors, index }: { category: SponsorCategory; sponsors: Sponsor[]; index: number }) => {
  if (sponsors.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-24"
    >
      <div className="mb-10 flex items-center gap-6 group">
        <h2 className="text-2xl font-bold text-white md:text-3xl whitespace-nowrap transition-colors group-hover:text-violet-300">{category}</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-violet-500/50 to-transparent"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </motion.section>
  );
};

// 3. Hero Logo Marquee Component
const HeroLogoMarquee = () => {
  const logos = Array.from(new Set(sponsorsData.map(s => s.logoUrl)));

  // Duplicate multiple times for smooth seamless loop
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative mt-16 flex w-full overflow-hidden border-y border-white/5 bg-black/20 py-10 backdrop-blur-md">
      <div className="absolute left-0 top-0 z-10 w-24 md:w-48 h-full bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-10 w-24 md:w-48 h-full bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none"></div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="flex w-max shrink-0 items-center justify-start gap-16 md:gap-24 px-8"
      >
        {marqueeItems.map((logo, idx) => (
          <div key={idx} className="h-10 md:h-14 w-auto opacity-30 mix-blend-screen transition-all duration-300 hover:opacity-100 flex items-center justify-center cursor-default hover:scale-110">
            <img src={logo} alt="Sponsor Logo" className="max-h-full max-w-full object-contain filter grayscale" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// 4. Main Page Editor
const SponsorsPage: React.FC = () => {
  // Extract Title and Platinum sponsors for featured section
  const featuredSponsors = sponsorsData.filter(s => s.category === "Title Sponsors" || s.category === "Platinum Sponsors");

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-violet-500/30 font-sans">
      <NavBar />
      <SmoothScroll>
        <main>
          {/* HERO SECTION */}
          <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            <div className="container relative z-10 mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-4xl"
              >
                
                <h1 className="mb-8 text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl leading-none">
                  Powered by Our <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm pb-2 inline-block">
                    Esteemed Partners
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-neutral-400 md:text-xl lg:text-2xl font-medium leading-relaxed">
                  We extend our deepest gratitude to the industry leaders and visionaries who make SPARK 2026 possible. Join us in shaping the future.
                </p>
              </motion.div>
            </div>

            
            {/* <HeroLogoMarquee /> */}
          </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            {/* FEATURED SPONSORS ROW */}
            {featuredSponsors.length > 0 && (
              <div className="mb-32">
                <div className="mb-14 flex items-center justify-center gap-6">
                  <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-violet-500/70"></div>
                  <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-5xl uppercase font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Featured Sponsors</h2>
                  <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-violet-500/70"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredSponsors.map((sponsor, idx) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                    >
                      <SponsorCard sponsor={sponsor} isFeatured={true} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* SPONSORS BY CATEGORY */}
            <div className="mx-auto max-w-7xl">
              {CATEGORY_ORDER.map((cat, idx) => {
                // For category view, we might want to exclude featured to prevent huge lists,
                // but typically all are shown in their tiers. We'll show all.
                const catSponsors = sponsorsData.filter(s => s.category === cat);
                return (
                  <CategorySection key={cat} category={cat} sponsors={catSponsors} index={idx} />
                );
              })}
            </div>
       </div>

          {/* APPRECIATION BANNER */}
          <section className="border-y border-white/5 bg-neutral-900/50 py-32 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

            <div className="container relative z-10 mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-3xl font-serif italic text-neutral-300 md:text-5xl lg:text-6xl max-w-5xl mx-auto leading-tight"
              >
                <span className="text-violet-400">"</span>We proudly collaborate with trailblazing industry leaders advancing technology and fostering innovation worldwide.<span className="text-violet-400">"</span>
              </motion.h2>
            </div>
          </section>

          {/* BECOME A SPONSOR CTA */}
          <section className="container mx-auto px-4 py-32 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-neutral-900/80 border border-white/10 p-12 md:p-24 shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/10"></div>
              {/* Decorative circles */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="mb-6 text-4xl font-black md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-lg">
                  Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Sponsor</span>
                </h2>
                <p className="mb-10 max-w-2xl text-lg md:text-xl text-neutral-300 font-medium my-4">
                  Partner with SPARK 2026 to elevate your brand, connect with top collegiate talent, and access a vibrant audience of innovative thinkers and creators.
                </p>
                <a
                  href="mailto:sponsorships@spark2026.com"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 md:px-12 md:py-5 font-bold md:text-lg text-neutral-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                >
                  <span className="relative z-10 flex items-center gap-2">Let's Talk <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
