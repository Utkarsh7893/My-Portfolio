// ============================================================
// portfolioData.js — Single editable data file for the portfolio
// Edit this file to update all content across the site.
// ============================================================
import profileImg from '../img/final.png';

export const personalInfo = {
  name: "Utkarsh Raj",
  tagline: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "React.js Engineer",
    "Node.js Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ],
  email: "utkarshraj98723@gmail.com",
  phone: "+91 9219369399",
  location: "Punjab, India",
  photo: profileImg,
  github: "https://github.com/utkarsh7893",
  linkedin: "https://www.linkedin.com/in/utkarsh-raj-877bb4298/",
  instagram: "https://www.instagram.com/utkarsh.creates/", // Add your Instagram URL
  twitter: "https://x.com/jaycob4498", // Add your X (Twitter) URL
  youtube: "https://www.youtube.com/@Utkarsh-z8j/featured", // Add your YouTube URL
  resumeLink: "https://drive.google.com/file/d/12L6Pm0rOSEhsLwafH-rkYinAwPkcHnnj/view?usp=sharing", // Add a link to your hosted resume
  videoCvLink: "https://drive.google.com/file/d/1-lRWQLCtidmuBwvKXMmnKnpKUFHqP8Fl/view?usp=sharing", // Add a link to your Video CV
  bio: `I'm a Computer Science undergraduate at Lovely Professional University, passionate about building full-stack web applications that solve real-world problems. With hands-on experience in the MERN and PERN stacks, I love crafting responsive, user-centric interfaces paired with robust backend architectures. From IoT dashboards to blood donation networks and student finance platforms — I bring ideas to life with clean code and modern design.`,
};

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: [
      { name: "C/C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 75 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    category: "Frontend & Libraries",
    icon: "layout",
    items: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Laravel", level: 60 },
      { name: "Firebase", level: 70 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase DB", level: 70 },
      { name: "Oracle DB", level: 60 },
    ],
  },
  {
    category: "Developer Tools",
    icon: "tool",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "GitHub Desktop", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "Centsible",
    subtitle: "Expense Tracker",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Three.js", "JWT"],
    period: "Jan 2026 – May 2026",
    description:
      "A full-stack student finance platform with JWT authentication, guest mode, and RESTful APIs for expenses, savings, and peer transactions.",
    highlights: [
      "Built responsive dashboard UI with Chart.js and Redux Toolkit featuring real-time balance tracking and monthly summaries.",
      "Designed a privacy-first, student-centric expense management system with multi-category tracking and mobile-friendly architecture.",
    ],
    // Add up to 5 screenshot URLs/paths for the project carousel
    screenshots: [
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777206958/yess_2026-04-26_at_6.03.05_PM_afe6f5.jpg", // Screenshot 1 — paste image URL here
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777206958/yess_2026-04-26_at_6.03.19_PM_i7wfyo.jpg", // Screenshot 2
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777206958/yess_2026-04-26_at_6.04.22_PM_vpjtjw.jpg", // Screenshot 3
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777206958/yess_2026-04-26_at_6.04.40_PM_yknbss.jpg", // Screenshot 4
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777206958/yess_2026-04-26_at_6.05.16_PM_o4gy5t.jpg", // Screenshot 5
    ],
    github: "https://github.com/Utkarsh7893/Centsible.git",
    live: "https://centsible-seven.vercel.app/", // Add your hosted/deployed project link
    color: "#00d4ff",
  },
  {
    title: "Rednova-BloodNetwork",
    subtitle: "Blood Donation Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap", "Three.js", "Google Maps API"],
    period: "Jul 2025 – Dec 2025",
    description:
      "A full-stack MERN blood donation platform with secure RESTful APIs and authenticated CRUD operations managing user records, medical data, and image retrieval.",
    highlights: [
      "Built a responsive, component-driven UI with modular pages — Dashboard, Donors, Blood Banks, Events — and optimized React Router navigation.",
      "Integrated Google Maps API for geolocation-based donor-recipient matching with real-time proximity calculations.",
    ],
    screenshots: [
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1776014517/yess_2026-04-12_at_10.41.43_PM_qliqyo.jpg", // Screenshot 1
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1776014518/yess_2026-04-12_at_10.43.46_PM_qbvqy0.jpg", // Screenshot 2
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1776014519/yess_2026-04-12_at_10.44.36_PM_sxjejw.jpg", // Screenshot 3
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1776014520/yess_2026-04-12_at_10.48.31_PM_sxafb3.jpg", // Screenshot 4
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1776014520/yess_2026-04-12_at_10.47.47_PM_rauaqk.jpg", // Screenshot 5
    ],
    github: "https://github.com/Utkarsh7893/RedNova-BloodNetwork.git",
    live: "https://rednovafrontend.vercel.app/",
    color: "#ff4757",
  },
  {
    title: "AgroSenseIoT",
    subtitle: "Smart Farming Dashboard",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    period: "Mar 2025 – Jun 2025",
    description:
      "A responsive IoT dashboard to monitor and visualize real-time environmental metrics — temperature, humidity, and soil moisture — for smart farming applications.",
    highlights: [
      "Developed a PHP/MySQL-based authentication system with modular, scalable MVC-style architecture.",
      "Architected the platform to support real-time IoT sensor integration, historical data analytics, and predictive insights.",
    ],
    screenshots: [
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777207145/yess_2026-04-26_at_6.07.54_PM_vix2sl.jpg", // Screenshot 1
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777207145/yess_2026-04-26_at_6.08.08_PM_ocbzfh.jpg", // Screenshot 2
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777207145/yess_2026-04-26_at_6.08.28_PM_gx9fv5.jpg", // Screenshot 3
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777207145/yess_2026-04-26_at_6.08.43_PM_pxkoxg.jpg", // Screenshot 4
      "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777207146/yess_2026-04-26_at_6.08.51_PM_b1hvvq.jpg", // Screenshot 5
    ],
    github: "https://github.com/Utkarsh7893/AgroSenseIoT.git",
    live: "https://agrosenseiot.42web.io/",
    color: "#2ed573",
  },
];

export const experience = [
  {
    role: "EHS Trainer Intern",
    company: "Safety Circle",
    location: "India",
    period: "Feb 2026 – Mar 2026",
    logo: "https://res.cloudinary.com/dzrxrqks8/image/upload/v1777207402/Intern-logo_udx8gd.jpg", // Add company logo URL/path here
    link: "#", // Add proof/certificate link here
    detailedDescription:
      "During my internship at Safety Circle, I was responsible for delivering comprehensive Environment, Health, and Safety (EHS) training programs across major industrial facilities in India. I worked at prestigious locations including Adani Connex (housing Google & Microsoft Data Centers), BPCL, Sterling & Wilson, and Voltas. My training covered critical safety domains including Fire Safety, Electrical Safety, Hazard Identification & Risk Assessment (HIRA), Emergency Response protocols, Work at Height procedures, First Aid, Ergonomics, and 5S compliance frameworks. I coordinated end-to-end training logistics, managed stakeholder relationships, and delivered technical presentations to diverse audiences across industrial environments.",
    description: [
      "Delivered EHS training at Adani Connex (Google & Microsoft Data Centers), BPCL, Sterling & Wilson, and Voltas, covering Fire Safety, Electrical Safety, HIRA, Emergency Response, Work at Height, First Aid, Ergonomics, and 5S compliance frameworks pan-India.",
      "Coordinated end-to-end training operations across diverse industrial environments, driving EHS compliance, risk mitigation, and workplace safety standards through stakeholder management and technical presentation at scale.",
    ],
  },
];

export const certificates = [
  {
    title: "Cloud Infrastructure AI Foundation Associate",
    issuer: "Oracle",
    date: "Apr 2026",
    icon: "cloud",
    color: "#f97316",
    link: "https://drive.google.com/file/d/1Y1yulslNoXilOUycGDDLkw3eJmfpDAs8/view?usp=sharing#", // Add certificate verification link
  },
  {
    title: "Data Foundation Associate",
    issuer: "Oracle",
    date: "Apr 2026",
    icon: "database",
    color: "#f97316",
    link: "https://drive.google.com/file/d/1n68jEaUhQV1VZhwtoJ3MH1ijVEM3THSM/view?usp=sharing#", // Add certificate verification link
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "Apr 2025",
    icon: "network",
    color: "#3b82f6",
    link: "https://drive.google.com/file/d/1qKdDPx1tpn4l7QzcTiYt5yoqOe-k-UaT/view?usp=sharing", // Add certificate verification link
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "Aug 2024",
    icon: "cpu",
    color: "#0ea5e9",
    link: "https://drive.google.com/file/d/1Yjp3y7wzn4sjtJSVvNibtfJVJ2tDaAjL/view?usp=sharing", // Add certificate verification link
  },
];

export const achievements = [
  {
    title: "HackerRank",
    stat: "3★",
    description: "Problem Solving & Java badges",
    icon: "award",
    link: "https://www.hackerrank.com/profile/jaycob4498", // Add your HackerRank profile link
  },
  {
    title: "LeetCode",
    stat: "150+",
    description: "DSA problems solved",
    icon: "code",
    link: "https://leetcode.com/u/5MBav17D70/", // Add your LeetCode profile link
  },
  {
    title: "GeeksforGeeks",
    stat: "150+",
    description: "Coding score achieved",
    icon: "terminal",
    link: "https://www.geeksforgeeks.org/profile/jaycobcq8z", // Add your GFG profile link
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2023 – Present",
    grade: "CGPA: 7.5",
  },
  {
    degree: "Senior Secondary School – Science",
    institution: "Green Valley English School",
    location: "Uttar Pradesh, India",
    period: "Mar 2022 – Apr 2023",
    grade: "",
  },
  {
    degree: "Secondary School",
    institution: "Green Valley English School",
    location: "Uttar Pradesh, India",
    period: "Mar 2020 – Apr 2021",
    grade: "",
  },
];

export const blogPosts = [
  {
    title: "Why Every Student Should Build a Portfolio",
    excerpt:
      "In this post I share why having a personal portfolio website is a game-changer for landing internships and campus placements.",
    fullContent:
      "Building a portfolio is one of the most impactful things you can do as a student. It's not just about showcasing your projects — it's about demonstrating your ability to think, build, and communicate. Recruiters spend an average of 6 seconds on a resume, but a portfolio lets you tell your story on your own terms. Whether you're applying for internships, campus placements, or freelance gigs, a well-crafted portfolio sets you apart from the competition. Start with your best projects, add a personal touch, and keep iterating. Your portfolio is a living document of your growth as a developer.",
    image: "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777208867/blog-01_ze9au4.png", // Add a blog header image URL
    date: "Apr 2026",
    readTime: "5 min read",
    tags: ["Career", "Web Dev"],
    link: "#",
  },
  {
    title: "MERN vs PERN — Which Stack Should You Pick?",
    excerpt:
      "A practical comparison of MongoDB vs PostgreSQL in full-stack JavaScript apps based on my experience building Rednova and Centsible.",
    fullContent:
      "After building two full-stack applications — Rednova with MongoDB and Centsible with PostgreSQL — I've gained firsthand insight into the MERN vs PERN debate. MongoDB shines when you need flexible, schema-less data models and rapid prototyping. PostgreSQL excels at structured, relational data with complex queries and strong data integrity. For a blood donation platform where relationships between donors, recipients, and events mattered, MongoDB's document model worked well. For a finance app tracking expenses, savings goals, and peer transactions, PostgreSQL's ACID compliance and relational structure were essential. My advice? Learn both, and pick based on your project's data needs.",
    image: "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777208867/blog-02_amsxuz.png", // Add a blog header image URL
    date: "Mar 2026",
    readTime: "7 min read",
    tags: ["Full-Stack", "Databases"],
    link: "#",
  },
  {
    title: "Getting Started with Three.js in React",
    excerpt:
      "A beginner-friendly guide to adding stunning 3D visuals and particle effects to your React applications using Three.js.",
    fullContent:
      "Three.js opens up a world of creative possibilities for web developers. Adding 3D visuals, particle systems, and interactive animations to your React app can transform a simple portfolio or dashboard into an immersive experience. Start by understanding the Three.js scene, camera, and renderer fundamentals. Then learn to create geometries, materials, and lights. For React integration, you can use refs and useEffect hooks to manage the Three.js lifecycle. Start simple — a rotating cube or floating particles — and gradually add complexity like custom shaders, mouse interactions, and responsive resizing. The key is performance: always dispose of geometries and materials, use requestAnimationFrame, and limit particle counts on mobile.",
    image: "https://res.cloudinary.com/dzrxrqks8/image/upload/q_auto/f_auto/v1777208867/blog-03_azqb65.png", // Add a blog header image URL
    date: "Feb 2026",
    readTime: "6 min read",
    tags: ["React", "Three.js"],
    link: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// Code snippets displayed as floating decorations
export const codeSnippets = [
  `const app = express();
app.listen(3000, () => {
  console.log("Server running");
});`,
  `SELECT * FROM users
WHERE role = 'admin'
ORDER BY created_at DESC;`,
  `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1)
       + fibonacci(n-2);
}`,
  `import React from 'react';
const App = () => (
  <div className="app">
    <h1>Hello World</h1>
  </div>
);`,
  `router.post('/api/auth',
  async (req, res) => {
    const token = jwt.sign(
      { id: user.id },
      SECRET_KEY
    );
});`,
  `db.collection("donors")
  .find({ bloodType: "O+" })
  .sort({ distance: 1 })
  .limit(10);`,
];
