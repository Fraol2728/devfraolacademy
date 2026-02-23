import { PageShell } from "@/components/common/PageShell";

export const About = () => (
  <PageShell>
    <section className="container py-16 text-left">
      <h1 className="text-3xl font-bold">About Dev Fraol Academy</h1>
      <p className="mt-3 text-muted-foreground max-w-3xl">Our mission is to make high-quality software education accessible through practical projects, mentorship, and career-focused guidance.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5"><p className="text-3xl font-bold">2k+</p><p className="text-sm text-muted-foreground">Learners</p></div>
        <div className="rounded-xl border border-border bg-card p-5"><p className="text-3xl font-bold">20+</p><p className="text-sm text-muted-foreground">Live cohorts</p></div>
        <div className="rounded-xl border border-border bg-card p-5"><p className="text-3xl font-bold">92%</p><p className="text-sm text-muted-foreground">Completion rate</p></div>
      </div>
    </section>
  </PageShell>
);
