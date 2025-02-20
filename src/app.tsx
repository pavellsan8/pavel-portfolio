import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation_bar";
import Homepage from "./pages/homepage/homepage"; 
import AboutSection from "./pages/homepage/section/about_section";
import ResumeSection from "./pages/homepage/section/resume_section";
import ProjectSection from "./pages/homepage/section/project_section";
import ContactSection from "./pages/homepage/section/contact_section";

import ProjectDetailPage from "./pages/project_detail/project_detail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />

        <Route path="/project/detail/<id>" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}