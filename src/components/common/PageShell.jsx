import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";
import { StarBackground } from "@/components/common/Background";

export const PageShell = ({ children }) => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <StarBackground />
    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);
