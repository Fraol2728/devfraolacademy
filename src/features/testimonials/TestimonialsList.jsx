import { motion } from "framer-motion";

export const TestimonialsList = ({ testimonials }) => (
  <div className="grid gap-4 lg:grid-cols-3">
    {testimonials.map((item) => (
      <motion.blockquote
        key={item.id}
        whileHover={{ y: -4 }}
        className="rounded-2xl border border-border bg-card p-5 text-left"
      >
        <p className="text-sm text-muted-foreground">“{item.content}”</p>
        <footer className="mt-4 flex items-center gap-3">
          <img src={item.image} alt={item.name} className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.role}</p>
          </div>
        </footer>
      </motion.blockquote>
    ))}
  </div>
);
