import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Sep 2026 – Present",
      title: "Backend Developer (MERN Stack) — Freelance",
      subtitle: "Self-Employed",
      description:
        "Built the backend for a travel-planning platform from scratch with Node.js, Express and MongoDB Atlas, and agreed on API contracts with the frontend developer. Set up JWT authentication with bcrypt password hashing, designed the Mongoose schemas, and deployed the APIs on Vercel. Currently building role-based access control, Trip CRUD and itinerary management APIs.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "May 2026 – Jun 2026",
      title: "Junior MERN Stack Developer — Contract",
      subtitle: "Sprouto Group",
      description:
        "Worked across a React.js and Node.js codebase. Built transactional email with the Resend API on the Express backend and connected it to the React frontend, tightened the protected route setup so unauthorized users are blocked, and reduced bundle size with code splitting and more reusable components. Took part in code reviews.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Nov 2025 – Apr 2026",
      title: "Full Stack Developer — Freelance",
      subtitle: "Self-Employed",
      description:
        "Built and shipped two projects on my own, both live on Vercel. An AI customer support chatbot with Next.js App Router, TypeScript, the Gemini API and MongoDB, with multi-tenant login through Scalekit. And a MERN expense tracker with JWT auth, protected routes, full CRUD and an analytics dashboard.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "May 2024 – Oct 2025",
      title: "Associate Frontend Developer",
      subtitle: "Deutics Global",
      description:
        "Started as a React intern, then trainee, and grew into the Associate role. Worked on Camzify, an AI-powered surveillance platform, with React.js and Redux Toolkit, building dashboards for Admin, Sub-Admin and User roles: video backup management, license plans, AI heat maps, notifications, filtering and pagination. Owned 20+ React components still live in production, integrated 15+ REST APIs with RTK Query, and cut unnecessary re-renders by about 40% with memoization and better hook patterns. Turned Figma designs into responsive interfaces.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2024 – Mar 2024",
      title: "Junior React.js Developer",
      subtitle: "ZNZ",
      description:
        "Worked on an interactive e-learning platform in React.js, building reusable components and managing state. Built gig management, likes, comments and real-time chat, and kept the layouts responsive on mobile, tablet and desktop.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Feb 2022 – Oct 2022",
      title: "React Developer",
      subtitle: "Vvork Cloud Technologies",
      description:
        "My first development job. Built frontend features with React.js and Bootstrap, got solid with JavaScript fundamentals, and learned how production codebases are structured.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Work Expeirnece"
        subtitle="Building products, solving problems, and delivering results"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
