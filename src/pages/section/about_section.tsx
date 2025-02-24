import React from "react";
import Image from "next/image";
import { MapPin, GraduationCap, User, Lightbulb } from "lucide-react";

import ListItem from "../../components/list_item_profile";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-custom-color_1 px-6 pt-14 md:px-14">
        <div className="p-4 md:p-3">
          <div className="">
            <header className="my-4">
              <h1 className="text-3xl font-bold text-custom-color_6">Pavel Ryan Susanto</h1>
            </header>

            <p className="text-gray-300 leading-relaxed"> 
            As a dedicated professional in web and mobile application development, I excel in designing and building solutions that prioritize functionality, 
            performance, and user satisfaction. With a passion for the end-to-end development process, I thrive on conceptualizing ideas, writing clean code, 
            and deploying polished products. My commitment to excellence ensures the highest standards of usability, scalability, and innovation in every 
            project I undertake.
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
                  Web Developer and Mobile Application Developer 
                </h2>
                <ul className="space-y-4">
                  <ListItem Icon={MapPin} value="West Jakarta, Indonesia" />
                  <ListItem Icon={User} value="20 Years Old" />
                  <ListItem Icon={GraduationCap} value="Undergraduate Mobile Application and Technology @ BINUS University" />
                  <ListItem Icon={Lightbulb} value={<i>"Every bug teaches a lesson. The key is to learn faster than you fail."</i>} />
                </ul>
                <p className="mt-4">
                  Explore my portfolio to see my work and technical skills in action and also feel free to reach out for inquiries or collaboration opportunities to 
                  create impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}