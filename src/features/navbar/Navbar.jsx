import { NavLink } from "react-router-dom";
import { Moon, Sun, Volume2, VolumeX, Github, Linkedin, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { cn } from "@/lib/utils";

const navItems = [
  ["/", "Home"],
  ["/courses", "Courses"],
  ["/about", "About"],
  ["/instructors", "Instructors"],
  ["/testimonials", "Testimonials"],
  ["/contact", "Contact"],
  ["/faq", "FAQ"],
  ["/blog", "Blog"],
  ["/pricing", "Pricing"]
];

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { isPlaying, isAudioReady, toggle } = useAudioPlayer("/music.mp3");

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-primary">
          <img src="/logo.png" className="h-8 w-8 rounded-md" alt="Dev Fraol Academy logo" />
          <span className="hidden sm:block">Dev Fraol Academy</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-card"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-card"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            disabled={!isAudioReady}
            onClick={toggle}
            className="rounded-full p-2 hover:bg-card disabled:opacity-50"
            aria-label="Toggle academy audio"
          >
            {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </motion.button>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-card"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-card"><Linkedin className="h-4 w-4" /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-card"><Youtube className="h-4 w-4" /></a>
        </div>
      </div>
    </header>
  );
};
