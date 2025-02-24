import React from "react";
import Image from "next/image";
import { MapPin, GraduationCap, User, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ListItem from "../../components/list_item_profile";

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      id="about" 
      className="bg-custom-color_1 px-6 pt-14 md:px-14"
    >
      <div className="p-4 md:p-3">
        <div className="">
          <motion.header 
            className="my-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-custom-color_6">Pavel Ryan Susanto</h1>
          </motion.header>

          <motion.p 
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          > 
            As a dedicated professional in web and mobile application development, I excel in designing and building solutions that prioritize functionality, 
            performance, and user satisfaction. With a passion for the end-to-end development process, I thrive on conceptualizing ideas, writing clean code, 
            and deploying polished products. My commitment to excellence ensures the highest standards of usability, scalability, and innovation in every 
            project I undertake.
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
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h2 
                className="text-2xl font-semibold mb-4 text-custom-color_6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Web Developer and Mobile Application Developer 
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
                  { Icon: User, value: "20 Years Old" },
                  { Icon: GraduationCap, value: "Undergraduate Mobile Application and Technology @ BINUS University" },
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
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Explore my portfolio to see my work and technical skills in action and also feel free to reach out for inquiries or collaboration opportunities to 
                create impactful solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}