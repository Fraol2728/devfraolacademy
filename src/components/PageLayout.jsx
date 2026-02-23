import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/Footer";

export default function PageLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
