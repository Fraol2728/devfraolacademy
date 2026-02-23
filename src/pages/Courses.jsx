import { useMemo, useState } from "react";
import { PageShell } from "@/components/common/PageShell";
import { courses, courseCategories, courseLevels, courseStatuses } from "@/data/courses";
import { CoursesGrid } from "@/features/courses/CoursesGrid";

export const Courses = () => {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(
    () =>
      courses.filter(
        (course) =>
          (category === "All" || course.category === category) &&
          (level === "All" || course.level === level) &&
          (status === "All" || course.status === status)
      ),
    [category, level, status]
  );

  return (
    <PageShell>
      <section className="container py-16">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="mt-2 text-muted-foreground">Filter by category, level, and current batch status.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-border bg-card p-2">{courseCategories.map((item) => <option key={item}>{item}</option>)}</select>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className="rounded-xl border border-border bg-card p-2">{courseLevels.map((item) => <option key={item}>{item}</option>)}</select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-border bg-card p-2">{courseStatuses.map((item) => <option key={item}>{item}</option>)}</select>
        </div>
        <div className="mt-8"><CoursesGrid courses={filtered} /></div>
      </section>
    </PageShell>
  );
};
