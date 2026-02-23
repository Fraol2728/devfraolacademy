import { PageShell } from "@/components/common/PageShell";

const plans = [
  { name: "Starter", price: "$99", perks: ["Single course", "Community support"] },
  { name: "Pro", price: "$199", perks: ["Any course", "Mentor reviews", "Certificate"] },
  { name: "Career Track", price: "$399", perks: ["Multiple courses", "1:1 guidance", "Interview prep"] }
];

export const Pricing = () => (
  <PageShell>
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-xl border border-border bg-card p-5 text-left">
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="mt-2 text-2xl font-extrabold text-primary">{plan.price}</p>
            <ul className="mt-3 list-disc pl-4 text-sm text-muted-foreground">
              {plan.perks.map((perk) => <li key={perk}>{perk}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </PageShell>
);
