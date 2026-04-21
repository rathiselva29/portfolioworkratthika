import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Linkedin, Instagram, Mail, Phone, Download, Send, CheckCircle, ArrowUp } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import TiltCard from "../components/TiltCard";
import SocialLinks from "../components/SocialLinks";
import profilePhoto from "@/assets/ratthika-profile.jpg";

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section id={id} ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={`px-6 ${className}`}>
      {children}
    </motion.section>
  );
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const titles = ["Frontend Developer", "Creative Designer", "UI Enthusiast", "Problem Solver"];

const projects = [
  { title: "Artika Creations Website", description: "A creative agency website showcasing design services and portfolio work.", link: "https://artika-creations-rathiselva29s-projects.vercel.app?_vercel_share=VO0lkVXyZ2xwRhVZUGhKveg3Zu4bo4zc", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop" },
  { title: "Habit Tracking App", description: "A web app to build and track daily habits with a clean interface.", link: "https://rathiselva29.github.io/Habit-Tracking/", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop" },
  { title: "Daily Tracking Website", description: "A handmade design for daily activity tracking and productivity.", link: "https://rathiselva29.github.io/DailyTracking/", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop" },
  { title: "VS Art Project", description: "An art showcase project highlighting creative visual designs.", link: "https://rathiselva29.github.io/ratthika_vs_art_project/", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop" },
];

const technicalSkills = [
  { name: "HTML", level: 95 }, { name: "CSS", level: 90 }, { name: "MySQL", level: 75 }, { name: "Git", level: 85 }, { name: "GitHub", level: 88 },
];
const designSkills = [
  { name: "Canva", level: 92 }, { name: "Logo Design", level: 85 }, { name: "Layout Design", level: 80 }, { name: "Banner Design", level: 88 }, { name: "Poster Design", level: 86 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay, duration: 0.5 }} className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-foreground text-sm">{name}</span>
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: delay + 0.5 }} className="text-primary font-mono-code text-xs">{level}%</motion.span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }} className="h-full rounded-full" style={{ background: "linear-gradient(90deg, hsl(190 90% 50%), hsl(270 60% 55%))" }} />
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTitleIdx((i) => (i + 1) % titles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <main>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"><span className="text-gradient">Ratthika S</span></motion.h1>
          <motion.div variants={fadeUp} className="h-10 mb-6 overflow-hidden">
            <motion.p key={titleIdx} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-xl md:text-2xl text-muted-foreground">{titles[titleIdx]}</motion.p>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed">I am a Computer Science and Engineering student passionate about building responsive websites and creating visually appealing designs.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <motion.button onClick={() => scrollTo("projects")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary transition-shadow">View Projects</motion.button>
            <motion.button onClick={() => scrollTo("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 rounded-lg glass-card text-foreground font-semibold hover:glow-secondary transition-shadow gradient-border">Contact Me</motion.button>
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center"><SocialLinks /></motion.div>
        </motion.div>
      </section>

      <Section id="about" className="py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-8 text-gradient text-center">About Me</motion.h2>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-60" />
              <img src={profilePhoto} alt="Ratthika S" className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/40 glow-primary" />
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground leading-relaxed mb-8 text-lg text-center max-w-3xl mx-auto">Ratthika is a dedicated Computer Science and Engineering student with strong interest in frontend development and creative design. Skilled in HTML, CSS, MySQL, Git, and GitHub. Experienced in Canva-based designing including logo creation, layout design, banner and poster design. Currently seeking internship opportunities to gain practical industry experience.</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ num: "5+", label: "Projects" }, { num: "CSE", label: "Branch" }, { num: "3", label: "Internships" }, { num: "100%", label: "Dedication" }].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center"><p className="text-2xl font-bold text-primary">{stat.num}</p><p className="text-sm text-muted-foreground mt-1">{stat.label}</p></div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="projects" className="py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">Projects</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">A collection of projects that showcase my skills and passion for development.</motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <TiltCard className="glass-card overflow-hidden group">
                  <div className="relative overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer"><motion.button whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold"><ExternalLink size={14} /> View Live</motion.button></a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" className="py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">My Skills</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12">Technologies and tools I use to bring ideas to life</motion.p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-6 space-y-4"><h3 className="text-lg font-bold text-foreground mb-4">Technical Skills</h3>{technicalSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}</div>
            <div className="glass-card p-6 space-y-4"><h3 className="text-lg font-bold text-foreground mb-4">Design Skills</h3>{designSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}</div>
          </div>
        </div>
      </Section>

      <Section id="resume" className="py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4 text-gradient">My Resume</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground mb-8">Download my resume to learn more about my experience and qualifications.</motion.p>
          <TiltCard className="glass-card p-8 md:p-12 text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">Ratthika S</h3>
            <p className="text-primary font-mono-code text-sm mb-6">CSE Student · Frontend Developer · Creative Designer</p>
            <div className="space-y-4 text-muted-foreground text-sm mb-8">
              <div><h4 className="text-foreground font-semibold mb-1">Education</h4><p>B.E. Computer Science & Engineering</p></div>
              <div><h4 className="text-foreground font-semibold mb-1">Skills</h4><p>HTML, CSS, MySQL, Git, GitHub, Canva, UI Design</p></div>
              <div><h4 className="text-foreground font-semibold mb-1">Internships</h4><p>3 internships in web development and design</p></div>
            </div>
            <motion.a href="/Ratthika_S_Resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary transition-shadow"><Download size={18} /> Download Resume (PDF)</motion.a>
          </TiltCard>
        </div>
      </Section>

      <Section id="contact" className="py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">Get In Touch</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">If you are a recruiter or company and interested in my work, feel free to contact me. I am actively looking for job and internship opportunities.</motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="mailto:ratthikaratthika55@gmail.com" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><Mail className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">Email</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">ratthikaratthika55@gmail.com</p></div></a>
              <a href="tel:7397732494" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><Phone className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">Phone</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">7397732494</p></div></a>
              <a href="https://github.com/rathiselva29" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><Github className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">GitHub</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">rathiselva29</p></div></a>
              <a href="https://www.linkedin.com/in/ratthika-s29/" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><Linkedin className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">LinkedIn</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">ratthika-s29</p></div></a>
              <a href="https://www.instagram.com/rathii__selva" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><Instagram className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">Instagram</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">rathii__selva</p></div></a>
              <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:glow-primary transition-shadow group"><ExternalLink className="text-primary" size={20} /><div><p className="text-xs text-muted-foreground">Naukri</p><p className="text-foreground text-sm group-hover:text-primary transition-colors">View Profile</p></div></a>
            </div>
            <div>
              {sent ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-12 text-center h-full flex flex-col items-center justify-center"><CheckCircle className="mx-auto mb-4 text-primary" size={48} /><p className="text-xl font-bold text-foreground">Message Sent!</p><p className="text-muted-foreground mt-2">I'll get back to you soon.</p></motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                  <div><input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />{errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}</div>
                  <div><input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />{errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}</div>
                  <div><textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClasses + " resize-none"} />{errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}</div>
                  <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary disabled:opacity-50 transition-all">
                    {sending ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" /> : <><Send size={16} /> Send Message</>}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section id="cta" className="py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Looking for a passionate <span className="text-gradient">developer or designer?</span></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground mb-8 text-lg">I am actively seeking job opportunities. Let's work together!</motion.p>
          <motion.button onClick={() => scrollTo("contact")} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="px-12 py-5 rounded-xl bg-primary text-primary-foreground text-lg font-bold animate-pulse-glow gradient-border">Hire Me</motion.button>
        </div>
      </Section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-6">
          <SocialLinks />
          <p className="text-muted-foreground text-sm">© 2026 Ratthika S. All rights reserved.</p>
          <motion.button onClick={() => scrollTo("hero")} whileHover={{ scale: 1.1 }} className="glass-card p-3 text-muted-foreground hover:text-primary transition-colors" aria-label="Back to top"><ArrowUp size={20} /></motion.button>
        </div>
      </footer>
    </main>
  );
};

export default Index;
