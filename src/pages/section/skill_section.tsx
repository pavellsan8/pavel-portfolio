import React from "react";
import { Star, Languages, Briefcase } from "lucide-react";

import { hardSkills, softSkills, projects } from "../../data/data";

export default function SkillSection() {
  return (
    <>
      <section id="skill" className="bg-custom-color_1 px-6 pt-14 md:px-14">
        <div className="p-4 md:p-3">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-white my-4">Skill</h1>
            <div className="h-1 w-16 bg-custom-color_5 mb-6"></div>
            <p className="text-gray-300 mb-8">
              Specialized in modern technologies and development practices, I am equipped with the skills to build scalable, efficient, and user-centric applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hardSkills.map((skill, index) => (
                <div key={index} className="">
                  <div className="flex justify-between text-gray-300 font-medium mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-custom-color_5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-between mt-10 mb-8 md:mt-16 md:mb-10 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg space-y-3 flex-1">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Languages className="text-blue-400" />
                  Languages
                </h2>
                <div className="space-y-2 text-gray-200">
                  <div>Indonesian (Native)</div>
                  <div>English (Professional Working)</div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg space-y-4">
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
              </div>

              <div className="bg-gray-800 p-6 rounded-lg space-y-4 flex-1">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="text-blue-400" />
                  Featured Projects
                </h2>
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <div key={index} className="space-y-1">
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}