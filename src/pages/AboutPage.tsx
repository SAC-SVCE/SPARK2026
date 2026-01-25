import { Target, Users, Rocket, Zap, Trophy, Calendar, MapPin, Heart, ArrowRight, Globe } from "lucide-react";
import RulesRegulations from "@/components/RulesRegulations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import Shinky from "@/components/ui/ShinyText";
import sparkLogo from "@/assets/spark-logo.png";
import { TimelineDemo } from "@/components/ui/TimelineDemo";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Participants", color: "text-primary" },
    { icon: Trophy, value: "120+", label: "Events", color: "text-secondary" },
    { icon: Zap, value: "₹10L+", label: "Prize Pool", color: "text-primary" },
    { icon: Calendar, value: "2", label: "Days of Fury", color: "text-secondary" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    visibleX: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <FireParticles density={40} />
      <Navbar />

      {/* --- HERO SECTION (SAARANG STYLE) --- */}
      <section className="relative min-h-screen md:h-screen flex flex-col justify-center overflow-hidden font-sans pt-24 md:pt-0">
        {/* Massive Background Text - Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[25vw] font-black text-[#1a1a1a] tracking-tighter leading-none whitespace-nowrap blur-sm"
          >
            SPARK
          </motion.span>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

            {/* LEFT COLUMN: BRANDING */}
            <div className="flex flex-col justify-center relative z-20">
              <h1 className="flex flex-col">
                {/* Primary Heading: IGNITE THE FUTURE */}
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl lg:text-[9rem] font-black font-serif text-primary tracking-tighter leading-[0.85] uppercase mix-blend-screen filter drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                >
                  IGNITE
                </motion.span>
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl md:text-8xl lg:text-[9rem] font-black font-serif text-white tracking-tighter leading-[0.85] uppercase ml-12 md:ml-24"
                >
                  FUTURE
                </motion.span>
              </h1>
            </div>

            {/* RIGHT COLUMN: DESCRIPTION & STATS */}
            <div className="flex flex-col justify-end items-end pb-20 relative z-20">
              {/* Stats Block */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12 text-right"
              >
                <div className="text-6xl md:text-8xl font-black text-white flex items-start justify-end leading-none">
                  10K<span className="text-primary text-4xl mt-2">+</span>
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mt-2">
                  PARTICIPANTS & VISITORS
                </p>
              </motion.div>

              {/* Description Box */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full max-w-lg border border-primary p-6 md:p-10 bg-black/40 backdrop-blur-sm relative group"
              >
                {/* Decorative Corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary" />

                <p className="text-zinc-300 font-exo text-sm md:text-base leading-relaxed text-justify uppercase tracking-wide">
                  <Shinky text="SPARK is the beating heart of SVCE — an Inter-College Techno-Cultural Sports Event bringing together 10,000+ students from 50+ colleges. Filled with sports, culture, and excitement, SPARK features thrilling competitions, electrifying music, powerful drama, and high-energy dance battles. Organized by SVCE students and held every March, the campus transforms into a vibrant hub of talent and celebration." />
                </p>

                <div className="mt-6 flex justify-end">
                  <span className="text-xs font-bold text-primary tracking-widest cursor-pointer hover:underline uppercase">
                    READ FULL MISSION BRIEF
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bottom Bar Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full border-t border-white/10 py-4 px-8 flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest z-30 bg-black/80 backdrop-blur-md"
        >
          <span>SVCE TIRUPATI, ANDHRA PRADESH</span>
          <span>Est. 2026 / WARZONE</span>
        </motion.div>
      </section>


      {/* --- STATS STRIP --- */}
      <div className="w-full border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 px-4 text-center group hover:bg-white/5 transition-colors duration-300"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} opacity-80 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-4xl font-black font-orbitron ${stat.color} mb-1 drop-shadow-md`}>{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* --- ABOUT SVCE SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <h1 className="text-[15rem] font-black text-white leading-none">SVCE</h1>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Content */}
            <motion.div
              initial="left"
              whileInView="visibleX"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5"
            >
              <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Trusted Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-8 text-white">
                ABOUT <span className="text-primary">SVCE</span>
              </h2>

              <div className="space-y-6 text-zinc-400 font-exo text-lg leading-relaxed text-justify">
                <p>
                  The SV COLLEGES group was founded in 1981, based on the firm belief that education, especially higher education, provides a critical pathway to leadership development, economic progress, and social and political equality. We are committed to excellence in our student's career by providing the best in education, training, and the skills necessary to become future leaders.
                </p>
                <p>
                  SV College of Engineering (SVCE) was established in 2007 with a vision to offer superior educational programs, supported by exceptional service. The college is affiliated with JNTUA and approved by AICTE, New Delhi. The group offers UG Courses (CE, CSE, ECE, EEE, CSM, CSD, CSC, IT & ME) and PG Courses (VLSID, CS, MCA & MBA). Several programs are accredited by NBA, and SVCE is NAAC accredited with Grade ‘A’ and has autonomous status until 2030.
                </p>
              </div>
            </motion.div>

            {/* Right: Feature Card */}
            <motion.div
              initial="right"
              whileInView="visibleX"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 w-full"
            >
              <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                  <div className="grid grid-cols-1 gap-6 relative z-10">
                    <div className="space-y-2 border-b border-white/5 pb-6">
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Established</p>
                      <p className="text-4xl font-black font-orbitron text-white">1981</p>
                      <p className="text-xs text-primary font-mono">// FOUNDATION YEAR</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 font-bold uppercase">Accreditation</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded border border-green-500/30">NAAC 'A' GRADE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 font-bold uppercase">Status</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded border border-blue-500/30">AUTONOMOUS</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 font-bold uppercase">NIRF Rank</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded border border-purple-500/30">201 - 300</span>
                      </div>
                    </div>

                    <div className="pt-6 mt-2">
                      <p className="text-sm text-zinc-500 mb-4 font-mono">OFFERING COURSES IN</p>
                      <div className="flex flex-wrap gap-2">
                        {["CSE", "ECE", "EEE", "IT", "ME", "CSM", "CSD", "CE"].map((course) => (
                          <span key={course} className="text-[10px] font-bold px-2 py-1 bg-white/5 text-zinc-300 border border-white/5 rounded hover:bg-white/10 transition-colors">
                            {course}
                          </span>
                        ))}
                        <span className="text-[10px] font-bold px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded">
                          + PG COURSES
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>


      {/* --- VISION --- */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Rocket className="w-96 h-96 text-primary animate-pulse-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 max-w-4xl text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-bold font-exo leading-normal text-white mb-12">
            "To create an ecosystem where <span className="text-primary">creativity meets competition</span>, where innovation thrives,
            and where every participant becomes a legend."
          </p>
          <div className="inline-flex gap-2 items-center text-zinc-500 font-mono text-sm">
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

// Start Icon helper
function RadioTower(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  )
}

export default AboutPage;
