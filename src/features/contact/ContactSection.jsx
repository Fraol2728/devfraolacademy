import { useState } from "react";
import { useToast } from "@/hooks/useToastStore";

export const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpbojaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed");

      toast({ title: "Enrollment request sent", description: "We will contact you soon.", variant: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Could not send form", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Enrollment & Contact</h1>
      <p className="mt-2 text-muted-foreground">Fill this form to enroll in a course or ask questions.</p>
      <form onSubmit={onSubmit} className="mx-auto mt-6 max-w-xl space-y-4 text-left">
        <input className="w-full rounded-xl border border-border bg-card p-3" placeholder="Name" name="name" value={formData.name} onChange={onChange} required />
        <input className="w-full rounded-xl border border-border bg-card p-3" placeholder="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
        <textarea className="w-full rounded-xl border border-border bg-card p-3" placeholder="Message" name="message" rows={5} value={formData.message} onChange={onChange} required />
        <button disabled={loading} className="cosmic-button" type="submit">{loading ? "Sending..." : "Submit"}</button>
      </form>
    </section>
  );
};
