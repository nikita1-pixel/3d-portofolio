/* =============================================
   PORTFOLIO - DATA FILE
   File: js/data.js
   Purpose: All your content lives here.
   To update portfolio content, edit ONLY this file.
   ============================================= */

/* ---------- Typing animation stack ---------- */
const techStack = [
    "I build with React...",
    "I build with Next.js...",
    "I build with TypeScript...",
    "I build with Node.js...",
    "I build with PostgreSQL..."
];

/* ---------- Skills (bento grid) ---------- */
const skills = [
    {
        id: "typescript",
        icon: "code",
        iconColor: "text-primary",
        title: "TypeScript",
        description: "Writing type-safe, maintainable code for complex enterprise applications."
    },
    {
        id: "react",
        icon: "layers",
        iconColor: "text-tertiary",
        title: "React",
        description: "Creating immersive, fast-loading user interfaces with the latest web standards."
    },
    {
        id: "nodejs",
        icon: "terminal",
        iconColor: "text-primary",
        title: "Node.js",
        description: "Building powerful server-side applications and real-time communication layers."
    },
    {
        id: "sql",
        icon: "database",
        iconColor: "text-tertiary",
        title: "SQL",
        description: "Designing robust relational data models and optimizing query performance."
    }
];

/* ---------- Projects ---------- */
const projects = [
    {
        id: "auth-portal",
        title: "Secure Governance Platform",
        tags: [
            { label: "AuthPortal", color: "primary" },
            { label: "Full-Stack", color: "tertiary" }
        ],
        description:
            "Designed and built a secure authentication system featuring Server-Side Rendering (SSR) for optimized performance. Developed robust backend logic to manage complex user inputs and identity protection modules.",
        highlights: [
            "Map interface for visualizing user activity and access patterns",
            "Custom-built identity protection algorithms to prevent unauthorized access"
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNt8NP0VJeEqWZQFA3hS_TbjuYv35fxzRNvjlO8oNBP58VqVkc6BFCdbx42o6JIgE1sWZIIzgxYh_vlUoaWVFrffxEkBYgGHb2A_UygNrh3HksIgFJjnIvcjcXBtPQx9I-rWhCeHdHDTjzqMmgJQhZWRY10pB407QtNPzWGkyi53yuLqMPOz-03WkFmncTsuNpE2sA-RyiYu2BG5YFgoP2G4CZn761bBrjPLx0h6wTdORXuF7r0rPvyWhsryw-owZNe21NamUoyh6I",
        imageAlt: "Authportal Dashboard",
        techStack: ["Next.js", "TypeScript", "Tailwind", "Redis", "Docker"],
        liveDemo: "#",
        sourceCode: "#"
    },
    {
        id: "neural-crm",
        title: "NeuralNode CRM",
        tags: [
            { label: "SaaS", color: "primary" },
            { label: "AI/ML", color: "tertiary" }
        ],
        description:
            "An AI-powered customer relationship platform that predicts churn and automates follow-ups using natural language processing.",
        highlights: [
            "Proprietary ML model integration",
            "Real-time collaborative workspace"
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX5aMnc1FsD1tK_ZR88jMTY5YhgEvM6ZMIMJ_4rHI5QjDuPP0CxdnjXFw_Ao5XDZveMaYdztTCbiYtuarphIs2l3zR7NRZQFL4S5t7hBzdzoAgqUepacgGsyXF_4nThjRKY_G35q1ley5V5ApdZb3BW2ITkvYL-E_QRpbhx-V6FnpXncqZzPD6kDJHg4TfcaTLgWEhCKsWjA0a961IdZO2IMMPLjvS59YDGhoKV_qXdvXwO17cRLMA6Nsk9Jyg2uZaqdqSWQf-4tan",
        imageAlt: "AI CRM Interface",
        techStack: ["Next.js", "TypeScript", "Tailwind", "Redis", "Docker"],
        liveDemo: "#",
        sourceCode: "#"
    }
];

/* ---------- Experience timeline ---------- */
const experience = [
    {
        period: "2022 - Present",
        role: "Senior Architect",
        company: "TechNova Systems",
        icon: "rocket_launch",
        iconBg: "bg-primary",
        shadowColor: "rgba(75,226,119,0.5)",
        description:
            "Spearheaded the migration of a legacy monolithic platform to a cloud-native microservices architecture, reducing infrastructure costs by 40%.",
        align: "left"
    },
    {
        period: "2020 - 2022",
        role: "Full-Stack Lead",
        company: "InnoLabs Global",
        icon: "groups",
        iconBg: "bg-tertiary",
        shadowColor: "rgba(124,208,255,0.5)",
        description:
            "Led a team of 8 developers in launching a series of high-impact FinTech solutions used by over 50,000 monthly active users.",
        align: "right"
    },
    {
        period: "2018 - 2020",
        role: "Frontend Developer",
        company: "PixelPerfect Creative",
        icon: "brush",
        iconBg: "bg-surface-container-highest",
        shadowColor: "none",
        description:
            "Focused on creating pixel-perfect, interactive web animations and highly responsive user interfaces using GreenSock and React.",
        align: "left"
    }
];

/* ---------- Education & certifications ---------- */
const credentials = [
    {
        icon: "school",
        iconColor: "text-primary",
        borderHover: "group-hover:border-primary",
        title: "M.S. Computer Science",
        subtitle: "Stanford University",
        hoverLabel: "View Credential"
    },
    {
        icon: "verified",
        iconColor: "text-tertiary",
        borderHover: "group-hover:border-tertiary",
        title: "AWS Certified Architect",
        subtitle: "Professional Level",
        hoverLabel: "Verified Badge"
    },
    {
        icon: "terminal",
        iconColor: "text-primary",
        borderHover: "group-hover:border-primary",
        title: "Full Stack Bootcamp",
        subtitle: "Harvard CS50",
        hoverLabel: "Certificate ID: 942-A"
    },
    {
        icon: "security",
        iconColor: "text-tertiary",
        borderHover: "group-hover:border-tertiary",
        title: "CompTIA Security+",
        subtitle: "Cybersecurity Fundamentals",
        hoverLabel: "Active: 2024"
    }
];