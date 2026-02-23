import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/50 py-8 mt-8">
    <div className="container flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Dev Fraol Academy. All rights reserved.</p>
      <div className="flex gap-4">
        <Link to="/courses" className="hover:text-primary">Courses</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
        <a href="mailto:hello@devfraolacademy.com" className="hover:text-primary">hello@devfraolacademy.com</a>
      </div>
    </div>
  </footer>
);
