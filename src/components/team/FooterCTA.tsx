import { motion } from "framer-motion";

const FooterCTA = () => (
    <section className="py-20 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 rounded-3xl p-10 max-w-4xl mx-auto border border-primary/20 bg-footer-cta-gradient"
        >
            <h2 className="text-3xl font-bold font-display mb-4 text-foreground">Want to join us?</h2>
            <p className="text-muted-foreground mb-8">
                We are always looking for passionate people to join our team. Check our recruitment page for open positions.
            </p>
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Join the Team
            </button>
        </motion.div>
    </section>
);

export default FooterCTA;
