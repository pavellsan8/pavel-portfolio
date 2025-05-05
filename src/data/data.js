export const hardSkills = [
  { name: "Flutter", percentage: 73 },
  { name: "Flask", percentage: 87 },
  { name: "React", percentage: 76 },
  { name: "Django", percentage: 84 },
  { name: "Next.js", percentage: 71 },
  { name: "Git", percentage: 88 },
  { name: "Bootstrap", percentage: 88 },
  { name: "Tailwind CSS", percentage: 81 },
  { name: "PosgreSQL", percentage: 86 },
  { name: "Oracle SQL", percentage: 83 },
];

export const softSkills = [
  { 
    title: "Problem Solving", 
    description: "Strong analytical and debugging skills", 
  },
  { 
    title: "Time Management", 
    description: "Efficient project planning and delivery", 
  },
  { 
    title: "Team Collaboration", 
    description: "Experience in agile development teams",
  },
  { 
    title: "Adaptability", 
    description: "Easily adapt to project requirements", 
  },
]

export const projects = [
  { 
    title: "Japfa Innovation", 
    description: "Django, Bootstrap, PostgreSQL, OpenAI" 
  },
  { 
    title: "IMEXS Dashboard", 
    description: "Django, Tailwind CSS, Flask, Oracle SQL" 
  },
]

export const experiences = [
  {
    section : "Education",
    details : [
      {
        title: "BACHELOR OF COMPUTER SCIENCE",
        duration: "2021 - Present",
        company: "BINUS University, Jakarta",
        responsibilities: [
          "Focusing on Mobile Application development on modern development practices",
          "Optimize application performance and implement best practices in mobile development",
        ],
      },
    ]
  },
  {
    section : "Professional Experience",
    details : [
      {
        title: "APPLICATION DEVELOPER INTERN",
        duration: "2024 - 2025",
        company: "PT. Japfa Comfeed Indonesia, Tbk",
        responsibilities: [
          "Collaborate with UI/UX designers to implement responsive and intuitive interfaces",
          "Enhanced features in the 'Japfa Innovation' web application for production readiness",
          "Implemented new features in Admin and updated the interface in the JLTC application",
          "Optimize application performance and implement best practices in IMEXS Dashboard",
          "Manage backend integration and implement RESTful APIs in IMEXS application",
        ],  
      },
    ]
  },
];

export const projectCard = [
  {
    id: 1,
    title: "Serene",
    description: "Serene is a comprehensive mental health mobile application designed to assist users  maintaining their mental well-being. It offers engaging book reading experiences, soothing calming music, guided relaxation videos, and interactive chatbot consultations.",
    longDescription: "Serene is a mental health mobile application designed to support users in maintaining and improving their mental well-being. The app offers a variety of features, including access to a curated collection of relaxing books, calming music tailored for relaxation, guided videos for meditation and stress relief, and an AI-powered chatbot consultation for personalized advice and guidance.\n\nWith a user-friendly interface, Serene makes it easy for users to find solutions tailored to their needs, whether to manage stress, improve sleep quality, or simply create moments of calm in their daily lives. The application is designed to be a reliable companion on the journey toward better mental health and overall well-being.",    
    image: "/images/project/serene/serene_2.jpg",
    imageSlider: [
      "/images/project/serene/serene_1.jpg",
      "/images/project/serene/serene_2.jpg",
      "/images/project/serene/serene_3.jpg",
    ],
    technologies: [
      "Flutter",
      "Flask",
      "PostgreSQL",
      "OpenAI", 
    ],
    date: "Under Development",
    role: "Frontend & Backend",
    features: [
      "Book Reading - Access a curated collection of books to relax and unwind.",
      "Calming Music - Listen to soothing music designed to promote relaxation and better sleep.",
      "Relaxation Video - Watch guided videos for meditation and stress relief.",
      "Chatbot Consultation - Engage with an AI-powered chatbot for personalized sleep and relaxation advice.",
    ],
    challenges: [
      "Managing Diverse Content - Integrating and handling various content types like books, music, videos, and chatbots.",
      "Consistent User Experience - Ensuring a seamless and intuitive interface across all features and devices.",
      "Personalization & AI - Delivering tailored content and integrating AI-powered consultations effectively.",
      "Real-Time Sync - Ensuring instant updates and smooth synchronization of content, music, and videos."
    ],    
  },
  {
    id: 2,
    title: "Japfa Innovation",
    description: "Japfa Innovation is a content publishing platform designed for employees to document and share innovations developed within the company. The platform allows users to create articles using predefined templates, customize content, and publish innovations for company-wide visibility.",
    longDescription: "Japfa Innovation is a content publishing platform designed for employees to document and share innovations developed within the company. The platform allows users to create articles using predefined templates, customize content, and publish innovations for company-wide visibility. \n\nThis platform enables employees to submit innovation articles in a structured format, ensuring that ideas are well-documented and easily accessible. Once an article is published, it becomes visible exclusively to all employees within the company, fostering a collaborative environment where team members can exchange ideas and learn from each other's innovations. The primary goal of Japfa Innovation is to encourage knowledge sharing, drive continuous improvement, and showcase the latest innovations that contribute to the company’s growth and efficiency.",
    image: "/images/project/japfa_inno/japfa_inno_1.jpg",
    imageSlider: [
      "/images/project/japfa_inno/japfa_inno_1.jpg",
      "/images/project/japfa_inno/japfa_inno_2.jpg",
      "/images/project/japfa_inno/japfa_inno_3.jpg",
    ],
    technologies: [
      "Django",
      "Bootstrap",
      "PostgreSQL",
      "OpenAI", 
    ],
    date: "February 2024",
    role: "Frontend & Backend",
    features: [
      "Upload Data or Fill Out Forms - Uploading data or filling out project forms to be converted into articles.",
      "Article Template Selection - Choosing from predefined article templates, only needing to input the text to be displayed.",
      "Efficient Article Creation Process - The system automatically formats the entered text into the selected template.",
      "Responsive Design - A user-friendly interface accessible across various devices.",
    ],
    challenges: [
      "Handling Large Data Sets - Optimizing queries and indexing for efficient data management.",
      "Dynamic Template Rendering - Ensuring seamless content formatting across templates.",
      "Real-Time Content Processing - Generating and previewing articles instantly.",
      "Integration with AI Features (OpenAI) - Handling AI-powered translation text suggestions effectively.",
    ],
  },
  {
    id: 3,
    title: "IMEXS Dashboard",
    description: "IMEXS Dashboard is a real-time production monitoring system that provides a comprehensive view of the entire production process. This dashboard aggregates data from various stages of production, including process orders, stations, and process IDs, enabling better visibility and decision-making.",
    longDescription: "IMEXS Dashboard is a real-time production monitoring system that provides a comprehensive view of the entire production process. This dashboard aggregates data from various stages of production, including process orders, stations, and process IDs, enabling better visibility and decision-making. The dashboard features interactive graphs and performance reports, allowing users to analyze production trends, track efficiency, and identify potential issues. \n\nIts primary goal is to enhance production efficiency, minimize downtime, and quickly detect anomalies within the manufacturing process. By providing real-time insights, the system helps production teams and management make informed decisions and take proactive measures to improve overall operational performance. IMEXS Dashboard is accessible to all personnel in the production department as well as management, ensuring that critical production data is available to those who need it. This broad accessibility fosters better collaboration between teams and enables a more responsive approach to optimizing production workflows.",
    image: "/images/project/mes_report/mes_report_1.jpg",
    imageSlider: [
      "/images/project/mes_report/mes_report_1.jpg",
      "/images/project/mes_report/mes_report_2.jpg",
      "/images/project/mes_report/mes_report_3.jpg",
    ],
    technologies: [
      "Django",
      "Flask",
      "Tailwind CSS",
      "Oracle SQL", 
    ],
    date: "September 2024",
    role: "Backend",
    features: [
      "Process Monitoring - Track the status of process orders, stations, and process IDs in real-time.",
      "Accurate Data Display - Ensures reliable and up-to-date information for decision-making.",
      "Intuitive UI Design - A visually appealing and user-friendly interface.",
      "Ease of Use - Simple navigation and functionality for seamless user experience.",
    ],
    challenges: [
      "Complex Table Structure - Managing intricate database relationships and logic.",
      "API Performance Optimization - Ensuring fast and efficient data retrieval.",
      "Handling Large Datasets - Optimizing queries and processing for scalability.",
      "Real-Time Data Synchronization – Keeping displayed information up to date without excessive API calls.",
    ],
  },
  {
    id: 4,
    title: "SleepEz",
    description: "SleepEz is a web-based application designed to help users improve their sleep quality through a combination of relaxation techniques and informative content. The platform provides features such as calming music, guided sleep videos, and curated articles containing tips and tricks for better sleep.",
    longDescription: "SleepEz is a web-based application designed to help users improve their sleep quality through a combination of relaxation techniques and informative content. The platform provides features such as calming music, guided sleep videos, and curated articles containing tips and tricks for better sleep. \nThe primary goal of SleepEz is to promote relaxation and assist users in overcoming sleep-related issues such as insomnia, restless sleep, or difficulty falling asleep. By offering scientifically backed relaxation methods, the platform helps users establish healthier sleep routines and improve overall well-being. \n\nWith a user-friendly interface, SleepEz ensures that individuals can easily access soothing soundscapes, meditation guides, and expert advice tailored to their needs. Whether users seek a peaceful environment for winding down or structured guidance for better sleep hygiene, the platform provides personalized solutions to enhance sleep quality effectively.",
    image: "/images/project/sleep_ez/sleep_ez_1.jpg",
    imageSlider: [
      "/images/project/sleep_ez/sleep_ez_1.jpg",
      "/images/project/sleep_ez/sleep_ez_2.jpg",
      "/images/project/sleep_ez/sleep_ez_3.jpg",
    ],
    technologies: [
      "React",
      "Bootstrap",
      "Spotify API",
    ],
    date: "February 2024",
    role: "Frontend & Backend",
    features: [
      "Engaging Sleep Content - Provides tips & tricks, soothing music, and relaxing videos to improve sleep quality.",
      "Offline Mode - Allows users to download music or videos for offline playback.",
    ],
    challenges: [
      "Spotify API Integration - Handling authentication, data fetching, and playback control smoothly.",
      "Content Streaming Optimization - Ensuring seamless audio and video playback with minimal buffering.",
      "Cross-Platform Compatibility –-Maintaining a consistent experience across mobile and web versions.",
    ],
  },
];