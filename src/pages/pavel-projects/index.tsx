import React from "react";
import Link from "next/link";

import ProjectCard from "../../components/project_card";
import { projectCard } from "../../data/data";

export default function ProjectPage() {
  return (
    <section className="bg-custom-color_1 px-6 py-14 md:px-14">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-custom-color_4 to-custom-color_6 p-8 mb-12">
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Explore my portfolio of projects spanning web development, mobile apps, and design work.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCard.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard 
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <button className="bg-custom-color_5 hover:bg-custom-color_4 text-white px-6 py-3 rounded-lg shadow-md transition-all">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}