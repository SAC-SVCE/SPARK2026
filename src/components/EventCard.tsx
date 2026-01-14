import { Link } from "react-router-dom";
import { Event } from "@/components/data/events";
import { Card } from "@/components/event-ui/card";
import { motion } from "framer-motion";

interface EventCardProps {
  event: Event;
}

const categoryColors: Record<string, string> = {
  Hackathon: "text-purple-400 border-purple-500/50 bg-purple-500/10",
  Workshop: "text-blue-400 border-blue-500/50 bg-blue-500/10",
  Competition: "text-orange-400 border-orange-500/50 bg-orange-500/10",
  Talk: "text-green-400 border-green-500/50 bg-green-500/10",
  Exhibition: "text-pink-400 border-pink-500/50 bg-pink-500/10",
};

export function EventCard({ event }: EventCardProps) {
  const categoryStyle = categoryColors[event.categories[0]] || "text-primary border-primary/50 bg-primary/10";
  const glowColor = categoryStyle.includes("purple") ? "rgba(168,85,247,0.4)" :
    categoryStyle.includes("blue") ? "rgba(59,130,246,0.4)" :
      categoryStyle.includes("orange") ? "rgba(249,115,22,0.4)" :
        categoryStyle.includes("green") ? "rgba(34,197,94,0.4)" :
          categoryStyle.includes("pink") ? "rgba(236,72,153,0.4)" : "rgba(34,211,238,0.4)";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } }
      }}
      className="h-full"
    >
      <Link to={`/event/${event.id}`} className="group block h-full">
        <Card className="relative overflow-hidden border border-white/10 bg-white/20 h-full aspect-square transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_var(--glow-color)]"
          style={{ "--glow-color": glowColor } as React.CSSProperties}>
          {/* Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/60 z-10 opacity-70 group-hover:opacity-90 transition-opacity mix-blend-overlay" />
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="h-full w-full object-cover transition-transform filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-[1.2] group-hover:saturate-[1.25]"
            />
          </div>

          {/* Hover Highlight */}
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg pointer-events-none transition-colors duration-500" />
        </Card>
      </Link>
    </motion.div>
  );
}
