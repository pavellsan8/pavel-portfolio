import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Head from "next/head";

import ProjectCard from "../../components/project_card";
import ScrollTopButton from "../../components/scrolltop_button";
import { projectCard } from "../../data/data";
import { staggerContainer } from "../../data/animation";

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Pavel's Projects</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>

      <motion.section
        id="project-list"
        className="bg-custom-color_1 px-6 py-14 md:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-custom-color_4 to-custom-color_6 p-8 mb-12">
          <div className="relative z-10 animate-fadeIn">
            <Link href="/">
              <div className="inline-block">
                <motion.button 
                  className="flex items-center gap-2 bg-custom-color_6/20 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all mb-6 backdrop-blur-sm border border-white/10 shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="font-medium">Back to Home</span>
                </motion.button>
              </div>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Explore my portfolio of projects spanning web development, mobile apps, and design work.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCard.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard 
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </div>
          ))}
        </div>
        <ScrollTopButton sectionId="project-list" />
      </motion.section>
    </>
  );
}