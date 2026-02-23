import { useEffect, useMemo, useState } from "react";
import { Hero } from "@/features/hero/Hero";
import { NavbarDock } from "@/features/navbar/NavbarDock";
import { About } from "@/features/about/About";
import { CoursesPreview } from "@/features/courses/CoursesPreview";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";
import { StarBackground } from "@/components/common/Background";

const observedSections = ["hero", "about", "courses", "testimonials", "contact"];

export const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sections = useMemo(() => observedSections, []);

  useEffect(() => {
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) =>
        new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          },
          { threshold: 0.45 }
        )
      );

    observers.forEach((observer, index) => {
      const section = document.getElementById(sections[index]);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarBackground />
      <div className="relative z-10 text-center">
        <Hero />
        <About />
        <CoursesPreview />
        <Testimonials />
        <Contact />
        <Footer />
        <NavbarDock activeSection={activeSection} />
      </div>
    </div>
  );
};
