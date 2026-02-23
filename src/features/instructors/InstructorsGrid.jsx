import { motion } from "framer-motion";

export const InstructorsGrid = ({ instructors }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {instructors.map((instructor) => (
      <motion.article
        key={instructor.id}
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl border border-border bg-card p-5 text-left"
      >
        <img src={instructor.photo} alt={instructor.name} className="h-14 w-14 rounded-full object-cover" />
        <h3 className="mt-3 text-lg font-bold">{instructor.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{instructor.bio}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {instructor.expertise.map((item) => (
            <span key={item} className="rounded-full border border-border px-2 py-1 text-xs">{item}</span>
          ))}
        </div>
      </motion.article>
    ))}
  </div>
);
