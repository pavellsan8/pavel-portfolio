import React from "react";
import Image from "next/image";
import { MapPin, GraduationCap, User, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";

import ListItem from "../../components/list_item_profile";
import { staggerContainer, fadeInDown, fadeInUp, slideInFromRight } from "../../data/animation.js";

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="bg-custom-color_1 px-6 pt-14 md:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      animate={isInView? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="p-4 md:p-3">
        <div className="">
          <motion.header 
            className="my-4"
            variants={fadeInDown}
          >
            <h1 className="text-3xl font-bold text-custom-color_6">Pavel Ryan Susanto</h1>
          </motion.header>
          <motion.p 
            className="text-gray-300 leading-relaxed"
            variants={fadeInUp}
          > 
            As a Fullstack Developer, I enjoy building and improving applications that provide both reliable functionality and a seamless user experience. 
            I focus on ensuring that frontend implementations align well with business needs, data flows, and expected UI behavior, while also handling backend 
            processes with strong problem-solving and critical thinking approaches. I am passionate about develop ing scalable and maintainable solutions, 
            continuously learning, and delivering impactful results through efficient and thoughtful development practices.
          </motion.p>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/homepage/profile.jpg"
                alt="Pavel Ryan"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-gray-300 my-10"
              variants={slideInFromRight}
            >
              <motion.h2 
                className="text-2xl font-semibold mb-4 text-custom-color_6"
                variants={fadeInUp}
              >
                Application Developer
              </motion.h2>
              <motion.ul 
                className="space-y-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  },
                  hidden: {
                    opacity: 0
                  }
                }}
              >
                {[
                  { Icon: MapPin, value: "West Jakarta, Indonesia" },
                  { Icon: User, value: "21 Years Old" },
                  { Icon: GraduationCap, value: "Graduated in Mobile Application and Technology from BINUS University" },
                  { Icon: Lightbulb, value: <i>"Every bug teaches a lesson. The key is to learn faster than you fail."</i> }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.5 }
                      },
                      hidden: { 
                        opacity: 0, 
                        x: -50 
                      }
                    }}
                  >
                    <ListItem Icon={item.Icon} value={item.value} />
                  </motion.div>
                ))}
              </motion.ul>
              <motion.p 
                className="mt-4"
                variants={fadeInUp}
              >
                Explore my portfolio to see my work and technical skills in action and also feel free to reach out for inquiries or collaboration opportunities to 
                create impactful solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}