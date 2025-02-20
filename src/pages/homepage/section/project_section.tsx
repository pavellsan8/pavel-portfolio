import React from "react";

import ProjectCard from "../../../components/project_card";
import { projectCard } from "@/data/homepage";
export default function ProjectSection() {
  return (
    <>
      <section id="projects" className="bg-custom-color_1 px-6 py-14 md:px-14">
        <div className="p-4 md:p-3">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-white my-4">Projects</h1>
            <div className="h-1 w-16 bg-custom-color_5 mb-6"></div>
            <p className="text-gray-300 mb-8">
              Explore a selection of projects crafted with modern technologies, 
              showcasing innovation, scalability, and a focus on user experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectCard.map((project, index) => (
                <ProjectCard 
                  key={index}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}