import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Calendar, Tag, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {projectCard} from "../../data/data";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageSlider: string[];
  technologies: string[];
  date: string;
  features: string[];
  challenges: string[];
}

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject = projectCard.find((p) => p.id.toString() === id);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Project Not Found</h1>
          <Link href="/pavel-projects" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom-color_1 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-5">
        <Link href="/pavel-projects" className="inline-flex items-center text-custom-color_7 hover:text-gray-300 mb-8 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-custom-color_1 shadow-lg overflow-hidden flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5 relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              className="w-full rounded-lg"
              style={{ height: '500px' }}
            >
              {project.imageSlider.map((image, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={image} 
                    alt={`Project Image ${index + 1}`} 
                    className="image-slider w-full h-full object-cover object-top"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full md:w-3/5 md:px-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-custom-color_6">{project.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mb-6">
              <div className="flex items-center text-custom-color_7">
                <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                <span><i>{project.date}</i></span>
              </div>
              <div className="flex items-center text-custom-color_7">
                <Tag className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-custom-color_5 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose max-w-none flex-grow">
              <p className="text-custom-color_7 mb-8">{project.description}</p>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-col">
                  <h2 className="text-xl font-semibold text-custom-color_6 mb-4">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-custom-color_7">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex-col">
                  <h2 className="text-xl font-semibold text-custom-color_6 mb-4">Technical Challenges</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-custom-color_7">{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}