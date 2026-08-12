import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import archiveImg from "../assets/archive.png";
import sandburgsImg from "../assets/sandburgs.png";
import flixverseImg from "../assets/flixVerse.png";
export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React Js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "LangChain",
];

export const social_links = [
  {
    url: "https://github.com/shreyachopra03-ux",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/shreya-chopra03/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://x.com/chopra_shreya03",
    icon: <FaXTwitter className="w-[22px] h-[22px]" />,
    name: "Twitter",
  },
  {
    url: "/src/assets/Shreya_Chopra_Resume.pdf",
    icon: <IoMdDocument className="w-[22px] h-[22px]" />,
    name: "Resume",
  },
];

export const mainProjects = [
  {
    title: "Archive",
    description:
      "A full-stack media management platform built with the MERN stack and TypeScript across the entire pipeline. Features an asynchronous server-side video assembly pipeline using FFmpeg, secure authentication via Clerk, and a seamless media upload flow through Cloudinary, all wrapped in a premium archive-themed UI.",
    tags: ["MERN Stack", "TypeScript", "Cloudinary", "Clerk", "FFmpeg"],
    github: "https://github.com/shreyachopra03-ux/Timeline_Project",
    demo: "https://timeline-project-eosin.vercel.app/login",
    image: archiveImg,
  },
  {
    title: "Sandburgs",
    description:
      "A high-performance food delivery web app built with React and TypeScript for type safety and scalable architecture. Uses Redux Toolkit for centralized state management and real-time cart updates, with lazy loading and custom hooks to significantly cut initial load times.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/shreyachopra03-ux/Namaste-React-Series",
    demo: "https://namaste-react-series-pi.vercel.app/",
    image: sandburgsImg,
  },
  {
    title: "FlixVerse",
    description:
      "A movie discovery platform built with React and the TMDB API, featuring dynamic data fetching and horizontal scrolling. Integrates the OpenAI GPT API for personalized AI movie recommendations, with Firebase powering real-time authentication.",
    tags: ["React", "Firebase", "TMDB API", "OpenAI GPT API", "Tailwind CSS"],
    github: "https://github.com/shreyachopra03-ux/netflix_project",
    demo: "https://netflixproject-mu.vercel.app/",
    image: flixverseImg,
  },
];

export const otherProjects = [];
