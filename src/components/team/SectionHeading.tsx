import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient-spark">{title}</h2>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-primary" />
  </motion.div>
);

export default SectionHeading;
