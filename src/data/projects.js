export const projects = [
  {
    id: 1,
    title: "GreenCart: Grocery Delivery Platform (MERN)",
    subtitle:
      "A grocery delivery platform built solo and deployed as three separate Vercel apps: a customer storefront, an admin dashboard and a REST API. Customers get JWT auth with email OTP (Brevo), debounced search, a persistent cart, address management, order tracking, and cash on delivery or Stripe Checkout with idempotent payment verification. The admin dashboard has revenue and order stats, order filters with controlled status transitions, and product management with Cloudinary uploads. TanStack Query caching makes revisited pages load instantly. Built with React 19, Vite, Tailwind CSS v4, Node.js, Express 5 and MongoDB.",
    image: "/assets/images/greencart.png",
    link: "https://mern-grocery-delivery-platform-ooo5.vercel.app/",
    gridClass: "md:col-span-7 h-[420px]",
  },
  {
    id: 2,
    title: "MERN E-Commerce Store with AI Shopping Assistant",
    subtitle:
      "A full-stack store with JWT auth, Stripe payments (with webhooks), Cloudinary image uploads and an admin dashboard for products, users and orders. An AI assistant built on the OpenRouter API recommends products from the MongoDB catalog and falls back to another model automatically if one fails. Includes search, category filters, featured products and a cart, with Redis (Upstash) for sessions. Built with React, Tailwind CSS, Framer Motion, Three.js and GSAP.",
    image: "/assets/images/ecomerce-store.png",
    link: "https://mern-ecommerce-store-w2lo.vercel.app/",
    gridClass: "md:col-span-5 h-[420px]",
  },
  {
    id: 3,
    title: "AI Customer Support Chatbot",
    subtitle:
      "An embeddable AI chatbot that any website can add with a single script tag, similar to Intercom and Tidio. It supports multiple organizations and websites, with Scalekit handling login, multi-org access and user management. Replies come from the Google Gemini API, and chat history and settings are stored in MongoDB. Built with Next.js App Router, TypeScript and Tailwind CSS, and deployed on Vercel.",
    image: "/assets/images/chatbot.png",
    link: "https://ai-customer-support-b4dw.vercel.app/",
    gridClass: "md:col-span-5 h-[420px]",
  },
  {
    id: 4,
    title: "The Digital Invites: Animated Wedding Invitations",
    subtitle:
      "A product for Pakistani weddings that replaces printed cards with a single WhatsApp link. It offers 20+ animated designs for Wedding, Nikah, Mehndi, Walima and Engagement, with wax seals, curtain reveals, scratch-to-reveal dates, live countdowns, Google Maps directions and background music that starts when the envelope opens. Supports English and Urdu (RTL) and is fully responsive, with built-in SEO. Each invitation is typed data plus CSS-variable theme tokens, so a new couple is a data change, not a rewrite. Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4, with no animation libraries.",
    image: "/assets/images/digital-invites.png",
    link: "https://thedigitalinvites.com/",
    gridClass: "md:col-span-7 h-[420px]",
  },
];
