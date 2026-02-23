import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CourseCard = ({ course }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm"
  >
    <div className="mb-3 flex items-center justify-between text-xs">
      <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{course.category}</span>
      <span className="text-muted-foreground uppercase">{course.status}</span>
    </div>
    <h3 className="text-lg font-bold">{course.title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
    <div className="mt-4 flex items-center justify-between text-sm">
      <span>{course.level}</span>
      <span>{course.duration}</span>
    </div>
    <Link to={`/courses/${course.id}`} className="mt-4 inline-block text-primary hover:underline">
      View details →
    </Link>
  </motion.article>
);
