import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const CTAPage = () => (
  <PageTransition>
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-foreground"
        >
          Let's Build Something{" "}
          <span className="text-gradient">Amazing</span> Together
        </motion.h2>

        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-5 rounded-xl bg-primary text-primary-foreground text-lg font-bold animate-pulse-glow gradient-border"
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </section>
  </PageTransition>
);

export default CTAPage;
