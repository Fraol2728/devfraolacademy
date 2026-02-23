import { PageShell } from "@/components/common/PageShell";

const faqs = [
  ["Are classes live or recorded?", "Most cohorts include live sessions plus recordings and notes."],
  ["Do you provide certificates?", "Yes, certificates are issued upon successful course completion."],
  ["Can beginners join?", "Yes. Start with beginner paths and follow guided milestones."]
];

export const FAQ = () => (
  <PageShell>
    <section className="container py-16 text-left">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-7 space-y-3">
        {faqs.map(([q, a]) => (
          <article key={q} className="rounded-xl border border-border bg-card p-5">
            <h2 className="font-semibold">{q}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{a}</p>
          </article>
        ))}
      </div>
    </section>
  </PageShell>
);
