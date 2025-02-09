import React from "react";
import Image from "next/image";
import { Mail, MapPin, GraduationCap, User } from "lucide-react";

import ListItem from "../../../components/list_item_profile";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-custom-blue_1 p-6 md:p-14">
        <div className="p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-custom-blue_7">About Me</h1>
          </header>

          <p className="text-gray-300 leading-relaxed"> 
            All right let’s do this one more time, my name is Pavel Ryan Susanto I’m an undergraduate student of Mobile Application and Technology at BINUS University.
            As an application developer, I specialize in designing and building applications across mobile and web platforms, with a focus on functionality, performance, 
            and user satisfaction. From creating intuitive UI/UX designs to implementing scalable back-end solutions, I am dedicated to delivering applications that are 
            both visually appealing and technically reliable. I am passionate about the end-to-end development process—conceptualizing ideas, writing clean code, and 
            deploying finished products while ensuring that every project meets the highest standards of usability, scalability, and innovation.
          </p>

          <div className="flex flex-wrap items-start justify-between mt-6">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/homepage/profile.jpg"
                alt="Pavel Ryan"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="w-full md:w-1/2 text-gray-300 mt-6 md:mt-0 md:pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-custom-blue_7">
                Mobile Application Developer and Web Developer
              </h2>
              <ul className="space-y-4">
                <ListItem Icon={MapPin} value="West Jakarta, Indonesia" />
                <ListItem Icon={User} value="20 Years Old" />
                <ListItem Icon={GraduationCap} value="Undergraduate student in Computer Science" />
                <ListItem Icon={Mail} value="pavelryan146@gmail.com" isLink />
              </ul>
              <p className="mt-4">
                Explore my portfolio to see my work and technical skills in action and also feel free to reach out for inquiries or collaboration opportunities to 
                create impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}