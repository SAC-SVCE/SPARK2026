import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
    {/* Floating orbs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
    <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

    <div className="relative z-10 text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans"
      >
        SPARK 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gradient-spark leading-tight"
      >
        Meet Our Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto font-sans"
      >
        The People Behind SPARK 2026
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-spark-gold"
      />
    </div>
  </section>
);

export default HeroSection;
