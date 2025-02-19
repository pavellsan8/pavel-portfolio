import React from "react";

import { experiences } from "../../../data/homepage";

export default function ResumeSection() {
  return (
    <>
      <section id="resume" className="bg-custom-color_1 px-6 pt-14 md:px-14">
        <div className="p-4 md:p-3">
          <div className="w-full mx-auto">
            <h1 className="text-3xl font-bold text-white my-4">Resume</h1>
            <div className="h-1 w-16 bg-custom-color_5 mb-6"></div>
            <p className="text-gray-200 mb-12">
              Innovative and deadline-driven Developer with 2+ years of experience in creating and implementing mobile and web applications. Proficient in translating business requirements into technical solutions with a focus on user experience and performance.
            </p>

            <div className="grid md:grid-cols-12 gap-8">
              {["Education", "Professional Experience"].map((section) => (
                <div key={section} className="md:col-span-6 space-y-5">
                  {experiences
                    .filter((experience) => experience.section === section)
                    .map((experience, index) => (
                      <div key={index}>
                        <h2 className="text-2xl font-semibold mb-4">{experience.section}</h2>
                        {experience.details.map((detail, idx) => (
                          <div
                            className="relative pl-6 border-l-2 border-blue-500 space-y-4"
                            key={idx}
                          >
                            <div className="absolute -left-[11px] w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                            <h3 className="font-bold">{detail.title}</h3>
                            <p className="text-gray-500">{detail.duration}</p>
                            <p className="italic">{detail.company}</p>
                            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-400">
                              {detail.responsibilities.map((responsibility, resIdx) => (
                                <li key={resIdx}>{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}