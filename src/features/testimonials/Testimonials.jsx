import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { GlassCard } from "@/components/ui/GlassCard";

export const Testimonials = () => (
  <section id="testimonials" className="container py-20">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="text-left text-3xl font-bold"
    >
      Student Reviews
    </motion.h2>
    <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
      {testimonials.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.07 }}
          whileHover={{ scale: 1.02 }}
          className="min-w-[300px] snap-start md:min-w-[360px]"
        >
          <GlassCard className="h-full text-left">
            <p className="text-sm text-muted-foreground">“{review.content}”</p>
            <div className="mt-5">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-primary">{review.role}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </section>
);
