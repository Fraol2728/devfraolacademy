import { PageShell } from "@/components/common/PageShell";
import { instructors } from "@/data/instructors";
import { InstructorsGrid } from "@/features/instructors/InstructorsGrid";

export const Instructors = () => (
  <PageShell>
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Meet Your Instructors</h1>
      <p className="mt-2 text-muted-foreground">Learn from mentors with production and teaching experience.</p>
      <div className="mt-7"><InstructorsGrid instructors={instructors} /></div>
    </section>
  </PageShell>
);
