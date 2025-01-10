import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about",
  },
  {
    id: "work",
    title: "Work",
    link: "#work",
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
  {
    id: "telegram",
    title: "Telegram",
    link: "https://t.me/MetaXRP_Portal",
    external: true,
  },
  {
    id: "x",
    title: "X",
    link: "https://x.com/MetaXRP_AI",
    external: true,
  },
  {
    id: "buy",
    title: "Buy Now",
    link: "https://firstledger.net",
    external: true,
  },
];

const services = [
  {
    title: "AI Research & Development",
    icon: web,
  },
  {
    title: "Metaverse Architecture",
    icon: mobile,
  },
  {
    title: "XRPL Integration",
    icon: backend,
  },
  {
    title: "Smart Contract Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Research Engineer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing advanced AI models for metaverse interactions and virtual environments",
      "Implementing natural language processing for AI-powered NPCs and virtual assistants",
      "Creating machine learning systems for real-time 3D environment optimization",
      "Leading research in AI-driven user behavior analysis and prediction",
    ],
  },
  {
    title: "XRPL Developer",
    company_name: "Ripple",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Building decentralized applications and smart contracts on XRPL",
      "Developing secure transaction systems for virtual asset trading",
      "Implementing tokenization solutions for metaverse assets",
      "Creating cross-chain bridges and interoperability protocols",
    ],
  },
  {
    title: "Metaverse Architect",
    company_name: "Virtual Worlds Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Designing and developing immersive 3D environments for the metaverse",
      "Creating scalable virtual world infrastructure and networking systems",
      "Implementing WebXR standards for cross-platform compatibility",
      "Optimizing performance for large-scale user interactions",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Virtual Guide",
    description:
      "Advanced AI-powered virtual assistant system that provides interactive guidance in the metaverse, featuring natural language processing and contextual awareness for immersive user experiences.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "xrpl",
        color: "green-text-gradient",
      },
      {
        name: "webxr",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "XRPL Asset Bridge",
    description:
      "Decentralized platform enabling secure trading and management of virtual assets on XRPL, with integrated verification systems for digital ownership in the metaverse.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "smart-contracts",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "MetaVerse Hub",
    description:
      "Comprehensive virtual world platform that combines AI-driven interactions, XRPL-based asset management, and immersive 3D environments for next-generation digital experiences.",
    tags: [
      {
        name: "metaverse",
        color: "blue-text-gradient",
      },
      {
        name: "xrpl",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
