import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    link,
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
            className={`absolute w-full h-[4z00px] object-cover transition-transform duration-[0.7s] ease-linear ${
              isHovered ? 'translate-y-[-200px]' : 'translate-y-0'
            }`}
            width={400} 
            height={500}
            style={{ objectPosition: 'top' }}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}