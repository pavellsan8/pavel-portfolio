import React from "react";

import ScrollTopButton from "../../components/scrolltop_button";
import HeroSection from "./section/hero_section";
import AboutSection from "./section/about_section";
import ResumeSection from "./section/resume_section";
import ProjectSection from "./section/project_section";
import ContactSection from "./section/contact_section";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="resume">
        <ResumeSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <ScrollTopButton />
    </>
  );
}