import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Wraps each page with fade + slide + blur transitions */
const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

export default PageTransition;
