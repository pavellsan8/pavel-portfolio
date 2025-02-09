import React from "react";
import Image from "next/image";
import { Mail, MapPin, GraduationCap, User, Star, Languages, Briefcase, Phone } from "lucide-react";

import ListItem from "../../../components/list_item_profile";
import { hardSkills, softSkills, projects, experiences } from "../../../data/homepage";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-custom-color_1 px-6 pt-14 md:px-14">
        <div className="p-4 md:p-3">
          {/* First Part */}
          <div className="">
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-custom-color_6">Pavel Ryan Susanto</h1>
            </header>

            <p className="text-gray-300 leading-relaxed"> 
              I specialize in designing and building applications across mobile and web platforms, with a focus on functionality, performance, and user satisfaction. 
              I am passionate about the end-to-end development process conceptualizing ideas, writing clean code, and deploying finished products while ensuring 
              the highest standards of usability, scalability, and innovation.
            </p>

            <div className="flex flex-wrap items-center justify-between mt-6">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/images/homepage/profile.jpg"
                  alt="Pavel Ryan"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2 text-gray-300 my-10">
                <h2 className="text-2xl font-semibold mb-4 text-custom-color_6">
                  Mobile Application Developer and Web Developer
                </h2>
                <ul className="space-y-4">
                  <ListItem Icon={MapPin} value="West Jakarta, Indonesia" />
                  <ListItem Icon={User} value="20 Years Old" />
                  <ListItem Icon={GraduationCap} value="Undergraduate student in Computer Science @ BINUS University" />
                  <ListItem Icon={Mail} value="pavelryan146@gmail.com" isLink />
                </ul>
                <p className="mt-4">
                  Explore my portfolio to see my work and technical skills in action and also feel free to reach out for inquiries or collaboration opportunities to 
                  create impactful solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Second Part */}
          <div className="mx-auto md:mt-20">
            <h1 className="text-3xl font-bold text-white my-4">Skills</h1>
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