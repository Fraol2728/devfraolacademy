import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { GlassCard } from "@/components/ui/GlassCard";

export const CoursesPreview = () => (
  <section id="courses" className="container py-20">
    <motion.h2
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="text-left text-3xl font-bold"
    >
      Featured Courses
    </motion.h2>
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {courses.slice(0, 4).map((course) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -8, scale: 1.01 }}
        >
          <GlassCard className="h-full text-left transition-all duration-300 hover:shadow-[0_0_22px_rgba(99,102,241,0.35)]">
            <p className="text-xs uppercase tracking-wider text-primary">{course.category}</p>
            <h3 className="mt-2 text-xl font-bold">{course.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{course.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span>{course.duration}</span>
              <span className="font-semibold text-primary">{course.price}</span>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </section>
);
