import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const aboutCards = [
  { title: "Mission", text: "Empower learners with practical engineering skills through guided, project-first education." },
  { title: "Values", text: "Clarity, consistency, mentorship, and a build-in-public mindset for every student." },
  { title: "Outcome", text: "Portfolio-ready projects, interview confidence, and production-style coding habits." }
];

const stats = [
  { label: "Learners", value: "2,000+" },
  { label: "Courses", value: "25+" },
  { label: "Completion", value: "92%" }
];

export const About = () => (
  <section id="about" className="container py-20">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-left text-3xl font-bold"
    >
      About the Academy
    </motion.h2>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {aboutCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.08 }}
        >
          <GlassCard className="h-full text-left">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{card.text}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <GlassCard key={item.label} className="text-left">
          <p className="text-3xl font-black text-primary">{item.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);
