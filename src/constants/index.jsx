import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";
import project01 from "../assets/project010.jpeg";
import project001 from "../assets/project001.jpeg";
import project0001 from "../assets/project0001.jpeg";
import project00001 from "../assets/project00001.jpeg";
import project02 from "../assets/project02.png";
import project002 from "../assets/project002.png";
import project00002 from "../assets/project00002.png";
import project000002 from "../assets/project000002.png";
import project0000002 from "../assets/project0000002.png";
import project03 from "../assets/project03.jpeg";
import project003 from "../assets/project003.jpeg";
import project0003 from "../assets/project0003.jpeg";
import project00003 from "../assets/project00003.jpeg";
import r1 from "../assets/Homepage.png";
import r2 from "../assets/property details page.png";
import r3 from "../assets/property listing page.png";
import r4 from "../assets/user dashboard.png";
import r5 from "../assets/Agent profile page.png";
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
  RiBarChartLine,
  RiFlowChart,
  RiServerLine,
  RiBrainLine,
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
  RiCodeSLine,
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
  role: "Data Engineer & Full Stack Developer",
  subheading:
    "4+ years of experience building ETL pipelines, data warehouses, and analytics solutions — combined with strong full-stack development skills. Passionate about open source and making complex data accessible.",
};

export const PROJECTS = [
  {
    id: 0,
    title: "Google Drive to YouTube Automation",
    description:
      "Python automation tool that bulk uploads videos from Google Drive to YouTube with crash recovery, duplicate detection, and daily upload limit handling. Uses Google Drive API v3 and YouTube Data API v3. Runs fully in Google Colab with JSON-based progress tracking and recursive folder processing.",
    techStack: ["Python", "Google Drive API", "YouTube API", "Google Colab"],
    imageSrcs: [project2],
    link: "https://github.com/DishaniD/youtube-drive-uploader",
  },
  {
    id: 1,
    title: "SQL Data Warehouse Project",
    description:
      "End-to-end modern data warehouse built with SQL Server, covering the complete data engineering workflow — data ingestion, ETL process, data modeling using star schema, and analytics. Demonstrates production-grade data engineering patterns.",
    techStack: ["SQL Server", "ETL", "Data Modeling", "Star Schema", "Analytics"],
    imageSrcs: [project2],
    link: "https://github.com/DishaniD/sql-data-warehouse-project",
  },
  {
    id: 2,
    title: "GlobalPulse – AI News Aggregator",
    description:
      "Live AI-powered news aggregator that ingests real-time RSS feeds, rewrites articles using OpenAI GPT-4o, generates images with DALL-E 3, and stores everything in Supabase. Features automated content pipelines and OG image scraping.",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "OpenAI GPT-4o", "DALL-E 3"],
    imageSrcs: [project2],
    link: "https://globalpulse-two.vercel.app/",
  },
  {
    id: 3,
    title: "Efficient Healthcare Admin Platform",
    description:
      "A modern and efficient Clinic Management System designed to streamline patient records, appointments, billing, and more. Built with a user-friendly interface and robust features to enhance healthcare administration.",
    techStack: ["Python", "Django", "Bootstrap", "Charts"],
    imageSrcs: [project2, project02, project002, project00002, project000002, project0000002],
    link: "https://github.com/DishaniD/HealthHaven_Clinic-management_system/tree/main",
  },
  {
    id: 4,
    title: "MetaNexus – SaaS Website",
    description:
      "MetaNexus is a modern, fully responsive website built with React, Vite, and Tailwind CSS. It features a sleek UI suitable for SaaS, startups, or tech landing pages, including a responsive navbar, gradient hero section, video showcase, feature highlights, pricing plans, testimonials, and a footer. Enhanced with Lucide icons and deployed on Vercel.",
    techStack: ["React", "Lucid", "Tailwind css", "Vercel"],
    imageSrcs: [project1, project01, project001, project0001, project00001],
    link: "https://meta-nexus.vercel.app/",
  },
  {
    id: 5,
    title: "Italia – Modern Restaurant Website",
    description:
      "A responsive and animated restaurant website built with React, Tailwind CSS, and Framer Motion. Features include a video hero section, smooth scrolling, mobile navigation, and beautifully styled content sections.",
    techStack: ["React", "Tailwind CSS", "Framer motion"],
    imageSrcs: [project3, project03, project003, project0003, project00003],
    link: "https://italia-sigma.vercel.app/",
  },
  {
    id: 6,
    title: "Real Estate Website",
    description:
      "This update adds user profiles and property listings to our real estate platform. Users can now create accounts, manage their profiles, and post listings with details like property type, price, and location. This makes it easy for users to showcase properties and for buyers to find their perfect home.",
    techStack: ["React", "MongoDB", "Tailwind CSS", "Framer motion"],
    imageSrcs: [r1, r2, r3, r4, r5],
    link: "#",
  },
  {
    id: 7,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imageSrcs: [project5, project6, project1],
    link: "https://example-taskapp.com",
  },
  {
    id: 8,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imageSrcs: [project6, project1, project2],
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  { name: "Python", icon: <RiCodeSLine className="text-yellow-400" /> },
  { name: "SQL / PL-SQL", icon: <RiDatabase2Line className="text-blue-400" /> },
  { name: "ETL Pipelines", icon: <RiFlowChart className="text-green-400" /> },
  { name: "Power BI", icon: <RiBarChartLine className="text-yellow-500" /> },
  { name: "AWS (EC2 / S3)", icon: <RiAmazonLine className="text-orange-500" /> },
  { name: "HTML5", icon: <RiHtml5Line className="text-orange-600" /> },
  { name: "CSS3", icon: <RiCss3Line className="text-blue-500" /> },
  { name: "JavaScript", icon: <RiJavascriptLine className="text-yellow-500" /> },
  { name: "React", icon: <RiReactjsLine className="text-blue-400" /> },
  { name: "Node.js", icon: <RiNodeTree className="text-green-500" /> },
  { name: "MongoDB", icon: <RiDatabaseLine className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <RiCodeSSlashLine className="text-teal-400" /> },
  { name: "GraphQL", icon: <RiGitBranchLine className="text-pink-400" /> },
  { name: "Git / GitHub", icon: <RiGithubLine className="text-white" /> },
  { name: "Shell Scripting", icon: <RiServerLine className="text-gray-300" /> },
  { name: "AI APIs", icon: <RiBrainLine className="text-pink-400" /> },
  { name: "PHP", icon: <RiCodeLine className="text-purple-700" /> },
  { name: "Bootstrap 4", icon: <RiBootstrapLine className="text-indigo-500" /> },
  { name: "Jira", icon: <RiBugLine className="text-blue-700" /> },
  { name: "WordPress", icon: <RiWordpressLine className="text-blue-600" /> },
  { name: "Figma", icon: <RiPenNibLine className="text-pink-500" /> },
];

export const EXPERIENCES = [
  {
    yearRange: "Nov 2022 – 2024",
    role: "Data Engineer",
    company: "Dialog Axiata PLC – Sri Lanka",
    description:
      "Built and maintained ETL pipelines and automated reporting systems using Python and PL/SQL. Designed and ran the monthly International A2P/P2P SMS wholesale bill run. Built Power BI dashboards for monthly revenue tracking. Performed CDR analysis on large production databases for dispute resolution.",
    techStack: ["Python", "PL/SQL", "ETL", "Power BI", "Shell Script", "Oracle DB"],
  },
  {
    yearRange: "Jan 2019 – Oct 2022",
    role: "Data Analyst",
    company: "Global System Solution – Sri Lanka",
    description:
      "Analyzed large retail datasets to deliver actionable insights on shelf availability, inventory, and product placement. Developed and maintained dashboards and data models using Power BI and Tableau. Implemented data validation processes to ensure data quality across reporting pipelines.",
    techStack: ["Python", "SQL", "Power BI", "Tableau", "Excel", "CRM"],
  },
  {
    yearRange: "Aug 2018 – Dec 2018",
    role: "Demonstrator",
    company: "Earth University – Sri Lanka",
    description:
      "Delivered practical sessions on Programming and Multimedia subjects. Guided students in hands-on learning and collaborated with faculty on educational materials.",
    techStack: ["Python", "Programming"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Technology",
    institution: "University of Colombo, Sri Lanka",
    duration: "2018 – 2022",
    description:
      "Studied Information Technology with focus on data systems, algorithms, and software engineering. Built strong foundations in database design, programming, and system architecture.",
  },
  {
    id: 2,
    degree: "Certificate in QA Test Automation",
    institution: "Imperial College of Information Technology",
    duration: "2022 – 2023",
    description:
      "Completed training in software quality assurance and test automation processes.",
  },
  {
    id: 3,
    degree: "Cisco Certified Network Associate (CCNA)",
    institution: "Vibernet Academy",
    duration: "2021",
    description:
      "Earned CCNA certification covering networking fundamentals, routing, switching, and infrastructure.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with Dishani was a game-changer. Her expertise in data engineering and development helped us build reliable pipelines and dashboards that our team actually uses every day.",
  image: personImage,
};
