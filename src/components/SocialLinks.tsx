import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratthika-s29/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/rathiselva29", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/rathii__selva", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socials.map((s, i) => (
      <motion.a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="glass-card p-3 text-muted-foreground hover:text-primary hover:glow-primary transition-colors"
      >
        <s.icon size={20} />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
