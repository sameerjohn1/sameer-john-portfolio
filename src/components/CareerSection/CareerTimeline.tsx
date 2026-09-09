import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Sep 2026 – Present",
      title: "Backend Developer (MERN Stack) — Freelance",
      subtitle: "Self-Employed",
      description:
        "Architecting and developing backend services for a full-stack travel-planning platform using Node.js, Express.js, MongoDB Atlas, and RESTful APIs. Implemented JWT authentication, secure password hashing, core Mongoose schemas, and deployed production APIs to Vercel. Collaborating on API contracts and building role-based access control, Trip CRUD, and Itinerary Management APIs.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Sep 2026 – Present",
      title: "Junior MERN Stack Developer — Contract",
      subtitle: "Sprouto Group",
      description:
        "Developing and maintaining MERN stack applications with a focus on backend security, transactional email workflows, and scalable frontend architecture. Integrated Resend API end-to-end with React.js and Node.js/Express.js, strengthened protected route architecture, and improved frontend performance through code splitting and reusable components. Participating in code reviews to maintain engineering quality.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Nov 2025 – Apr 2026",
      title: "Frontend Developer — Freelance",
      subtitle: "Self-Employed",
      description:
        "Built and shipped production-ready web applications using React.js, Next.js, TypeScript, and the MERN stack. Developed an AI customer support chatbot with Next.js App Router, Google Gemini API, MongoDB, and multi-tenant authentication via Scalekit. Also built a full-stack MERN Expense Tracker with JWT authentication, protected routes, CRUD operations, and interactive analytics.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "May 2024 – Oct 2024",
      title: "Associate Frontend Developer",
      subtitle: "Deutics Global",
      description:
        "Developed and maintained frontend features for Camzify, an AI-powered surveillance platform, using React.js and Redux Toolkit. Built scalable dashboards for Admin, Sub-Admin, and User workflows, including video backup management, license plans, AI heat maps, notifications, advanced filtering, and pagination. Improved performance through lazy loading, memoization, and efficient component architecture while translating Figma designs into responsive interfaces.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2024 – Mar 2024",
      title: "Junior React.js Developer",
      subtitle: "Znz Technologies",
      description:
        "Contributed to an interactive e-learning platform using React.js, developing reusable and modular components with scalable state management. Built user engagement features including gig management, likes, comments, and real-time chat functionality. Ensured responsive experiences across mobile, tablet, and desktop devices.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Experience"
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
