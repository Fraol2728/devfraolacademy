import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const dockLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Reviews", id: "testimonials" },
  { label: "Contact", id: "contact" }
];

export const NavbarDock = ({ activeSection = "hero" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3">
      <div className="flex gap-2 rounded-full border border-white/25 bg-background/60 p-2 shadow-2xl backdrop-blur-md dark:border-white/10">
        {dockLinks.map((item) => {
          const active = pathname === "/" && activeSection === item.id;
          return (
            <motion.a
              key={item.id}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "bg-primary text-primary-foreground" : "hover:bg-card/70"
              }`}
            >
              {item.label}
            </motion.a>
          );
        })}
        {pathname !== "/" && (
          <Link to="/" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Home</Link>
        )}
      </div>
    </nav>
  );
};
