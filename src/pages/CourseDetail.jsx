import { useParams, Link } from "react-router-dom";
import { PageShell } from "@/components/common/PageShell";
import { courses } from "@/data/courses";

export const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <PageShell>
        <section className="container py-20">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <Link className="text-primary hover:underline" to="/courses">Back to courses</Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="container py-16 text-left">
        <p className="text-sm text-primary">{course.category} • {course.level}</p>
        <h1 className="mt-2 text-4xl font-bold">{course.title}</h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">{course.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border px-3 py-1">Status: {course.status}</span>
          <span className="rounded-full border px-3 py-1">Duration: {course.duration}</span>
          <span className="rounded-full border px-3 py-1">Price: {course.price}</span>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Syllabus</h2>
        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
          {course.syllabus.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="mt-4 text-sm">Prerequisites: {course.prerequisites}</p>
        <div className="mt-6 flex gap-3">
          <Link to="/contact" className="cosmic-button">Enroll Now</Link>
          <Link to="/contact" className="rounded-full border px-6 py-2 hover:bg-card">Contact Advisor</Link>
        </div>
      </section>
    </PageShell>
  );
};
