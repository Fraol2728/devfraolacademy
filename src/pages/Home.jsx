import { PageShell } from "@/components/common/PageShell";
import { HeroSection } from "@/features/hero/Hero";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { CoursesGrid } from "@/features/courses/CoursesGrid";
import { TestimonialsList } from "@/features/testimonials/TestimonialsList";

export const Home = () => (
  <PageShell>
    <HeroSection />
    <section className="container py-14">
      <h2 className="text-2xl font-bold">Featured Courses</h2>
      <p className="mt-2 text-muted-foreground">Start with our most popular learning paths.</p>
      <div className="mt-6"><CoursesGrid courses={courses.slice(0, 3)} /></div>
    </section>
    <section className="container py-14">
      <h2 className="text-2xl font-bold">About the Academy</h2>
      <p className="mt-2 text-muted-foreground max-w-3xl">Dev Fraol Academy is focused on practical tech education, portfolio-ready projects, and mentorship that helps learners move from theory to real development work.</p>
    </section>
    <section className="container py-14">
      <h2 className="text-2xl font-bold">Student Testimonials</h2>
      <div className="mt-6"><TestimonialsList testimonials={testimonials} /></div>
    </section>
  </PageShell>
);
