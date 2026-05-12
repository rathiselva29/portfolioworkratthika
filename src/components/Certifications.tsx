import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Eye, X, Calendar, Trophy, Building2, Sparkles } from "lucide-react";
import certTypewriting from "@/assets/cert-typewriting.jpg";
import certDrone from "@/assets/cert-drone.jpg";
import certSports1 from "@/assets/cert-sports1.jpg";
import certSports2 from "@/assets/cert-sports2.jpg";
import certMadhyama from "@/assets/cert-madhyama.jpg";
import certPrathamic from "@/assets/cert-prathamic.jpg";
import certExcel from "@/assets/cert-excel.jpg";

// Sensitive regions (top, left, width, height) in % of the image — blurred for privacy
type Redact = { top: string; left: string; width: string; height: string };

type Cert = {
  id: string;
  title: string;
  description: string;
  year: string;
  platform: string;
  importance: string;
  highlight?: string; // shown as a badge (Winner / score%) when notable (winner or >60%)
  images: string[];
  redactions: Redact[][];
};

const certs: Cert[] = [
  {
    id: "excel",
    title: "Excel — Course Completion",
    description:
      "Completed the Excel course covering formulas, data analysis and spreadsheet productivity.",
    year: "2025",
    platform: "Infosys Springboard",
    importance: "Strengthens analytical & data-handling skills relevant for any tech role.",
    images: [certExcel],
    redactions: [
      [{ top: "55%", left: "8%", width: "16%", height: "26%" }], // QR code
    ],
  },
  {
    id: "typewriting",
    title: "Junior Grade Typewriting English",
    description:
      "Completed Junior Grade Typewriting English certification at 30 words per minute.",
    year: "2022",
    platform: "Government of Tamil Nadu — Department of Technical Education",
    importance: "Demonstrates typing proficiency and discipline — useful for documentation roles.",
    images: [certTypewriting],
    redactions: [
      [
        { top: "1%", left: "2%", width: "30%", height: "8%" },
        { top: "1%", left: "62%", width: "36%", height: "8%" },
        { top: "30%", left: "38%", width: "26%", height: "18%" },
        { top: "50%", left: "30%", width: "40%", height: "5%" },
        { top: "82%", left: "2%", width: "16%", height: "16%" },
      ],
    ],
  },
  {
    id: "drone",
    title: "Skill Development & Entrepreneurship — Drone Technology",
    description:
      "Participated in a 5-day (25 hours) skill development and entrepreneurship training program in Drone Technology.",
    year: "2023",
    platform: "Jet Aerospace · Supported by IHFC, IIT Delhi (DST)",
    importance: "Hands-on exposure to emerging UAV technology and entrepreneurial skills.",
    images: [certDrone],
    redactions: [[{ top: "70%", left: "5%", width: "14%", height: "22%" }]],
  },
  {
    id: "sports",
    title: "Republic Day Sports — Hand Ball (Winner)",
    description:
      "Won Zone Level Republic Day Games & Sports in Hand Ball across two consecutive years.",
    year: "2018-2019",
    platform: "School Education Department, Tamil Nadu",
    importance: "Reflects teamwork, perseverance and consistent performance under pressure.",
    highlight: "Winner",
    images: [certSports1, certSports2],
    redactions: [[], []],
  },
  {
    id: "madhyama",
    title: "Madhyama Examination — First Class",
    description:
      "Successfully passed the Madhyama level Hindi examination in First Class with 155/200 (77.5%).",
    year: "2019",
    platform: "Dakshina Bharat Hindi Prachar Sabha, Madras",
    importance: "Strong command of Hindi enabling effective multi-lingual communication.",
    highlight: "77.5% · First Class",
    images: [certMadhyama],
    redactions: [[{ top: "26%", left: "33%", width: "30%", height: "5%" }]],
  },
  {
    id: "prathamic",
    title: "Prathamic Examination — First Class",
    description:
      "Successfully passed the Prathamic level Hindi examination in First Class with 62% marks.",
    year: "2016",
    platform: "Dakshina Bharat Hindi Prachar Sabha, Madras",
    importance: "Foundational Hindi proficiency complementing the Madhyama achievement.",
    highlight: "62% · First Class",
    images: [certPrathamic],
    redactions: [[{ top: "27%", left: "33%", width: "30%", height: "5%" }]],
  },
];

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
          Certifications, training programs and achievements earned along my journey. Press
          “View Certificate” to preview any document.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => {
            const isHighlighted = !!c.highlight;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative glass-card p-6 flex flex-col ${
                  isHighlighted
                    ? "border-primary/50 bg-card/90 glow-primary"
                    : "hover:glow-primary transition-shadow"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                    <Trophy size={12} /> {c.highlight}
                  </div>
                )}

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Award size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                    {c.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-1">{c.description}</p>

                <dl className="space-y-2 text-xs mb-5">
                  <div className="flex items-start gap-2">
                    <Calendar size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="text-foreground font-medium">{c.year}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="text-foreground font-medium">{c.platform}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Importance:</span>
                    <span className="text-foreground/90">{c.importance}</span>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setOpenId(c.id)}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/15 hover:bg-primary/25 border border-primary/30 text-primary text-sm font-semibold transition-colors"
                >
                  <Eye size={14} /> View Certificate
                </button>
              </motion.div>
            );
          })}
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
                  <p className="text-primary text-xs font-mono-code mt-1">
                    {active.platform} · {active.year}
                  </p>
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
                    className="relative rounded-lg overflow-hidden border border-border bg-background"
                  >
                    <img
                      src={src}
                      alt={`${active.title} ${idx + 1}`}
                      className="w-full h-auto block"
                    />
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
                Sensitive details (register/serial numbers, QR codes, DOB, photos) are intentionally
                blurred for privacy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
