import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import archiveImg from "../assets/archive.png";
import prepsyncImg from "../assets/prepsync.png";
import foundrscoreImg from "../assets/foundrscore.png";
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
    url: "/Shreya_Chopra_Resume.pdf",
    icon: <IoMdDocument className="w-[22px] h-[22px]" />,
    name: "Resume",
  },
];

export const mainProjects = [
  {
    title: "PrepSync",
    description:
      "An AI interview prep generator that turns a job description and company URL into a structured, editable kit of questions, flashcards, and a study schedule. Powered by a multi-stage pipeline with a 3-provider LLM fallback (NVIDIA → Groq → Gemini) and a coverage check that maps every requirement to a question, with Better Auth (PBKDF2, Google OAuth) on a serverless Cloudflare Workers + D1 backend.",
    tags: ["Next.js", "TypeScript", "Cloudflare Workers", "D1", "Better Auth"],
    github: "https://github.com/shreyachopra03-ux/PrepSync",
    demo: "https://prep-sync-web.vercel.app/",
    image: prepsyncImg,
  },
  {
    title: "FoundrScore",
    description:
      "An AI startup-idea validator that scores ideas on 5 metrics and delivers a verdict, competitor analysis, and budget runway. Built on a multi-LLM router with automatic fallback (Groq → Gemini → Llama 3.1), Zod-validated LLM output, IP-hashed rate limiting, and an animated Framer Motion UI with a shareable PNG verdict card.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Groq", "Gemini API", "Zod"],
    github: "https://github.com/shreyachopra03-ux/FoundrScore",
    demo: "https://foundr-score.vercel.app/",
    image: foundrscoreImg,
  },
  {
    title: "Archive",
    description:
      "A full-stack media management platform built with the MERN stack and TypeScript across the entire pipeline. Features an asynchronous server-side video assembly pipeline using FFmpeg, secure authentication via Clerk, and a seamless media upload flow through Cloudinary, all wrapped in a premium archive-themed UI.",
    tags: ["MERN Stack", "TypeScript", "Cloudinary", "Clerk", "FFmpeg"],
    github: "https://github.com/shreyachopra03-ux/Timeline_Project",
    demo: "https://timeline-project-eosin.vercel.app/",
    image: archiveImg,
  },
];

export const otherProjects = [];
