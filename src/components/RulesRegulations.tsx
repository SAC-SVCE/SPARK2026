import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const RulesRegulations = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const rules = [
        "Only UG-B.TECH,BBA PG-MCA,MBA students are allowed to participate in the event.and d",
        "ID Card is mandatory for all students.",
        "On Event Day, students can enter the campus from 9.00 AM to 11.00 AM. No Entry will be allowed thereafter.",
        "Once inside the campus, students must remain until the program concludes.",
        "In any circumstances, the entry amount is Non-Refundable.",
        "Strict legal measures will be taken against violators identified by the Discipline Committee. The entire event will be recorded via video coverage and CCTV cameras.",
        "Continuous supervision of students will be carried out by staff, security personnel, and the police.",
        "Two-wheeler riders are urged to prioritize safety by avoiding triple riding and speeding.",
        "Outside food items, bags, and soft drinks are not allowed on campus.",
        "In emergency situations do follow instructions given through public address system.",
        "Student(s) involved in damage to college property will be fined heavily.",
        "Student(s) are required to wear either casual or formal attire.",
        "Student(s) identified with misconduct/notorious/drunken/ involving in physical altercation will be suspended and sent out. If necessary, they will be handed over to police department.",
        "Maintain a positive and healthy environment throughout the event should support for frisking at any point of time."
    ];

    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-red-500/30 rounded-full bg-red-500/10">
                            <Shield className="w-3 h-3 text-red-500" />
                            <span className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase">Strict Compliance</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-4">
                            RULES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">REGULATIONS</span>
                        </h2>
                        <p className="text-zinc-500 max-w-md">Official directives for all authorized personnel. Non-compliance results in immediate action.</p>
                    </motion.div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px bg-white/10 flex-1 ml-8 mb-4 hidden md:block origin-left"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden"
                >
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                        {rules.map((rule, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex gap-4 items-start group"
                            >
                                <div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded bg-white/5 border border-white/10 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors">
                                    <span className="text-[10px] font-bold text-zinc-500 group-hover:text-red-500">{i + 1}</span>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {rule}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RulesRegulations;
