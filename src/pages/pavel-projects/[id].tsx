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
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
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