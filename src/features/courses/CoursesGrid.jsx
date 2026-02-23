import { CourseCard } from "@/features/courses/CourseCard";

export const CoursesGrid = ({ courses }) => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);
