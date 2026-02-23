import { PageShell } from "@/components/common/PageShell";
import { testimonials } from "@/data/testimonials";
import { TestimonialsList } from "@/features/testimonials/TestimonialsList";

export const Testimonials = () => (
  <PageShell>
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <p className="mt-2 text-muted-foreground">Stories from students and alumni.</p>
      <div className="mt-7"><TestimonialsList testimonials={testimonials} /></div>
    </section>
  </PageShell>
);
