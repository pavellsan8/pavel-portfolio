import React from "react";
import { motion, useInView } from "framer-motion";

import { experiences } from "../../data/data";
import { staggerContainer, fadeInUp, slideInFromRight } from "../../data/animation.js";

export default function ResumeSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.section
        ref={ref}
        id="resume"
        className="bg-custom-color_1 px-6 pt-14 md:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        animate={isInView? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="w-full mx-auto relative">
          {/* Download Button - Positioned at the top right */}
          <div className="absolute top-0 right-0">
            <motion.button
              variants={fadeInUp}
              className="flex items-center bg-custom-color_5 hover:bg-custom-color_4 text-white font-medium p-3 rounded-lg transition-colors duration-300"
              onClick={() => {
                fetch('/resume.pdf')
                  .then(response => response.blob())
                  .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Pavel Ryan Susanto_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    if (link.parentNode) {
                      link.parentNode.removeChild(link);
                    }
                    window.URL.revokeObjectURL(url);
                  });
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 md:mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              <span className="hidden md:inline">Download Resume</span>
            </motion.button>
          </div>

          {/* Original Content */}
          <motion.h1 variants={fadeInUp} className="text-3xl font-bold text-white my-4">
            Resume
          </motion.h1>
          <motion.div variants={fadeInUp} className="h-1 w-16 bg-custom-color_5 mb-6" />
          <motion.p variants={fadeInUp} className="text-gray-200 mb-12">
            Innovative and deadline-driven Developer with 2+ years of experience in creating and implementing mobile and web applications.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-12 gap-8"
            variants={staggerContainer}
          >
            {["Education", "Professional Experience"].map((section) => (
              <motion.div 
                key={section} 
                className="md:col-span-6 space-y-5"
                variants={slideInFromRight}
              >
                {experiences
                  .filter((experience) => experience.section === section)
                  .map((experience, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      custom={index}
                    >
                      <h2 className="text-2xl font-semibold mb-4">{experience.section}</h2>
                      <div className="relative border-l-2 border-blue-500 pl-6">
                        {experience.details.map((detail, idx) => (
                          <div
                            className="relative pb-8 last:pb-0"
                            key={idx}
                          >
                            <div className="absolute -left-8 top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                            <div className="space-y-2">
                              <h3 className="font-bold">{detail.title}</h3>
                              <p className="text-gray-500">{detail.duration}</p>
                              <p className="italic">{detail.company}</p>
                              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-400">
                                {detail.responsibilities.map((responsibility, resIdx) => (
                                  <li key={resIdx}>{responsibility}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}