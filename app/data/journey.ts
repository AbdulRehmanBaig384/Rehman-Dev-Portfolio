export type JourneyEntry = {
  title: string;
  organization: string;
  date: string;
  location?: string;
  summary: string;
  details: string[];
  technologies?: string[];
};

export const experience: JourneyEntry[] = [
  {
    title: "Junior React Developer",
    organization: "HZTech",
    date: "February 2026 — Present",
    location: "Onsite",
    summary: "Building responsive web and mobile interfaces, connected to scalable backend services.",
    details: [
      "Building and maintaining responsive React.js and React Native interfaces.",
      "Working with Tailwind CSS for UI consistency and responsive design.",
      "State management using Redux Toolkit, Zustand, and Context API.",
      "Applying React hooks, component lifecycle, props, memoization, and custom hooks.",
      "Mobile app development using React Native with Expo.",
      "Backend integration using Firebase Authentication, Firestore, and Storage.",
      "Building REST APIs with Node.js and Express.js, and working with NestJS for scalable backend architecture.",
      "Working with Next.js for SSR and SSG applications and collaborating on real client projects.",
    ],
    technologies: ["React", "React Native", "Next.js", "Node.js", "Firebase"],
  },
  {
    title: "React Developer Intern",
    organization: "HZTech",
    date: "October 2025 — January 2026",
    location: "Onsite",
    summary: "Turning React fundamentals into responsive interfaces and consistent user experiences.",
    details: [
      "Learned and applied core React concepts: components, props, state, and hooks.",
      "Built responsive UIs using React.js and Tailwind CSS.",
      "Practiced state management using Context API and basic Redux.",
      "Worked on React Native fundamentals for mobile UI components.",
      "Focused on UI/UX consistency and dynamic motion design with Framer Motion.",
    ],
    technologies: ["React", "Tailwind CSS", "Context API", "Framer Motion"],
  },
  {
    title: "Remote Internship",
    organization: "Elevopathways",
    date: "2025",
    location: "Remote · Cairo, Egypt",
    summary: "Collaborating across borders on React applications and backend integration.",
    details: [
      "Collaborated remotely on React-based projects, integrating backend APIs and ensuring performance optimization.",
    ],
    technologies: ["React", "API integration", "Performance"],
  },
];

export const education: JourneyEntry[] = [
  {
    title: "BS Software Engineering",
    organization: "University of Karachi (UBIT)",
    date: "2023 — 2027",
    summary: "Connecting software engineering fundamentals with practical product development.",
    details: ["Focused on full-stack development, algorithms, system design, and modern software architecture."],
    technologies: ["Algorithms", "System design", "Software architecture"],
  },
  {
    title: "Intermediate in Pre-Engineering",
    organization: "Adamjee Government Science College",
    date: "2021 — 2023",
    summary: "A foundation in analytical thinking and problem solving.",
    details: ["Studied mathematics, physics, and computer fundamentals."],
    technologies: ["Mathematics", "Physics", "Computer fundamentals"],
  },
  {
    title: "Matriculation · Science",
    organization: "Metropolitan Academy",
    date: "2019 — 2021",
    summary: "The beginning of a curiosity for how things work.",
    details: ["Completed secondary education with a strong foundation in science."],
    technologies: ["Science"],
  },
];
