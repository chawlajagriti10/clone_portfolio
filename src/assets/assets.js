import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaJs, FaHtml5, FaCss3Alt, FaViacoin, FaVideo, FaBullhorn ,FaGithub, FaLinkedin, FaEnvelope, FaFileAlt} from 'react-icons/fa';

import profileImg from './profileImg.png';
import profileImg2 from './profileImg2.png';
import projectImg1 from '../assets/projectImg1.png';
import projectImg2 from '../assets/projectImg2.png';
import projectImg3 from '../assets/projectImg3.png';
import projectImg4 from '../assets/projectImg4.png';
import projectImg5 from '../assets/projectImg5.png';
import projectImg6 from '../assets/projectImg6.png';


export const assets = {
    profileImg,
    profileImg2,
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
};


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I enjoy transforming creative ideas into innovative digital solutions that solve real-world problems effectively.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write clean, efficient, and maintainable code that follows modern development standards and best practices.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    category: 'Frontend',
    icon: FaReact,
    description: 'I create responsive, modern, and interactive web pages using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap. I focus on clean design, fast loading times, and great user experiences across all devices.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS']
  },
  {
    title: 'Backend Development',
    category: 'Backend',
    icon: FaServer,
    description: 'I build server-side logic and understand core backend concepts using Node.js, Core Java, C, and C++. I work on writing logical code, handling data processing, and connecting APIs efficiently.',
    tags: ['Node.js', 'Java', 'C', 'C++']
  },
  {
    title: 'Database Management',
    category: 'Backend',
    icon: FaDatabase,
    description: 'I organize and manage relational databases using MySQL. I focus on creating structured data tables, writing clear SQL queries, and ensuring fast data storage and retrieval for web applications.',
    tags: ['MySQL']
  },
  {
    title: 'Graphic Design',
    category: 'Design',
    icon: FaPaintBrush,
    description: 'I design high-converting social media posts, website banners, posters, and brand graphics using Photoshop and Canva. I turn creative ideas into visually appealing marketing collateral.',
    tags: ['Photoshop', 'Canva']
  },
  {
    title: 'Video Editing',
    category: 'Design',
    icon: FaVideo,
    description: 'I edit short-form reels, promotional videos, and YouTube content using CapCut and Premiere Pro. I specialize in smooth transitions, color adjustment, sound sync, and engaging social video edits.',
    tags: ['CapCut', 'Premiere Pro']
  },
  {
    title: 'Digital Marketing & SEO',
    category: 'Marketing',
    icon: FaBullhorn,
    description: 'I optimize websites for Search Engine Optimization (SEO), manage WordPress and Shopify online stores, and run digital marketing campaigns to help businesses grow their online audience.',
    tags: ['SEO', 'AEO', 'GEO', 'WordPress', 'Shopify']
  }
];



export const projects = [
  {
    title: "Tic-Tac-Toe Game",
    category: "JavaScript",
    description: "A responsive Tic-Tac-Toe game with interactive win detection, status tracking, and restart functionality.",
    image: projectImg1,
    tech: ["JavaScript", "HTML", "CSS"],
    icons: [FaJs, FaHtml5, FaCss3Alt],
    demo: "https://tic-tac-toe-alpha-eight-87.vercel.app/",
    code: "https://github.com/chawlajagriti10/Tic-Tac-Toe",
  },
  {
    title: "Task Management App",
    category: "React",
    description: "TaskFlow is a responsive task management application built with React.js, enabling users to organize, prioritize, and track daily tasks through a clean dashboard.",
    image: projectImg2,
    tech: ["React", "JavaScript", "CSS", "HTML"],
    icons: [FaReact, FaCss3Alt, FaJs, FaHtml5],
    demo: "https://task-management-4z5seb4gf-jagriti10.vercel.app/",
    code: "https://github.com/chawlajagriti10/Task-Management-App",
  },
  {
    title: "Interview Assessment Portal",
    category: "JavaScript",
    description: "A responsive online interview assessment platform featuring timed MCQ tests, section navigation, and real-time score tracking.",
    image: projectImg3,
    tech: ["JavaScript", "HTML", "CSS"],
    icons: [FaJs, FaCss3Alt, FaHtml5],
    demo: "https://interview-asessment-portal.vercel.app/",
    code: "https://github.com/chawlajagriti10/Interview-Asessment-Portal",
  },
  {
    title: "ShopEase - E-commerce Website",
    category: "Fullstack",
    description: "A modern responsive e-commerce web application with product browsing, category filters, instant search, and cart functionality.",
    image: projectImg4,
    tech: ["JavaScript", "HTML", "CSS"],
    icons: [FaJs, FaHtml5, FaCss3Alt],
    demo: "https://ecommerce-website-eta-tan.vercel.app/",
    code: "https://github.com/chawlajagriti10/Ecommerce-Website",
  },
  {
    title: "Weather App",
    category: "JavaScript",
    description: "A dynamic weather application that fetches real-time forecast and meteorological data using external weather APIs.",
    image: projectImg5,
    tech: ["JavaScript", "HTML", "CSS", "API"],
    icons: [FaJs, FaCss3Alt, FaHtml5],
    demo: "https://weather-app-kappa-ten-92.vercel.app/",
    code: "https://github.com/chawlajagriti10/Weather-App",
  },
  {
    title: "Currency Converter",
    category: "JavaScript",
    description: "An instant currency converter retrieving real-time global exchange rates using dynamic API endpoints.",
    image: projectImg6,
    tech: ["JavaScript", "HTML", "CSS", "API"],
    icons: [FaJs, FaHtml5, FaCss3Alt],
    demo: "https://currency-converter-app-two-sable.vercel.app/",
    code: "https://github.com/chawlajagriti10/Currency-Converter-App",
  }
];


export const workData = [
  {
    role: "Junior Developer Intern",
    company: "Riot Ecommerce Solutions (Marketing Team)",
    duration: "Feb 2026 - Present",
    responsibilities: [
      "Building and maintaining responsive web pages using HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Fixing UI/UX issues and ensuring cross-browser and mobile device compatibility.",
      "Collaborating with the marketing team to design graphic assets and edit promotional videos using Photoshop and Premiere Pro."
    ],
    description:
      "Working as a Junior Developer Intern in the Marketing Team. Building responsive web pages, fixing UI issues, designing web banners, editing videos, and supporting marketing campaigns using React, Tailwind CSS, Bootstrap, Photoshop, and Premiere Pro.",
    color: "blue"
  }
];

 
