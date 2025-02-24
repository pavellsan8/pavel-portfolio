import React from "react";
import { useState, useEffect } from 'react';
import { Mail, PhoneIcon, LinkedinIcon, GithubIcon, InstagramIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { staggerContainer, fadeInUp, slideInFromRight } from "../../data/animation.js";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
};

export default function ContactPage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isVisible, setIsVisible] = useState(false);
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  useEffect(() => {
    if (status.type) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setStatus({ type: null, message: '' });
        }, 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    console.log('Form submitted:', formData);
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="bg-custom-color_1 px-6 py-14 md:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="p-4 md:p-3">
        <div className="mx-auto">
          <div className="w-full mx-auto">
            <motion.h1 variants={fadeInUp} className="text-3xl font-bold text-white my-4">
              Contact
            </motion.h1>
            <motion.div variants={fadeInUp} className="h-1 w-16 bg-custom-color_5 mb-6" />
            <motion.p variants={fadeInUp} className="text-gray-200 mb-12">
              Feel free to reach out for discussions on projects, collaborations, or anything tech-related.
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div 
              variants={slideInFromRight}
              className="bg-custom-color_2 p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-custom-color_3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color_5"
                    placeholder='Enter your name'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-custom-color_3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color_5"
                    placeholder='Enter your email address'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-custom-color_3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color_5"
                    placeholder='Enter your message'
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-custom-color_5 text-white py-3 rounded-lg hover:bg-custom-color_4 transition duration-300"
                >
                  Send Message
                </button>

                {status.type && (
                  <div
                    className={`mt-4 p-4 rounded-lg transition-all duration-300 ease-in-out transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    } ${
                      status.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              className="p-8 rounded-2xl bg-custom-color_2 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-8 text-center text-custom-color_7 bg-clip-text">
                Connect with Me
              </h2>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <a 
                  href="mailto:pavel.susanto@gmail.com" 
                  className="group block p-4 rounded-lg bg-custom-color_3 hover:bg-custom-color_4 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-custom-color_2 rounded-full group-hover:bg-custom-color_5 transition-colors">
                      <Mail className="w-6 h-6 text-custom-color_5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Email</span>
                      <span className="text-white group-hover:text-white">pavel.susanto@gmail.com</span>
                    </div>
                  </div>
                </a>
                <a 
                  href="tel:+6281287737286" 
                  className="group block p-4 rounded-lg bg-custom-color_3 hover:bg-custom-color_4 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-custom-color_2 rounded-full group-hover:bg-custom-color_5 transition-colors">
                      <PhoneIcon className="w-6 h-6 text-custom-color_5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Phone</span>
                      <span className="text-white group-hover:text-white">+62 812 8773 7286</span>
                    </div>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/pavel-ryan-susanto-b29361277/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg bg-custom-color_3 hover:bg-custom-color_4 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-custom-color_2 rounded-full group-hover:bg-custom-color_5 transition-colors">
                      <LinkedinIcon className="w-6 h-6 text-custom-color_5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">LinkedIn</span>
                      <span className="text-white group-hover:text-white">Connect and grow professionally</span>
                    </div>
                  </div>
                </a>
                <a 
                  href="https://github.com/pavellsan8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg bg-custom-color_3 hover:bg-custom-color_4 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-custom-color_2 rounded-full group-hover:bg-custom-color_5 transition-colors">
                      <GithubIcon className="w-6 h-6 text-custom-color_5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">GitHub</span>
                      <span className="text-white group-hover:text-white">Explore my projects here</span>
                    </div>
                  </div>
                </a>
                <a 
                  href="https://instagram.com/pavellsann" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg bg-custom-color_3 hover:bg-custom-color_4 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-custom-color_2 rounded-full group-hover:bg-custom-color_5 transition-colors">
                      <InstagramIcon className="w-6 h-6 text-custom-color_5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Instagram</span>
                      <span className="text-white group-hover:text-white">Follow my journey daily</span>
                    </div>
                  </div>
                </a>
              </motion.div> 
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}