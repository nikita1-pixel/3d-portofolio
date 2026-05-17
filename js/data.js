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
        techStack: ["Next.js", "TypeScript", "Tailwind", "Redis", "PostgreSQL"],
        liveDemo: "#",
        sourceCode: "#"
    },
    {
        id: "Shopify-Clone",
        title: "E-commerce Integration",
        tags: [
            { label: "JavaScript", color: "primary" },
            { label: "Reactjs", color: "tertiary" }
        ],
        description:
            "Developed a e-commerce platform using ReactJs to manage complex product transactions and user workflows. Implemented a dynamic product catalog system to ensure data integrity for inventory and pricing. Built a responsive user interface aligned with professional retail standards to enhance customer engagement", 
            highlights: [
            
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX5aMnc1FsD1tK_ZR88jMTY5YhgEvM6ZMIMJ_4rHI5QjDuPP0CxdnjXFw_Ao5XDZveMaYdztTCbiYtuarphIs2l3zR7NRZQFL4S5t7hBzdzoAgqUepacgGsyXF_4nThjRKY_G35q1ley5V5ApdZb3BW2ITkvYL-E_QRpbhx-V6FnpXncqZzPD6kDJHg4TfcaTLgWEhCKsWjA0a961IdZO2IMMPLjvS59YDGhoKV_qXdvXwO17cRLMA6Nsk9Jyg2uZaqdqSWQf-4tan",
        imageAlt: "AI CRM Interface",
        techStack: ["JavaScript", "Reactjs", "ES6", "CSS"],
        liveDemo: "#",
        sourceCode: "#"
    },
    {
        id: "CURD ",
        title: "Operations Platform",
        tags: [
            { label: "PostgreSQL", color: "primary" },
            { label: "Database", color: "tertiary" }
        ],
        description:
            "Engineered a robust application demonstrating full Create, Read, Update, and Delete capabilities. Implemented efficient Database Management to handle persistent data storage and flow.",
        highlights: [
            "Dynamic product catalog system to manage inventory and pricing",
            "Responsive user interface designed to enhance customer engagement and drive sales"
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX5aMnc1FsD1tK_ZR88jMTY5YhgEvM6ZMIMJ_4rHI5QjDuPP0CxdnjXFw_Ao5XDZveMaYdztTCbiYtuarphIs2l3zR7NRZQFL4S5t7hBzdzoAgqUepacgGsyXF_4nThjRKY_G35q1ley5V5ApdZb3BW2ITkvYL-E_QRpbhx-V6FnpXncqZzPD6kDJHg4TfcaTLgWEhCKsWjA0a961IdZO2IMMPLjvS59YDGhoKV_qXdvXwO17cRLMA6Nsk9Jyg2uZaqdqSWQf-4tan",
        imageAlt: "AI CRM Interface",
        techStack: ["JavaScript", "Reactjs", "ES6", "CSS"],
        liveDemo: "#",
        sourceCode: "#"
    }
    

];

/* ---------- Experience timeline ---------- */
const experience = [
    {
        period: "June 2025 - August 2025",
        role: "Administrative Assistant",
        company: "AV Corder",
        icon: "rocket_launch",
        iconBg: "bg-primary",
        shadowColor: "rgba(75,226,119,0.5)",
        description:
            "Performed in-depth research and data-driven analysis to support team leads with decision-making information. Implemented Streamlined administrative transactions and improved process documentation to enhance efficiency. Managed digital assets and brand visibility while maintaining strict data integrity across platforms.",
        align: "left"
    },
    {
        period: "November 2022 - May 2025",
        role: "Barista Trainer",
        company: "Tata Starbucks",
        icon: "groups",
        iconBg: "bg-tertiary",
        shadowColor: "rgba(124,208,255,0.5)",
        description:
            "Optimized complex workflows and operational logic to reduce service latency. Identified and resolved process- level inaccuracies in cash flow and POS reconciliation. Consistently exceeded internal audit standards by adhering to organizational governance and technical standards",
        align: "right"
    },
    // {
    //     period: "2018 - 2020",
    //     role: "Frontend Developer",
    //     company: "PixelPerfect Creative",
    //     icon: "brush",
    //     iconBg: "bg-surface-container-highest",
    //     shadowColor: "none",
    //     description:
    //         "Focused on creating pixel-perfect, interactive web animations and highly responsive user interfaces using GreenSock and React.",
    //     align: "left"
    // }
];

/* ---------- Education & certifications ---------- */
const credentials = [
    {
        icon: "school",
        iconColor: "text-primary",
        borderHover: "group-hover:border-primary",
        title: "Bachelor's of Computer Application ",
        subtitle: "MIT World Peace University",
        hoverLabel: "View Credential"
    },
    {
        icon: "verified",
        iconColor: "text-tertiary",
        borderHover: "group-hover:border-tertiary",
        title: "Legacy Responsive Web Design V8",
        subtitle: "freeCodeCamp.org",
        hoverLabel: "Web Development"
    },
    {
        icon: "terminal",
        iconColor: "text-primary",
        borderHover: "group-hover:border-primary",
        title: "Data analytics job simulation by Deloitte",
        subtitle: "Deloitte",
        hoverLabel: "Data Analytics, Microsoft Excel, Tableau"
    },
    {
        icon: "security",
        iconColor: "text-tertiary",
        borderHover: "group-hover:border-tertiary",
        title: "Gemini Certification for Students (K12) ",
        subtitle: "Google",
        hoverLabel: "Gemini, AI"
    }
];