import { Target, Users, Rocket, Zap, Trophy, Calendar, MapPin, Heart, ArrowRight, Shield, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import Shinky from "@/components/ui/ShinyText";
import sparkLogo from "@/assets/spark-logo.png";
import { TimelineDemo } from "@/components/ui/TimelineDemo";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Participants", color: "text-primary" },
    { icon: Trophy, value: "120+", label: "Events", color: "text-secondary" },
    { icon: Zap, value: "₹10L+", label: "Prize Pool", color: "text-primary" },
    { icon: Calendar, value: "2", label: "Days of Fury", color: "text-secondary" },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "MISSION",
      desc: "Empowering innovation through competitive excellence.",
      color: "group-hover:text-primary",
      border: "hover:border-primary/50"
    },
    {
      icon: RadioTower,
      title: "COMMUNITY",
      desc: "Uniting 10,000+ minds in a single digital arena.",
      color: "group-hover:text-cyan-400",
      border: "hover:border-cyan-400/50"
    },
    {
      icon: Rocket,
      title: "FUTURE",
      desc: "Launching careers with cutting-edge tech showcases.",
      color: "group-hover:text-primary",
      border: "hover:border-primary/50"
    },
    {
      icon: Zap,
      title: "ENERGY",
      desc: "High-octane competitions and electrifying entertainment.",
      color: "group-hover:text-purple-400",
      border: "hover:border-purple-400/50"
    }
  ];

  const highlights = [
    {
      title: "EPIC BATTLES",
      desc: "Gaming tournaments, coding marathons, and cultural face-offs.",
      icon: Trophy,
      bg: "from-primary/20"
    },
    {
      title: "CAMPUS WARZONE",
      desc: "Transforming SVCE into a futuristic battleground of talent.",
      icon: MapPin,
      bg: "from-blue-500/20"
    },
    {
      title: "LEGACY",
      desc: "Create memories that echo through time. Be the legend.",
      icon: Heart,
      bg: "from-purple-500/20"
    },
    {
      title: "NETWORK",
      desc: "Connect with industry elites and like-minded innovators.",
      icon: Globe,
      bg: "from-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <FireParticles density={40} />
      <Navbar />

      {/* --- HERO SECTION (SAARANG STYLE) --- */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden font-sans">
        {/* Massive Background Text - Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
          <span className="text-[25vw] font-black text-[#1a1a1a] opacity-60 tracking-tighter leading-none whitespace-nowrap blur-sm">
            SPARK
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

            {/* LEFT COLUMN: BRANDING */}
            <div className="flex flex-col justify-center relative z-20">
              <h1 className="flex flex-col">
                {/* Primary Heading: IGNITE THE FUTURE */}
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-black font-serif text-primary tracking-tighter leading-[0.85] uppercase mix-blend-screen filter drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                  IGNITE
                </span>
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-black font-serif text-white tracking-tighter leading-[0.85] uppercase ml-12 md:ml-24">
                  FUTURE
                </span>

                {/* Secondary Heading: SPARK 2026 */}
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-3xl md:text-5xl font-bold font-orbitron text-white tracking-widest">
                    SPARK
                  </span>
                  <span className="text-3xl md:text-5xl font-serif italic text-white/50">
                    2026
                  </span>
                </div>
              </h1>
            </div>

            {/* RIGHT COLUMN: DESCRIPTION & STATS */}
            <div className="flex flex-col justify-end items-end pb-20 relative z-20">
              {/* Stats Block */}
              <div className="mb-12 text-right">
                <div className="text-6xl md:text-8xl font-black text-white flex items-start justify-end leading-none">
                  10K<span className="text-primary text-4xl mt-2">+</span>
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mt-2">
                  PARTICIPANTS & VISITORS
                </p>
              </div>

              {/* Description Box */}
              <div className="w-full max-w-lg border border-primary p-6 md:p-10 bg-black/40 backdrop-blur-sm relative group">
                {/* Decorative Corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary" />

                <p className="text-zinc-300 font-exo text-sm md:text-base leading-relaxed text-justify uppercase tracking-wide">
                  <Shinky text="SPARK 2026 is all set to ignite SVCE Tirupati with a vibrant blend of technology, culture, and sports. Students from across the nation will gather to showcase their talents, compete in exciting challenges, and experience an atmosphere buzzing with innovation. This year’s spotlight events include the inspiring Youth Summit." />
                </p>

                <div className="mt-6 flex justify-end">
                  <span className="text-xs font-bold text-primary tracking-widest cursor-pointer hover:underline uppercase">
                    READ FULL MISSION BRIEF
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar Info */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-4 px-8 flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest z-30 bg-black/80 backdrop-blur-md">
          <span>SVCE TIRUPATI, ANDHRA PRADESH</span>
          <span>Est. 2026 / WARZONE</span>
        </div>
      </section>


      {/* --- STATS STRIP --- */}
      <div className="w-full border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-4 text-center group hover:bg-white/5 transition-colors duration-300">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} opacity-80 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-4xl font-black font-orbitron ${stat.color} mb-1 drop-shadow-md`}>{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* --- CORE VALUES GRID --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-4">
                CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PROTOCOLS</span>
              </h2>
              <p className="text-zinc-500 max-w-md">Our operating principles for maximum impact.</p>
            </div>
            <div className="h-px bg-white/10 flex-1 ml-8 mb-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((item, i) => (
              <div key={i} className={`group p-8 border border-white/5 bg-zinc-900/20 hover:bg-black/40 transition-all duration-500 ${item.border}`}>
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold font-orbitron mb-4 text-zinc-300 ${item.color} transition-colors duration-300`}>
                  {item.title}
                </h3>
                <p className="text-zinc-500 font-exo leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- POPULAR EVENTS --- */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="text-[12vw] font-black text-red-900/10 tracking-tighter whitespace-nowrap blur-sm rotate-90 md:rotate-0">
            POPULAR EVENTS
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-end mb-16 border-b border-primary/20 pb-4">
            <h2 className="text-4xl md:text-5xl font-black font-orbitron uppercase tracking-tighter">
              POPULAR <span className="text-primary text-glow-red">EVENTS</span>
            </h2>
            <span className="hidden md:block text-2xl font-serif italic text-white/50">
              SPARK '26
            </span>
          </div>

          {/* Grid Layout - Bento/Masonry Style (3x2 on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] lg:grid-rows-[350px_350px] gap-6">

            {/* [1] HACKATHON: Top Left (1x1) */}
            <div className="group relative border border-primary/30 overflow-hidden cursor-pointer bg-black/50">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img src="/event-images/sample.png" alt="Hackathon" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-6 z-20">
                <span className="inline-block px-2 py-1 bg-primary text-black text-xs font-bold tracking-widest uppercase mb-2">
                  FLAGSHIP
                </span>
                <h3 className="text-3xl font-black font-orbitron text-white leading-none mb-1">
                  HACKATHON
                </h3>
                <p className="text-zinc-400 text-sm font-mono uppercase tracking-wide">
                  24 HOURS OF CODE
                </p>
              </div>
            </div>

            {/* [2] ROBO WARS: Top Center (1x1) - Split Style */}
            <div className="group border border-white/10 overflow-hidden cursor-pointer flex flex-col">
              <div className="h-1/2 overflow-hidden relative">
                <img src="/event-images/sample.png" alt="Robo Wars" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="h-1/2 bg-zinc-900 group-hover:bg-zinc-800 transition-colors text-white p-6 flex flex-col justify-center relative border-t border-white/5">
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary text-black flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <h3 className="text-2xl font-black font-orbitron mb-2 uppercase text-primary">
                  ROBO WARS
                </h3>
                <p className="text-sm font-bold text-zinc-400 leading-tight">
                  THE ULTIMATE CLASH OF METAL AND CIRCUITRY.
                </p>
              </div>
            </div>

            {/* [3] BATTLE OF BANDS: Right Column (1x2) - Tall */}
            <div className="group border border-primary/30 overflow-hidden cursor-pointer lg:row-span-2 flex flex-col lg:col-start-3">
              <div className="h-[60%] lg:h-[70%] overflow-hidden relative">
                <img src="/event-images/sample.png" alt="Band" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 border border-white/20">
                  CULTURAL
                </div>
              </div>
              <div className="h-[40%] lg:h-[30%] bg-primary/10 border-t border-primary/30 text-white p-6 flex flex-col justify-between group-hover:bg-primary/20 transition-colors">
                <div>
                  <h3 className="text-3xl font-black font-orbitron mb-2 uppercase leading-none text-white">
                    BATTLE OF BANDS
                  </h3>
                  <p className="text-sm text-primary font-bold mt-2">
                    LIVE MUSIC • 5 JUDGES • 1 STAGE
                  </p>
                </div>
                <span className="text-5xl font-serif italic text-white/10 self-end">
                  '26
                </span>
              </div>
            </div>

            {/* [4] GAMING ARENA: Bottom Left (2x1) - Wide */}
            <div className="group relative border border-white/10 overflow-hidden cursor-pointer lg:col-span-2 lg:row-start-2">
              <img src="/event-images/sample.png" alt="Gaming" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-8 z-20 max-w-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-green-400 tracking-widest uppercase">REGISTRATIONS LIVE</span>
                </div>
                <h3 className="text-4xl font-black font-orbitron text-white uppercase mb-2">
                  GAMING ARENA
                </h3>
                <p className="text-zinc-300 text-sm font-exo">
                  Experience next-gen VR and competitive e-sports tournaments (Valorant, CS2, FIFA) with massive prize pools. Join the warzone.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- HIGHLIGHTS REVEAL --- */}
      <section className="py-20 relative overflow-hidden">
        {/* Slanted Background */}
        <div className="absolute inset-0 transform -skew-y-3 bg-zinc-900/30 origin-top-left -z-10 scale-110 border-y border-white/5" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black font-orbitron leading-tight">
                WHY CHOOSE <br />
                <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]">THE WARZONE?</span>
              </h2>
              <p className="text-lg text-zinc-400 font-exo leading-relaxed">
                Prepare for an experience that transcends the ordinary. We don't just host events; we forge legends.
                Every moment is calibrated for maximum intensity.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Shield className="w-4 h-4 text-primary" /> SECURED
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Globe className="w-4 h-4 text-cyan-400" /> GLOBAL
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="group relative p-6 bg-black/60 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-orbitron text-white group-hover:translate-x-2 transition-transform duration-300">{item.title}</h4>
                      <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Event <span className="text-secondary text-glow-cyan">Timeline</span>
            </h2>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              A journey through the evolution and milestones of SPARK
            </p>
          </div>

          <TimelineDemo />
        </div>
      </section>


      {/* --- VISION --- */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Rocket className="w-96 h-96 text-primary animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-bold font-exo leading-normal text-white mb-12">
            "To create an ecosystem where <span className="text-primary">creativity meets competition</span>, where innovation thrives,
            and where every participant becomes a legend."
          </p>
          <div className="inline-flex gap-2 items-center text-zinc-500 font-mono text-sm">
            <span>// END_OF_TRANSMISSION</span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>
        </div>
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
