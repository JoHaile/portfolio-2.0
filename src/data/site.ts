// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Yohannes Haile',
  role: 'Full-Stack Developer | Next.js & React | Junior Data Analyst',
  location: 'Addis Ababa, Ethiopia',
  timezone: 'Africa/Addis_Ababa',
  email: 'yohannes.h93@gmail.com',
  resume: '/Yohannes_Haile_Resume.pdf',
  available: true,
  intro: 'Full-stack developer with hands-on experience building production SaaS, booking platforms, and AI applications. Proficient in Next.js, React, TypeScript, Node.js, Better Auth, and relational database modeling with PostgreSQL and Prisma.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/johaile' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/johnny-haile' },
    { label: 'Telegram', href: 'https://t.me/jo_haile' },
    { label: 'Email', href: 'mailto:yohannes.h93@gmail.com' },
  ],
  marquee: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Better Auth', 'Prisma', 'PostgreSQL', 'AI Integration'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  repo?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'enjoy-ethiopia',
    title: 'Enjoy Ethiopia',
    client: 'Self-initiated',
    category: 'Full-stack Travel Platform',
    year: '2026',
    cover: '/images/portrait.jpg',
    tint: '#d4e6f1',
    summary: 'Travel Ethiopia — multi-brand tourism & booking platform. Architected a multi-brand travel platform in Next.js consolidating Travel Ethiopia and Enjoy Ethiopia into a scalable shared system with end-to-end booking workflows, secure authentication, and email verification using Better Auth.',
    role: ['Full-Stack Development', 'Authentication', 'Database Modeling'],
    deliverables: ['Next.js Application', 'Better Auth Integration', 'Prisma PostgreSQL Schema', 'Email Verification Workflow'],
    link: 'https://www.enjoyethiopia.com/',
    body: [
      'Architected a multi-brand travel platform in Next.js that consolidates Travel Ethiopia (travelethiopia.com.et) and Enjoy Ethiopia into a scalable shared system.',
      'Built end-to-end booking workflows with secure account authentication and email verification using Better Auth.',
      'Modeled booking, customer, and operational data in PostgreSQL with Prisma to support complex relational workflows.',
      'Implemented type-safe, validated user flows with TypeScript, Zod, and React Hook Form.',
    ],
    size: 'large',
  },
  {
    slug: 'streamflix',
    title: 'StreamFlix',
    client: 'Self-initiated',
    category: 'Movie Streaming & Virtual Cinema',
    year: '2024',
    cover: '/images/portrait.jpg',
    tint: '#e8d5a7',
    summary: 'Movie Streaming & Virtual Cinema Web App - room-based virtual cinemas allowing multiple users to join a shared viewing session with synchronized playback controls.',
    role: ['Full-Stack Development', 'Real-time Sync'],
    deliverables: ['Next.js Application', 'React Frontend', 'Node.js Backend', 'Tailwind CSS', 'Room-based Virtual Cinema'],
    link: 'https://stream-flix-cinema.vercel.app/',
    repo: 'https://github.com/JoHaile/stream-flex',
    body: [
      'Engineered a full-stack platform for discovering and streaming movies and television series.',
      'Developed room-based virtual cinemas that allow multiple users to join a shared viewing session with synchronized playback controls.',
    ],
    size: 'small',
  },
  {
    slug: 'obed-tuyumvire',
    title: 'Obed Temba Tuyumvire',
    client: 'Client Project (DRC, Congo)',
    category: 'Conservation & Eco-Tourism',
    year: '2023',
    cover: '/images/portrait.jpg',
    tint: '#d8c8e8',
    summary: 'Conservation & Eco-Tourism Platform for Obed Temba Tuyumvire, a conservation leader in Eastern DRC working at the intersection of eco-tourism, community development, and Congo Basin forest protection.',
    role: ['Full-Stack Development'],
    deliverables: ['Next.js Website', 'TypeScript', 'Tailwind CSS', 'Curated Tour Packages', 'Editorial Stories', 'Contact & Speaking-Inquiry Flows'],
    link: 'https://obedtemba.vercel.app/',
    body: [
      'Client website for Obed Temba Tuyumvire, a conservation leader in Eastern DRC working at the intersection of eco-tourism, community development, and Congo Basin forest protection.',
      'Features curated tour packages, editorial stories, testimonials, and contact & speaking-inquiry flows.',
    ],
    size: 'small',
  },
  {
    slug: 'pharmacy-system',
    title: 'Pharmacy Inventory & Delivery System',
    client: 'University of Gondar',
    category: 'Full-Stack SaaS',
    year: '2023',
    cover: '/images/portrait.jpg',
    tint: '#e2d5f1',
    summary: 'Pharmacy Operations & Logistics Platform - Full-stack pharmacy management & delivery platform built with Next.js, Better Auth, Prisma, PostgreSQL. Awarded 2nd place at the University of Gondar hackathon.',
    role: ['Full-Stack Development', 'Better Auth', 'Prisma'],
    deliverables: ['Next.js Application', 'Operations Dashboard', 'Inventory & Order Management', 'Secure Authentication', 'Prisma Relational Layer', 'Award: 2nd Place - Hackathon'],
    link: 'https://github.com/JoHaile/pharmacy-inventory-and-delivery',
    repo: 'https://github.com/JoHaile/pharmacy-inventory-and-delivery',
    body: [
      'Full-stack pharmacy management & delivery platform built with the Next.js ecosystem.',
      'Developed an operations dashboard for inventory, order processing, and delivery management with secure Better Auth authentication and Prisma relational layer.',
      'Awarded 2nd place at the University of Gondar hackathon.',
    ],
    size: 'small',
  },
  {
    slug: 'car-rental',
    title: 'Car Rental Web-App',
    client: 'Self-initiated',
    category: 'Full-Stack Rental Platform',
    year: '2024',
    cover: '/images/portrait.jpg',
    tint: '#d1e8e2',
    summary: 'Vehicle Reservation & Rental Platform - Full-stack rental platform built with Next.js, PostgreSQL/MySQL, and ShadCN UI with authentication, RBAC, automated transactional emails, and real-time rental updates.',
    role: ['Full-Stack Development', 'RBAC'],
    deliverables: ['Next.js Application', 'ShadCN UI Components', 'Role-Based Access Control', 'Automated Transactional Emails', 'Real-time Rental Updates', 'Reservation Data Architecture'],
    link: 'https://car-rental-puce-ten-74.vercel.app/',
    repo: 'https://github.com/JoHaile/car-rental',
    body: [
      'Full-stack rental platform built with Next.js, PostgreSQL/MySQL, and ShadCN UI.',
      'Implemented authentication, role-based access control, automated transactional emails, real-time rental updates, and reservation data architecture.',
    ],
    size: 'small',
  },
  {
    slug: 'typing-racer',
    title: 'Typing Speed Racer',
    client: 'Self-initiated',
    category: 'Desktop Application',
    year: '2022',
    cover: '/images/portrait.jpg',
    tint: '#e5e0d8',
    summary: 'JavaFX Desktop Typing Game with real-time typing-speed and accuracy tracking, scoring system, gameplay progression, and performance feedback.',
    role: ['Desktop Development', 'JavaFX', 'OOP'],
    deliverables: ['JavaFX Desktop Application', 'Real-time Speed & Accuracy Tracking', 'Scoring System', 'Gameplay Progression', 'Performance Feedback'],
    link: 'https://github.com/JoHaile/Typing-speed-racer',
    repo: 'https://github.com/JoHaile/Typing-speed-racer',
    body: [
      'Desktop typing game built with JavaFX.',
      'Developed real-time typing-speed and accuracy tracking with a responsive JavaFX interface, scoring system, gameplay progression, and performance feedback.',
    ],
    size: 'small',
  },
  {
    slug: 'career-guide-ai',
    title: 'Career Guide AI',
    client: 'Self-initiated',
    category: 'AI & EdTech',
    year: '2024',
    cover: '/images/portrait.jpg',
    tint: '#f3e8ff',
    summary: 'AI Career Planning & Interview Simulator - AI-powered career planning, skill-gap analysis, and interview-preparation platform with AI mentor, interactive simulations, and performance feedback.',
    role: ['Full-Stack Development', 'AI Integration'],
    deliverables: ['Next.js Application', 'LLM Integration', 'AI Mentor', 'Interview Simulator', 'Skill Gap Analysis'],
    link: 'https://career-guide-ai-nine.vercel.app/',
    repo: 'https://github.com/JoHaile/career-guide-ai',
    body: [
      'AI-powered career planning, skill-gap analysis, and interview-preparation platform.',
      'Developed an AI mentor that maps career paths, identifies actionable skill gaps, and creates interactive interview simulations with performance feedback.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Full-Stack Development',
    body: 'Building web applications with Next.js, React, and TypeScript for responsive interfaces and server-side rendering.',
  },
  {
    title: 'Backend & API Engineering',
    body: 'Designing REST APIs, Node.js/Express web servers, and scalable serverless functions.',
  },
  {
    title: 'Auth & Access Control',
    body: 'Implementing secure authentication (Better Auth, NextAuth, OAuth) and Role-Based Access Control (RBAC).',
  },
  {
    title: 'AI Model & API Integration',
    body: 'Connecting web platforms with LLM APIs, image classification models (CNNs), and Python services.',
  },
  {
    title: 'Database & Data Layer',
    body: 'Relational data modeling, SQL optimization, and ORM integration using Prisma, Drizzle, PostgreSQL, and MySQL.',
  },
  {
    title: 'Agile & Team Leadership',
    body: 'Facilitating Scrum ceremonies (stand-ups, sprint planning) and setting up automated CI/CD deployment pipelines.',
  },
]

export const testimonials = [
  {
    quote: 'Yohannes architected our multi-brand travel platform in Next.js and implemented secure Better Auth workflows flawlessly. Excellent code quality and speed.',
    name: 'Engineering Lead',
    company: 'Travel Ethiopia',
    role: 'Engineering',
  },
  {
    quote: 'As Scrum Master and developer, Yohannes coordinated daily stand-ups while building role-based authentication across student and admin apps. Dependable engineering.',
    name: 'Product Lead',
    company: 'EDit Educational Services PLC',
    role: 'Product',
  },
  {
    quote: 'Yohannes automated our build/deployment workflows with CI/CD and built accessible Next.js UI components quickly. Highly recommended for any dev team.',
    name: 'Senior Engineer',
    company: 'NextPulse Labs',
    role: 'Engineering',
  },
]

export const experience = [
  { period: 'January 2026 – Present', title: 'Travel Ethiopia & Enjoy Ethiopia', detail: 'Full-Stack Developer', description: 'Architected a multi-brand travel platform in Next.js, consolidating separate services into a scalable shared system. Developed end-to-end booking workflows with secure account authentication and email verification using Better Auth. Modeled booking, customer, and operational data in PostgreSQL with Prisma.' },
  { period: 'August 2025 – December 2025', title: 'EDit Educational Services PLC.', detail: 'Full-Stack Developer', description: 'Contributed to a three-application gamified learning platform serving students, parents, and administrators. Served as Scrum Master, facilitating daily stand-ups, sprint planning, and team coordination. Engineered secure authentication and role-based access across applications.' },
  { period: 'June 2024 – September 2024', title: 'NextPulse Labs', detail: 'Full-Stack Developer Intern', description: 'Delivered custom SaaS features using Next.js and Supabase. Automated build and deployment workflows with CI/CD. Created reusable, accessible interface components with Chakra UI and Mantine UI.' },
  { period: 'April 2023 – August 2023', title: 'University of Gondar', detail: 'Full-Stack Developer Intern', description: 'Developed an e-commerce application with the MERN stack. Created responsive interfaces with Tailwind CSS and interactive animations with Framer Motion. Designed and maintained REST APIs in Express.' },
  { period: 'May 2022 – September 2022', title: 'Oasis Infobyte', detail: 'Frontend Developer Intern', description: 'Developed an issue-tracking application with Next.js and MySQL. Implemented responsive, accessible interfaces using Radix UI and Tailwind CSS.' },
]

export const education = [
  { period: '2022 – 2026', title: 'Bachelor of Science in Computer Science', detail: 'University of Gondar • Gondar, Ethiopia', description: 'Relevant study: Software Engineering, Algorithms, Database Systems, Computer Networks, and Full-Stack Application Development.' },
  { period: 'Completed', title: 'Data Analytics & Cloud Engineering Program', detail: 'Datanomic • Professional Training', description: 'Practical training in Python, SQL, data visualization, cloud infrastructure, and scalable application deployment.' },
]

export const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod', 'React Hook Form', 'Radix UI', 'Chakra UI', 'Mantine UI', 'Framer Motion', 'GSAP'],
  backend: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'Drizzle'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  auth: ['Better Auth', 'NextAuth', 'OAuth', 'JWT', 'RBAC'],
  cloud: ['Vercel', 'Docker', 'Git', 'GitHub', 'CI/CD'],
  ai: ['Python', 'SQL', 'LLM Integration', 'CNNs', 'Image Classification', 'Data Analytics'],
}

export const skillsMatrix = {
  frontend: [
    { category: 'Client-Side & Architecture', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand'] },
    { category: 'Forms & UI', items: ['Zod', 'React Hook Form', 'Radix UI', 'Chakra UI', 'Mantine UI', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'Drizzle'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'] },
    { category: 'Auth & Cloud', items: ['Better Auth', 'NextAuth', 'OAuth', 'JWT', 'RBAC', 'Vercel', 'Docker', 'Git', 'GitHub', 'CI/CD'] },
    { category: 'AI & Data', items: ['Python', 'SQL', 'LLM Integration', 'CNNs', 'Image Classification', 'Data Analytics'] },
  ],
}

export const services2 = services