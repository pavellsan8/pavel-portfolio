import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Calendar, User2, ArrowLeftIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { projectCard } from '../../data/data';

interface ProjectData {
  id: number;
  title: string;
  longDescription: string;
  imageSlider: string[];
  technologies: string[];
  date: string;
  role: string;
  features: string[];
  challenges: string[];
  githubUrl: string;
}

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('features');

  useEffect(() => {
    if (id) {
      const foundProject = projectCard.find((p) => p.id.toString() === id);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="mt-4 text-blue-400 text-center">Loading project...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/pavel-projects" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom-color_1 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <Link 
          href="/pavel-projects" 
          className="inline-flex items-center text-custom-color_7 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        <div className="bg-custom-color_2 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                effect="fade"
                navigation
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="w-full h-[700px]"
              >
                {project.imageSlider.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full overflow-hidden">
                      <div 
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'top',
                          animation: 'scrollBackground 15s linear infinite alternate'
                        }}
                      />
                      <div className="absolute inset-0 opacity-100" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full lg:w-3/5 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-5">
                  <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                  {project.githubUrl && project.githubUrl !== "none" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600"
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-gray-300 rounded-lg border border-gray-500 cursor-not-allowed opacity-60"
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </button>
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="italic">{project.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <User2 className="w-5 h-5 mr-2" />
                    <span className="italic">{project.role}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-custom-color_5 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
                  {project.longDescription}
                </p>
                <div className="space-y-8">
                  <div>
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setActiveSection('features')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          activeSection === 'features' 
                            ? 'bg-custom-color_5 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Key Features
                      </button>
                      <button
                        onClick={() => setActiveSection('challenges')}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          activeSection === 'challenges' 
                            ? 'bg-custom-color_5 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        Technical Challenges
                      </button>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeSection === 'features' ? (
                        <ul className="space-y-3">
                          {project.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start text-gray-300"
                            >
                              <div className="w-2 h-2 mt-2 mr-3 bg-custom-color_6 rounded-full" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start text-gray-300"
                            >
                              <div className="w-2 h-2 mt-2 mr-3 bg-custom-color_6 rounded-full" />
                              {challenge}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}