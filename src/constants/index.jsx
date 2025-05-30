import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";
import project01 from "../assets/project01.png";
import project001 from "../assets/project001.png";
import project0001 from "../assets/project0001.png";
import project00001 from "../assets/project00001.png";
import project02 from "../assets/project02.png";
import project002 from "../assets/project002.png";
import project0002 from "../assets/project0002.png";
import project00002 from "../assets/project00002.png";
import project000002 from "../assets/project000002.png";
import project0000002 from "../assets/project0000002.png";
import project03 from "../assets/project03.png";
import project003 from "../assets/project003.png";
import project0003 from "../assets/project0003.png";
import project00003 from "../assets/project00003.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiGithubLine,
  RiCodeLine,
  RiAmazonLine,
  RiBootstrapLine,
  RiBugLine,
  RiWordpressLine,
  RiPenNibLine,
  RiDatabase2Line,

} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Dishani Dilrukshi",
  role: "Full Stack Developer",
  subheading:
    "With 5 years of frontend and backend web developing , devops experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "MetaNexus – SaaS Website",
    description:
      "MetaNexus is a modern, fully responsive website built with React, Vite, and Tailwind CSS. It features a sleek UI suitable for SaaS, startups, or tech landing pages, including a responsive navbar, gradient hero section, video showcase, feature highlights, pricing plans, testimonials, and a footer. Enhanced with Lucide icons and deployed on Vercel.",
    techStack: ["React", "Lucid", "Tailwind css", "Vercel"],
    imageSrcs: [project1, project01, project001, project0001, project00001],
    link: "https://meta-nexus.vercel.app/",
  },

  // {
  //   id: 1,
  //   title: "E-commerce Website",
  //   description:
  //     "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
  //   techStack: ["React", "Node.js", "Express", "MongoDB"],
  //   imageSrcs: [project1],
  //   link: "https://example-ecommerce.com",
  // },
  {
    id: 2,
    title: "Efficient Healthcare Admin Platform",
    description:
      "A modern and efficient Clinic Management System designed to streamline patient records, appointments, billing, and more. Built with a user-friendly interface and robust features to enhance healthcare administration.",
    techStack: ["Python", "Django", "Bootstrap","Charts"],
    imageSrcs: [project2, project02, project002, project0002, project00002, project000002, project0000002],
    link: "https://github.com/DishaniD/HealthHaven_Clinic-management_system/tree/main",
  },
  //   {
  //   id: 2,
  //   title: "Social Media App",
  //   description:
  //     "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
  //   techStack: ["React", "Firebase", "Redux"],
  //   imageSrcs: [project2],
  //   link: "https://example-socialapp.com",
  // },
  {
    id: 3,
    title: "Italia – Modern Restaurant Website",
    description:
      "A responsive and animated restaurant website built with React, Tailwind CSS, and Framer Motion. Features include a video hero section, smooth scrolling, mobile navigation, and beautifully styled content sections.",
    techStack: ["React", "Tailwind CSS","Framer motion"],
    imageSrcs: [project3, project03, project003, project0003, project00003],
    link: "https://italia-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imageSrcs: [project2, project4, project6],
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imageSrcs: [project1, project4],
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imageSrcs: [project2, project5],
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },

// new

{
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-red-500" />,
  },
  {
    name: "GitHub",
    icon: <RiGithubLine className="text-white" />,
  },
  {
    name: "PHP",
    icon: <RiCodeLine className="text-purple-700" />, // substitute icon
  },
  {
    name: "AWS",
    icon: <RiAmazonLine className="text-orange-500" />,
  },

  {
    name: "Bootstrap 4",
    icon: <RiBootstrapLine className="text-indigo-500" />,
  },
  {
    name: "Jira",
    icon: <RiBugLine className="text-blue-700" />, // substitute icon
  },
  {
    name: "WordPress",
    icon: <RiWordpressLine className="text-blue-600" />,
  },
  {
    name: "Figma",
    icon: <RiPenNibLine className="text-pink-500" />, // substitute icon
  },
  {
    name: "SQL",
    icon: <RiDatabase2Line className="text-green-600" />,
  },
  {
    name: "OracleDB",
    icon: <RiDatabaseLine className="text-red-600" />,
  },

 





];

export const EXPERIENCES = [
  {
    yearRange: "2022 - Present",
    role: "Devops Engineer",
    company: "Dialog Axiata - Sri Lanka",
    description:
      "Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "PHP","MongoDB","AWS","Linux"],
  },
  {
    yearRange: "2019 - Present",
    role: "Frontend Developer and ui/ux designer",
    company: "Freelancer",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL","Python","Django","Figma"],
  },
  {
    yearRange: "2019 - 2022",
    role: "Support Analyst",
    company: "Global System Solution",
    description:
      " Perform code reviews and ensure adherence to coding standards and best practices.Troubleshoot and debug issues in web applications and provide timely resolutions.Collaborated with teams, including designers and product managers, to translate client requirements into technical specifications, ensuring project alignment with business objectives. Assisted in software QA processes, ensuring comprehensive testing of applications before deployment to production. ",
    techStack: ["Jira","Python", "Excel", "SQL"],
  },
  
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Technology",
    institution: "University Of Colombo",
    duration: "2018 - 2022",
    description:
      "Graduated with honors in Information Technology, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Certificate of QA Test Automation Training programme",
    institution: "Imperial College of Information Technology",
    duration: "2022 - 2023",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
