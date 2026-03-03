import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import ParticlesBackground from "../components/ParticlesBackground";
import SocialLinks from "../components/SocialLinks";

const titles = ["Frontend Developer", "Creative Designer", "UI Enthusiast", "Problem Solver"];

const HeroPage = () => {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTitleIdx((i) => (i + 1) % titles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.p variants={fadeUp} className="font-mono-code text-primary text-sm mb-4 tracking-widest uppercase">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-gradient">Rathi</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-10 mb-6 overflow-hidden">
            <motion.p
              key={titleIdx}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              {titles[titleIdx]}
            </motion.p>
          </motion.div>

          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed">
            Crafting pixel-perfect, interactive digital experiences with modern web technologies.
            Passionate about clean code, beautiful design, and seamless user experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary transition-shadow"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg glass-card text-foreground font-semibold hover:glow-secondary transition-shadow gradient-border"
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gradient"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground leading-relaxed mb-6 text-lg"
          >
            I'm a Frontend Developer & Creative Designer who loves turning ideas into elegant,
            functional web experiences. With a strong foundation in modern JavaScript frameworks
            and a keen eye for design, I build interfaces that are both beautiful and performant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { num: "20+", label: "Projects" },
              { num: "2+", label: "Years Exp" },
              { num: "15+", label: "Technologies" },
              { num: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <p className="text-2xl font-bold text-primary">{stat.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HeroPage;
