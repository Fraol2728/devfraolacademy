export const courses = [
  {
    id: "mern-foundations",
    title: "MERN Foundations",
    description:
      "Build full-stack web apps using MongoDB, Express, React, and Node with production-ready project structure.",
    category: "Web Development",
    level: "Beginner",
    status: "ongoing",
    duration: "10 weeks",
    price: "$149",
    prerequisites: "Basic JavaScript",
    image: "/logo.png",
    video: "",
    syllabus: [
      "React fundamentals and component architecture",
      "Node + Express REST API design",
      "MongoDB data modeling and CRUD",
      "Authentication and deployment workflow"
    ]
  },
  {
    id: "advanced-react-patterns",
    title: "Advanced React Patterns",
    description:
      "Master scalable React architecture, performance optimization, and reusable UI systems.",
    category: "Frontend",
    level: "Advanced",
    status: "upcoming",
    duration: "8 weeks",
    price: "$179",
    prerequisites: "React basics, hooks",
    image: "/logo.svg",
    syllabus: [
      "State management strategies",
      "Animation with Framer Motion",
      "Reusable component APIs",
      "Testing and performance profiling"
    ]
  },
  {
    id: "backend-api-bootcamp",
    title: "Backend API Bootcamp",
    description:
      "Design clean APIs with Node.js, Express, auth, validation, and deployment best practices.",
    category: "Backend",
    level: "Intermediate",
    status: "ongoing",
    duration: "6 weeks",
    price: "$129",
    prerequisites: "JavaScript fundamentals",
    image: "/profile-logo.png",
    syllabus: [
      "REST API conventions",
      "Authentication and authorization",
      "Input validation and error handling",
      "Deployment, monitoring, and docs"
    ]
  },
  {
    id: "ai-for-developers",
    title: "AI for Developers",
    description:
      "Integrate LLMs and practical AI workflows into modern web applications.",
    category: "AI",
    level: "Intermediate",
    status: "upcoming",
    duration: "5 weeks",
    price: "$199",
    prerequisites: "JavaScript + API basics",
    image: "/logo.png",
    syllabus: [
      "Prompt engineering essentials",
      "Model integration patterns",
      "RAG basics and vector workflows",
      "AI UX and guardrails"
    ]
  }
];

export const courseCategories = ["All", "Web Development", "Frontend", "Backend", "AI"];
export const courseLevels = ["All", "Beginner", "Intermediate", "Advanced"];
export const courseStatuses = ["All", "upcoming", "ongoing"];
