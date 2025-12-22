export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  highlight?: string; 
};

export const projects: Project[] = [
  {
    id: "ecommerce-mern",
    title: "E-Commerce MERN App",
    description:
      "A complete e-commerce solution featuring secure authentication, product management, real-time cart updates, and Stripe-based payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    github: "https://github.com/abdulrehman-dev/ecommerce-mern",
    demo: "https://ecommerce.abdulrehman.dev",
    image: "/images/projects/ecommerce.webp",
    highlight: "Featured Project",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat (Socket.io)",
    description:
      "A fast and responsive real-time chat app supporting rooms, file sharing, typing indicators, and online presence using Socket.io.",
    tech: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/abdulrehman-dev/realtime-chat",
    demo: "https://chat.abdulrehman.dev",
    image: "/images/projects/chat.webp",
    highlight: "Realtime App",
  },
  {
    id: "data-dashboard",
    title: "Data Analytics Dashboard",
    description:
      "An interactive analytics dashboard with charts, filters, and API integrations for data visualization, built using React + TypeScript.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "REST API"],
    github: "https://github.com/abdulrehman-dev/data-dashboard",
    demo: "https://dashboard.abdulrehman.dev",
    image: "/images/projects/dashboard.webp",
    highlight: "Data Visualization",
  },
  {
    id: "portfolio-next",
    title: "Portfolio (Next.js + Framer Motion)",
    description:
      "My personal portfolio built with Next.js 14, TypeScript, and Framer Motion — smooth animations, dark theme, and responsive UI.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/abdulrehman-dev/portfolio",
    demo: "https://abdulrehman.dev",
    image: "/images/projects/portfolio.webp",
    highlight: "Personal Project",
  },
];

export default projects;
