import React from "react";
import ProjectCard from "@/components/project_card";
import { projectCard } from "@/data/homepage";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <section className="bg-custom-color_1 px-6 py-14 md:px-14">
      <h1 className="text-3xl font-bold text-white my-4">All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCard.map((project) => (
          <Link key={project.id} href={`/pavel-projects/${project.id}`}>
            <ProjectCard 
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
