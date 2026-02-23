import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AppProviders } from "@/app/providers";
import { Home } from "@/pages/Home";
import { Courses } from "@/pages/Courses";
import { CourseDetail } from "@/pages/CourseDetail";
import { About } from "@/pages/About";
import { Instructors } from "@/pages/Instructors";
import { Testimonials } from "@/pages/Testimonials";
import { Contact } from "@/pages/Contact";
import { FAQ } from "@/pages/FAQ";
import { Blog } from "@/pages/Blog";
import { Pricing } from "@/pages/Pricing";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
