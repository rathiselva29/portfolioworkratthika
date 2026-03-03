import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";

const ResumePage = () => (
  <PageTransition>
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="container max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-gradient text-center"
        >
          My Resume
        </motion.h2>

        <TiltCard className="glass-card p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">Rathi</h3>
            <p className="text-primary font-mono-code text-sm mb-6">Frontend Developer & Creative Designer</p>

            <div className="space-y-4 text-muted-foreground text-sm mb-8">
              <div>
                <h4 className="text-foreground font-semibold mb-1">Experience</h4>
                <p>Frontend development with React, TypeScript, and modern CSS frameworks.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Education</h4>
                <p>Computer Science & Engineering</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Skills</h4>
                <p>React, JavaScript, TypeScript, HTML/CSS, UI/UX Design, Canva</p>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary transition-shadow"
            >
              <Download size={18} />
              Download Resume (PDF)
            </motion.a>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  </PageTransition>
);

export default ResumePage;
