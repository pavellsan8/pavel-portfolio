import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

interface ProjectCardProps {
  id: number,
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({
    id,
    title,
    description,
    image,
  }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-custom-color_2 rounded-2xl shadow-lg p-4 hover:scale-100 transition-transform">
      <div 
        className="relative w-full h-[300px] overflow-hidden rounded-lg group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-[250px]">
          <Image 
            src={image} 
            alt={title} 
            className={`absolute w-full h-[500px] object-cover transition-transform duration-[0.7s] ease-linear ${
              isHovered ? 'translate-y-[-200px]' : 'translate-y-0'
            }`}
            width={400} 
            height={500}
            style={{ objectPosition: 'top' }}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
      {/* <Link href={`/pavel-projects/${id}`} className="inline-block mt-3"> */}
        <button className="bg-custom-color_5 text-white px-4 py-2 rounded-md hover:bg-custom-color_4 hover:shadow-lg transition duration-300">
          View Project →
        </button>
      {/* </Link> */}
    </div>
  );
}