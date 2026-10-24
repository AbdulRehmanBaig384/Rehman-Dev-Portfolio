import type { StaticImageData } from "next/image";
import mathani from "../images/mathani.png";
import postautopilot from "../images/postautopilot.png";
import studysync from "../images/StudySync.png";
import shopease from "../images/shopease.png";
import voicetodo from "../images/voiceTodo.png";
import virtualmaze from "../images/virtualmaze.png";
import portfolio from "../images/portfolio.png";

export const projectFilters = ["All Projects", "Web Applications", "Mobile Applications", "Full-Stack", "Experimental"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  filters: ProjectFilter[];
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imageNote?: string;
  tech: string[];
  features: string[];
  focus: string;
  problem: string;
  architecture: string;
  github?: string;
  demo: string;
  demoLabel?: string;
  accent: string;
  glow: string;
  source?: string;
};

// Original descriptions, screenshots and URLs come from the former ProjectCard.tsx.
// ShopEase and Maze stack details are corroborated by their linked repository READMEs.
// Specific personal contributions and retrospective outcomes are intentionally not invented.
export const projects: Project[] = [
  {
    id: "mathani",
    title: "Mathani Quran App",
    shortTitle: "Mathani",
    category: "MOBILE EXPERIENCE",
    filters: ["Mobile Applications"],
    description: "A thoughtful mobile Quran experience. Tafseer, Tajweed, audio recitation, and bookmarks come together in an interface built for everyday reading.",
    image: mathani,
    imageAlt: "Original Mathani Google Play listing with app screenshots",
    imageNote: "The supplied asset is a Google Play listing. The phone preview uses an excerpt of its actual app screenshot; a full-resolution app screen is still to be added.",
    tech: [],
    features: ["Tafseer & Tajweed", "Audio recitation", "Reading bookmarks"],
    focus: "Bringing reading, listening, and personal bookmarks into a clear mobile experience.",
    problem: "Make Quran reading and supporting resources accessible together on a mobile device.",
    architecture: "A mobile application with reading, audio, and bookmark experiences. The original project notes do not specify its implementation stack or internal architecture.",
    demo: "https://play.google.com/store/apps/details?id=com.mathani",
    demoLabel: "Google Play",
    accent: "#b8d79a",
    glow: "rgba(116, 163, 102, .16)",
  },
  {
    id: "postautopilot",
    title: "PostAutoPilot",
    shortTitle: "PostAutoPilot",
    category: "SOCIAL PUBLISHING & AUTOMATION",
    filters: ["Mobile Applications", "Web Applications"],
    description: "Taking the friction out of social publishing. A React Native automation app for scheduling posts, generating captions, and exploring posting insights.",
    image: postautopilot,
    imageAlt: "Original PostAutoPilot website showing its social media publishing product",
    imageNote: "The original asset shows the product website. An authenticated dashboard screenshot has not been supplied.",
    tech: ["React Native"],
    features: ["Post scheduling", "Caption generation", "Analytics & recommendations"],
    focus: "Making a multi-step social publishing workflow feel organized and approachable.",
    problem: "Bring post planning, caption creation, and publishing insights into one automation workflow.",
    architecture: "The original portfolio identifies a React Native application. Its public website introduces the product; backend and social platform integration details are not documented in the supplied source.",
    demo: "https://postautopilot.vercel.app/",
    accent: "#b5a0ff",
    glow: "rgba(132, 93, 228, .19)",
  },
  {
    id: "studysync",
    title: "StudySync Platform",
    shortTitle: "StudySync",
    category: "FULL-STACK COLLABORATION",
    filters: ["Web Applications", "Full-Stack"],
    description: "A shared space for better learning. A MERN platform connecting students through study groups, real-time discussions, and shared resources.",
    image: studysync,
    imageAlt: "Original StudySync website with its collaborative study session interface illustration",
    imageNote: "Original product website screenshot. Marketing figures visible in this historic screenshot are not independently verified.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Study groups", "Real-time discussions", "Resources & progress tracking"],
    focus: "Connecting authenticated users, shared resources, and collaborative learning experiences.",
    problem: "Give students a central place to organize study groups, discuss topics, share resources, and follow their progress.",
    architecture: "A MERN application: React provides the interface, Node.js and Express form the server layer, and MongoDB stores application data. The original description includes authentication and real-time discussions without specifying their implementation libraries.",
    github: "https://github.com/AbdulRehmanBaig384/StudySync",
    demo: "https://study-sync-platform.vercel.app/",
    accent: "#83d7ed",
    glow: "rgba(50, 157, 199, .16)",
  },
  {
    id: "shopease",
    title: "ShopEase E-commerce Website",
    shortTitle: "ShopEase",
    category: "E-COMMERCE EXPERIENCE",
    filters: ["Web Applications", "Full-Stack"],
    description: "From the first browse to checkout. A responsive storefront with product discovery, a shopping cart, and authenticated customer experiences.",
    image: shopease,
    imageAlt: "Original ShopEase e-commerce storefront screenshot",
    tech: ["JavaScript", "Bootstrap", "Firebase", "HTML / CSS"],
    features: ["Product listings", "Cart & checkout flow", "User authentication"],
    focus: "Keeping product, cart, and account interactions consistent across a responsive storefront.",
    problem: "Make discovering products and managing a shopping cart straightforward across desktop and mobile.",
    architecture: "HTML, CSS, Bootstrap, and JavaScript power the storefront. Firebase Authentication handles accounts, while Firestore stores application data. Payment processing is listed as a future enhancement in the repository and is not claimed as implemented here.",
    github: "https://github.com/AbdulRehmanBaig384/ShopEase-Store",
    demo: "https://shopeasywebsite1.netlify.app/",
    accent: "#edba91",
    glow: "rgba(179, 113, 58, .14)",
    source: "https://github.com/AbdulRehmanBaig384/ShopEase-Store#readme",
  },
  {
    id: "voice-todo",
    title: "Voice ToDo MERN App",
    shortTitle: "Voice ToDo",
    category: "VOICE-POWERED PRODUCTIVITY",
    filters: ["Web Applications", "Full-Stack"],
    description: "Say it. Organize it. A full-stack task manager that turns voice input into everyday task actions, backed by persistent MongoDB storage.",
    image: voicetodo,
    imageAlt: "Original Voice ToDo task management application screenshot",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Voice input", "Create, update & delete tasks", "Persistent task storage"],
    focus: "Connecting spoken input to clear task actions and persistent application state.",
    problem: "Make everyday task management possible through voice commands as well as a visual interface.",
    architecture: "A MERN application combining a React interface, a Node.js and Express backend, and MongoDB task storage. Voice commands drive task creation, updates, and deletion; the original notes do not identify the speech recognition provider.",
    github: "https://github.com/AbdulRehmanBaig384/Voice-Todo-Mern",
    demo: "https://voice-todo-mern.vercel.app",
    accent: "#e6a6cc",
    glow: "rgba(179, 77, 137, .15)",
  },
  {
    id: "maze-solver",
    title: "Virtual Maze Solver",
    shortTitle: "Virtual Maze Solver",
    category: "ALGORITHMS MADE VISIBLE",
    filters: ["Web Applications", "Experimental"],
    description: "A playground for algorithmic thinking. Create obstacles and watch breadth-first and depth-first search work their way through an interactive maze.",
    image: virtualmaze,
    imageAlt: "Original Virtual Maze Solver interactive pathfinding grid screenshot",
    tech: ["JavaScript", "HTML / CSS", "BFS / DFS"],
    features: ["Interactive obstacle grid", "Pathfinding animation", "BFS & DFS exploration"],
    focus: "Turning graph traversal into a visual, understandable sequence of decisions.",
    problem: "Make pathfinding behavior easier to understand by showing how different algorithms explore the same grid.",
    architecture: "A browser application built with HTML, CSS, and JavaScript. Its repository implements breadth-first search and depth-first search with animated grid traversal. BFS finds shortest paths in an unweighted grid; DFS does not guarantee a shortest path.",
    github: "https://github.com/AbdulRehmanBaig384/Visual-Maze-Solver",
    demo: "https://virtual-maze-solver.netlify.app/",
    accent: "#9bd6bc",
    glow: "rgba(64, 163, 129, .15)",
    source: "https://github.com/AbdulRehmanBaig384/Visual-Maze-Solver#readme",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    shortTitle: "Personal Portfolio",
    category: "CREATIVE DEVELOPMENT",
    filters: ["Web Applications", "Experimental"],
    description: "A place where engineering meets expression. My developer portfolio explores depth, motion, and thoughtful interactions on the modern web.",
    image: portfolio,
    imageAlt: "Screenshot of Abdul Rehman Baig's original portfolio before this redesign",
    imageNote: "This is the original portfolio screenshot, preserved as a record of the previous design.",
    tech: ["Next.js", "TypeScript", "Three.js", "Motion"],
    features: ["Interactive 3D", "Responsive design", "Scroll-driven motion"],
    focus: "Balancing expressive interactions with readable content, accessibility, and performance.",
    problem: "Present authentic projects and engineering experience through a distinctive, accessible digital portfolio.",
    architecture: "Built with Next.js, React, and TypeScript. React Three Fiber and Drei render the 3D scene, while Motion handles entrance animations and interaction. The site exports statically for Netlify, and the existing Web3Forms integration handles contact submissions.",
    github: "https://github.com/abdulrehman-dev/portfolio",
    demo: "https://rehmanportfolio384.netlify.app/",
    accent: "#bca2f4",
    glow: "rgba(130, 91, 204, .17)",
  },
];

export default projects;
