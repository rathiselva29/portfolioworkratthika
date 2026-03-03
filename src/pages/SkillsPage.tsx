import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Canva", level: 80 },
  { name: "UI Design", level: 82 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="glass-card p-6"
    >
      <div className="flex justify-between mb-3">
        <span className="font-semibold text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-primary font-mono-code text-sm"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(190 90% 50%), hsl(270 60% 55%))",
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillsPage = () => (
  <PageTransition>
    <section className="min-h-screen px-6 pt-28 pb-16">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-4">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default SkillsPage;
