import { Link } from "react-router-dom";
import { PageShell } from "@/components/common/PageShell";

export const NotFound = () => (
  <PageShell>
    <section className="container py-20">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go Home</Link>
    </section>
  </PageShell>
);
