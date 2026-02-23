import { ChevronUp } from "lucide-react";

export const Footer = () => (
  <footer id="footer" className="container pb-28 pt-10">
    <div className="rounded-2xl border border-border/50 bg-background/50 p-5 backdrop-blur-sm">
      <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Dev Fraol Academy</p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#courses" className="hover:text-primary">Courses</a>
          <a href="#contact" className="hover:text-primary">Enroll</a>
        </div>
        <a href="#hero" className="inline-flex items-center gap-1 hover:text-primary"><ChevronUp className="h-4 w-4" />Top</a>
      </div>
    </div>
  </footer>
);
