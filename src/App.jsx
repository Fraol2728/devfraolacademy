import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {!welcomeComplete ? (
        <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
