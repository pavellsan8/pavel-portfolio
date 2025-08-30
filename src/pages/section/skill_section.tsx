import React from "react";
import { Star, Languages, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { hardSkills, softSkills, projectCard } from "../../data/data";
import { staggerContainer, fadeInUp, slideInFromLeft } from "../../data/animation.js";

export default function SkillSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="skill"
      className="bg-custom-color_1 px-6 pt-14 md:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      animate={isInView? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="p-4 md:p-3">
        <div className="mx-auto">
          <motion.h1 
            className="text-3xl font-bold text-white my-4"
            variants={fadeInUp}
          >
            Skill
          </motion.h1>
          <motion.div variants={fadeInUp} className="h-1 w-16 bg-custom-color_5 mb-6" />
          <motion.p variants={fadeInUp} className="text-gray-300 mb-8">
            Specialized in modern technologies and development practices, I am equipped with the skills to build scalable, efficient, and user-centric applications.
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
            {hardSkills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex justify-between text-gray-300 font-medium mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-custom-color_5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-between mt-10 mb-8 md:mt-16 md:mb-10 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={slideInFromLeft} className="bg-gray-800 p-6 rounded-lg space-y-3 flex-1">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Languages className="text-blue-400" />
                Languages
              </h2>
              <div className="space-y-2 text-gray-200">
                <div>Indonesian (Native)</div>
                <div>English (Professional Working)</div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-gray-800 p-6 rounded-lg space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Star className="text-blue-400" />
                Soft Skills
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                    <div className="space-y-1">
                        <h3 className="font-semibold">{skill.title}</h3>
                        <p className="text-sm text-gray-300">{skill.description}</p>
                    </div>
                    </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={slideInFromLeft} className="bg-gray-800 p-6 rounded-lg space-y-4 flex-1">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="text-blue-400" />
                Featured Projects
              </h2>
              <div className="space-y-3">
                {projectCard.slice(-2).reverse().map((project, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-300">
                      {Array.isArray(project.technologies)
                        ? project.technologies.join(", ")
                        : project.technologies}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}