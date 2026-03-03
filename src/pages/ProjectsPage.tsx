import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard with analytics, real-time data, and responsive design.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with animated backgrounds and location-based forecasts.",
    tech: ["React", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that helps developers create stunning portfolio websites in minutes.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
  },
  {
    title: "Task Manager",
    description: "Kanban-style task management app with drag and drop and team collaboration.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
];

const ProjectsPage = () => (
  <PageTransition>
    <section className="min-h-screen px-6 pt-28 pb-16">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <TiltCard className="glass-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-mono-code">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Github size={14} /> Code
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default ProjectsPage;
