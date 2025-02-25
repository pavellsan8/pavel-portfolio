import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = ({ sectionId = "hero" }) => {
  const [isVisible, setIsVisible] = useState(sectionId !== "hero");
  const [shouldRender, setShouldRender] = useState(sectionId !== "hero");

  useEffect(() => {
    if (sectionId !== "hero") {
      setShouldRender(true);
      setIsVisible(true);
      return;
    }

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      console.warn(`Section with ID "${sectionId}" not found. Button might not work as expected.`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShouldRender(true);
          setTimeout(() => setIsVisible(true), 50);
        } else {
          setIsVisible(false);
          setTimeout(() => setShouldRender(false), 300);
        }
      },
      {
        root: null, 
        threshold: 0.5, 
      }
    );

    observer.observe(targetSection);

    return () => {
      if (targetSection) observer.unobserve(targetSection);
    };
  }, [sectionId]);

  const scrollToTop = () => {
    const baseUrl = `${window.location.origin}`;
    history.replaceState(null, "", baseUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!shouldRender) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-custom-color_5 text-white p-4 rounded-full shadow-lg 
      hover:bg-custom-blue_5 hover:scale-110
      transition-all duration-300 ease-in-out transform
      ${isVisible 
        ? "translate-y-0 opacity-100 rotate-0" 
        : "translate-y-16 opacity-0 rotate-180 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp 
        className={`w-5 h-5 transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-0"
        }`} 
      />
    </button>
  );
};

export default ScrollTopButton;