import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";

const profiles = [
  { name: "GitHub", icon: Github, url: "#", color: "hsl(0 0% 90%)" },
  { name: "LeetCode", icon: ExternalLink, url: "#", color: "hsl(35 100% 55%)" },
  { name: "SkillRack", icon: ExternalLink, url: "#", color: "hsl(190 90% 50%)" },
  { name: "LinkedIn", icon: ExternalLink, url: "#", color: "hsl(210 80% 55%)" },
];

const ProfilesPage = () => (
  <PageTransition>
    <section className="min-h-screen px-6 pt-28 pb-16">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center"
        >
          Coding Profiles
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12 }}
            >
              <TiltCard className="glass-card p-8 text-center hover:glow-primary transition-shadow cursor-pointer">
                <p.icon size={36} className="mx-auto mb-4" style={{ color: p.color }} />
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">View Profile →</p>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default ProfilesPage;
