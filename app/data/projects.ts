// export type Project = {
//   id: string;
//   title: string;
//   description: string;
//   tech: string[];
//   github?: string;
//   demo?: string;
//   image?: string;
// };

// export const projects: Project[] = [
//   {
//     id: "ecommerce-mern",
//     title: "E-Commerce MERN App",
//     description:
//       "Full-featured e-commerce app with authentication, shopping cart, and payments integration.",
//     tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
//     github: "https://github.com/username/ecommerce-mern",
//     demo: "https://ecommerce.example.com",
//     image: "/file.svg",
//   },
//   {
//     id: "realtime-chat",
//     title: "Realtime Chat (Socket.io)",
//     description:
//       "Realtime messaging app with rooms, media sharing, and typing indicators built on Socket.io.",
//     tech: ["Node.js", "Socket.io", "React", "Express"],
//     github: "https://github.com/username/realtime-chat",
//     demo: "https://chat.example.com",
//     image: "/globe.svg",
//   },
//   {
//     id: "data-dashboard",
//     title: "Data Dashboard",
//     description:
//       "Interactive dashboard with charts and API integrations for analytics and reporting.",
//     tech: ["React", "TypeScript", "Chart.js", "Node.js"],
//     github: "https://github.com/username/data-dashboard",
//     demo: "https://dashboard.example.com",
//     image: "/next.svg",
//   },
// ];

// export default projects;


// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  highlight?: string; // new field for quick badge (e.g., "Featured", "2025 Project")
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
