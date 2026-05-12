import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Eye, X, Calendar } from "lucide-react";
import certTypewriting from "@/assets/cert-typewriting.jpg";
import certDrone from "@/assets/cert-drone.jpg";
import certSports1 from "@/assets/cert-sports1.jpg";
import certSports2 from "@/assets/cert-sports2.jpg";
import certMadhyama from "@/assets/cert-madhyama.jpg";
import certPrathamic from "@/assets/cert-prathamic.jpg";

// Sensitive regions (top, left, width, height) in % of the image — blurred for privacy
type Redact = { top: string; left: string; width: string; height: string };

type Cert = {
  id: string;
  title: string;
  description: string;
  year: string;
  images: string[];
  // redactions per image index
  redactions: Redact[][];
};

const certs: Cert[] = [
  {
    id: "typewriting",
    title: "Junior Grade Typewriting English",
    description:
      "Completed Junior Grade Typewriting English certification conducted by the Government of Tamil Nadu.",
    year: "2022",
    images: [certTypewriting],
    redactions: [
      [
        { top: "1%", left: "2%", width: "30%", height: "8%" }, // Register No
        { top: "1%", left: "62%", width: "36%", height: "8%" }, // Serial No
        { top: "30%", left: "38%", width: "26%", height: "18%" }, // Passport photo
        { top: "50%", left: "30%", width: "40%", height: "5%" }, // DoB
        { top: "82%", left: "2%", width: "16%", height: "16%" }, // QR
      ],
    ],
  },
  {
    id: "drone",
    title: "Skill Development & Entrepreneurship Training Program",
    description:
      "Participated in Drone Technology skill development and entrepreneurship training program.",
    year: "2023",
    images: [certDrone],
    redactions: [
      [{ top: "70%", left: "5%", width: "14%", height: "22%" }], // QR code
    ],
  },
  {
    id: "sports",
    title: "Republic Day Sports Participation",
    description:
      "Participated in Republic Day Games and Sports conducted by the school education department.",
    year: "2018-2019",
    images: [certSports1, certSports2],
    redactions: [[], []],
  },
  {
    id: "exams",
    title: "Prathamic & Madhyama Examination Certification",
    description: "Successfully completed Prathamic and Madhyama level examinations.",
    year: "2019",
    images: [certPrathamic, certMadhyama],
    redactions: [
      [{ top: "27%", left: "33%", width: "30%", height: "5%" }],
      [{ top: "26%", left: "33%", width: "30%", height: "5%" }],
    ],
  },
];

const CertImage = ({
  src,
  redactions,
  className = "",
}: {
  src: string;
  redactions: Redact[];
  className?: string;
}) => (
  <div className={`relative w-full h-full ${className}`}>
    <img src={src} alt="Certificate" className="w-full h-full object-cover" />
    {redactions.map((r, i) => (
      <div
        key={i}
        aria-hidden
        className="absolute backdrop-blur-xl bg-background/30 rounded-sm"
        style={{ top: r.top, left: r.left, width: r.width, height: r.height }}
      />
    ))}
  </div>
);

const Certifications = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = certs.find((c) => c.id === openId);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center"
        >
          Certifications & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          A showcase of certifications, training programs, and achievements earned along my journey.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setOpenId(c.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group glass-card overflow-hidden text-left flex flex-col hover:glow-primary transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <CertImage src={c.images[0]} redactions={c.redactions[0]} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-xs text-foreground">
                  <Calendar size={12} className="text-primary" /> {c.year}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 rounded-lg glass text-xs font-semibold text-foreground flex items-center gap-2">
                    <Eye size={14} className="text-primary" /> Press to View Certificate
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-2 mb-2">
                  <Award size={18} className="text-primary mt-0.5 shrink-0" />
                  <h3 className="text-base font-bold text-foreground leading-snug">{c.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm flex-1">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:underline">
                  <Eye size={14} /> View Certificate
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gradient">{active.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{active.description}</p>
                  <p className="text-primary text-xs font-mono-code mt-1">Year: {active.year}</p>
                </div>
                <button
                  onClick={() => setOpenId(null)}
                  aria-label="Close"
                  className="shrink-0 p-2 rounded-lg glass hover:glow-primary transition-shadow"
                >
                  <X size={18} />
                </button>
              </div>
              <div className={`grid gap-4 ${active.images.length > 1 ? "md:grid-cols-2" : ""}`}>
                {active.images.map((src, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative rounded-lg overflow-hidden border border-border"
                  >
                    <img src={src} alt={`${active.title} ${idx + 1}`} className="w-full h-auto block" />
                    {active.redactions[idx]?.map((r, i) => (
                      <div
                        key={i}
                        aria-hidden
                        className="absolute backdrop-blur-xl bg-background/40 rounded-sm"
                        style={{ top: r.top, left: r.left, width: r.width, height: r.height }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Sensitive details (register/serial numbers, QR codes, DOB, photos) are intentionally blurred for privacy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
