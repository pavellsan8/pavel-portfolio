import React from "react";
import Link from "next/link";
import Typed from "typed.js";

export default function HeroSection() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm Pavel",
        "Welcome to my portfolio!",
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero" className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-32 relative z-10">
        <div className="flex-1 h-full flex flex-col justify-center items-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white-800 text-center">
            <span ref={el}></span>
          </h1>
          <p className="text-lg md:text-xl text-white-600 text-center">
            Discover my career journey, skills, and completed projects here!
          </p>
          <Link href="/about">
            <button className="mt-4 px-6 py-2 bg-custom-color_5 text-white text-lg rounded-lg hover:bg-custom-color_4 transition duration-200 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      
      {/* Overlay Hero Image */}
      <div
        className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/homepage/hero.jpg")' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
      </div>
    </>
  );
}