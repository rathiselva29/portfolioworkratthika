import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const articles = [
  {
    title: "Building Performant React Applications",
    excerpt: "Explore best practices for optimizing React apps — from code splitting to memoization.",
    date: "Feb 2026",
  },
  {
    title: "The Art of CSS Animations",
    excerpt: "Master CSS keyframes, transitions, and modern animation techniques for the web.",
    date: "Jan 2026",
  },
  {
    title: "Why TypeScript Matters",
    excerpt: "How static typing improves developer experience and catches bugs before production.",
    date: "Dec 2025",
  },
];

const ArticlesPage = () => (
  <PageTransition>
    <section className="min-h-screen px-6 pt-28 pb-16">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center"
        >
          Featured Articles
        </motion.h2>

        <div className="space-y-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 group cursor-pointer hover:glow-primary transition-shadow"
            >
              <p className="text-xs text-muted-foreground font-mono-code mb-2">{a.date}</p>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{a.excerpt}</p>
              <motion.span
                whileHover={{ x: 5 }}
                className="text-primary text-sm font-semibold inline-flex items-center gap-1"
              >
                Read more →
              </motion.span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default ArticlesPage;
