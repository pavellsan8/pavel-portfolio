import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import ProjectCard from "../../components/project_card";
import { projectCard } from "../../data/data";
import { staggerContainer, fadeInUp } from "../../data/animation.js";

export default function ProjectSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.section
        ref={ref}
        id="project"
        className="bg-custom-color_1 px-6 pt-14 md:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate={isInView? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="p-4 md:p-3">
          <div className="mx-auto">
            <motion.div 
              className="flex justify-between items-center"
              variants={fadeInUp}
            >
              <h1 className="text-3xl font-bold text-white my-4">Project</h1>
              <Link href="/pavel-projects" 
                className="text-white hover:text-custom-color_5 transition duration-300 animate-blink"
              >
                View More →
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="h-1 w-16 bg-custom-color_5 mb-6" />
            <motion.p variants={fadeInUp} className="text-gray-300 mb-4">
              Explore a selection of projects crafted with modern technologies.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[...projectCard].slice(-3).reverse().map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard 
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}