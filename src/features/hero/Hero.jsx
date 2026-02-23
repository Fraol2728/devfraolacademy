import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="container py-20 md:py-28 text-center relative z-10">
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-medium">
        Welcome to Dev Fraol Academy
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-3 text-4xl md:text-6xl font-extrabold"
      >
        Learn by Building. Grow with Mentorship.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-5 max-w-2xl text-muted-foreground"
      >
        Industry-focused courses, clear roadmaps, and guided projects designed to help students and professionals become production-ready developers.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex justify-center gap-3">
        <Link className="cosmic-button" to="/courses">Explore Courses</Link>
        <Link className="px-6 py-2 rounded-full border border-border hover:bg-card" to="/contact">Enroll / Contact</Link>
      </motion.div>
    </section>
  );
};
