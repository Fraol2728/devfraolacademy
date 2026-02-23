import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/GlassCard";
import { Typewriter } from "@/components/ui/Typewriter";

const terminalLines = [
  [
    { text: "const ", className: "text-purple-400" },
    { text: "academy", className: "text-sky-400" },
    { text: " = ", className: "text-zinc-300" },
    { text: '"Dev Fraol Academy"', className: "text-emerald-400" },
    { text: ";", className: "text-zinc-300" }
  ],
  [
    { text: "learn", className: "text-amber-400" },
    { text: "(", className: "text-zinc-300" },
    { text: "'React 18 + Tailwind v4 + Motion'", className: "text-pink-400" },
    { text: ");", className: "text-zinc-300" }
  ],
  [
    { text: "deploy", className: "text-blue-400" },
    { text: "(", className: "text-zinc-300" },
    { text: "'Portfolio-ready projects'", className: "text-green-400" },
    { text: ");", className: "text-zinc-300" }
  ]
];

export const Hero = () => (
  <section id="hero" className="container pt-16 pb-20 md:pt-20 md:pb-28">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-10 lg:grid-cols-2"
    >
      <div className="text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Dev Fraol Academy</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Build modern skills.
          <span className="block text-primary">Ship real products.</span>
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Project-based learning for frontend, backend, and AI. Join mentorship-driven cohorts and grow from learner to deploy-ready developer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/courses" className="cosmic-button">Browse Courses</Link>
          <a href="#contact" className="rounded-full border border-border/60 px-6 py-2 font-medium hover:bg-card/70">Enroll Now</a>
        </div>
      </div>

      <GlassCard className="bg-black/45 p-5 text-zinc-100">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <p className="ml-3 text-xs text-zinc-400">academy-terminal.ts</p>
        </div>
        <Typewriter lines={terminalLines} />
      </GlassCard>
    </motion.div>
  </section>
);
