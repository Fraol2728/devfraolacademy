import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/useToastStore";
import { GlassCard } from "@/components/ui/GlassCard";

const defaultValues = { name: "", email: "", course: "", message: "" };

export const Contact = () => {
  const [values, setValues] = useState(defaultValues);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkyrrzd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({ title: "Enrollment sent", description: "We will contact you soon.", variant: "success" });
      setValues(defaultValues);
    } catch {
      toast({ title: "Submission failed", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container py-20">
      <motion.h2
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-left text-3xl font-bold"
      >
        Enroll & Contact
      </motion.h2>
      <GlassCard className="mt-8 text-left">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <input className="rounded-xl border border-border/80 bg-background/60 p-3" name="name" placeholder="Name" value={values.name} onChange={onChange} required />
          <input className="rounded-xl border border-border/80 bg-background/60 p-3" name="email" type="email" placeholder="Email" value={values.email} onChange={onChange} required />
          <input className="rounded-xl border border-border/80 bg-background/60 p-3 md:col-span-2" name="course" placeholder="Course of interest" value={values.course} onChange={onChange} required />
          <textarea className="min-h-32 rounded-xl border border-border/80 bg-background/60 p-3 md:col-span-2" name="message" placeholder="Message" value={values.message} onChange={onChange} required />
          <button disabled={submitting} className="cosmic-button md:col-span-2 disabled:opacity-60" type="submit">
            {submitting ? "Submitting..." : "Submit Enrollment"}
          </button>
        </form>
      </GlassCard>
    </section>
  );
};
