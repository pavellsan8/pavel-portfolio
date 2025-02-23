import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from "../components/navigation_bar";
import Footer from "../components/footer";
import ScrollTopButton from "../components/scrolltop_button";

import HeroSection from "./section/hero_section";
import AboutSection from "./section/about_section";
import ResumeSection from "./section/resume_section";
import ProjectSection from "./section/project_section";
import ContactSection from "./section/contact_section";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.slice(1);
    
    if (path) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.asPath]); 

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectSection />
      <ContactSection />
      <ScrollTopButton />
      <Footer />
    </>
  );
}