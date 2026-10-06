export const projects = [
  {
    id: 1,
    title: "MERN E-Commerce Store with AI Shopping Assistant",
    subtitle:
      "A full-stack store with JWT auth, Stripe payments (with webhooks), Cloudinary image uploads and an admin dashboard for products, users and orders. An AI assistant built on the OpenRouter API recommends products from the MongoDB catalog and falls back to another model automatically if one fails. Includes search, category filters, featured products and a cart, with Redis (Upstash) for sessions. Built with React, Tailwind CSS, Framer Motion, Three.js and GSAP.",
    image: "/assets/images/ecomerce-store.png",
    link: "https://mern-ecommerce-store-w2lo.vercel.app/",
    gridClass: "md:col-span-7 h-[420px]",
  },
  {
    id: 2,
    title: "AI Customer Support Chatbot",
    subtitle:
      "An embeddable AI chatbot that any website can add with a single script tag, similar to Intercom and Tidio. It supports multiple organizations and websites, with Scalekit handling login, multi-org access and user management. Replies come from the Google Gemini API, and chat history and settings are stored in MongoDB. Built with Next.js App Router, TypeScript and Tailwind CSS, and deployed on Vercel.",
    image: "/assets/images/chatbot.png",
    link: "https://ai-customer-support-b4dw.vercel.app/",
    gridClass: "md:col-span-5 h-[420px]",
  },
  {
    id: 3,
    title: "Expense Tracker (MERN Stack)",
    subtitle:
      "A full-stack app to track income and expenses, with JWT authentication, full CRUD on transactions and a dashboard with charts built in Recharts. Built with React, Node.js, Express, MongoDB and Tailwind CSS.",
    image: "/assets/images/expenseTracker.png",
    link: "https://sameerjohn1-expense-tracker-mern.vercel.app/",
    gridClass: "md:col-span-5 h-[360px]",
  },
  {
    id: 4,
    title: "macOS-Style 3D Portfolio",
    subtitle:
      "A portfolio that works like a macOS desktop, with draggable windows, smooth open and close animations and 3D depth effects rendered in real time. Built with React and Three.js, and responsive across screen sizes.",
    image: "/assets/images/portimg.png",
    link: "https://mac-os-portfolio-react.vercel.app/",
    gridClass: "md:col-span-7 h-[360px]",
  },
];
