import {
  github,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  target,
  cec,
  vmware,
  vine,
  fastapi,
  questionMark,
  aiPhotoGen,
  threejs,
} from "../assets";

import { linkedin, twitter } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMediaLinks = [
  {
    index: 1,
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/diego-guisande-31575a158/",
  },
  {
    index: 2,
    name: "twitter",
    icon: twitter,
    link: "https://twitter.com/guisande4",
  },
  {
    index: 3,
    name: "Github",
    icon: github,
    link: "https://github.com/GuisandeGolfer",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Account Manager",
    company_name: "VMware Inc.",
    icon: vmware,
    iconBg: "#E6DEDD",
    date: "July 2021 - Present",
    points: [
      "Build and maintain strong relationships with key customers, acting as their primary point of contact for all technical matters related to VMware solutions.",
      "Provide expert technical guidance and support to customers, ensuring that their needs and expectations are met or exceeded.",
      "Collaborate with cross-functional teams within VMware to address customer issues, identify opportunities for improvement, and drive customer satisfaction and retention.",
      "Act as a trusted advisor to customers, providing strategic guidance on the use and optimization of VMware solutions, and helping them to achieve their business objectives.",
    ],
  },
  {
    title: "Student Assistant: Data Analyst",
    company_name: "California Energy Commission",
    icon: cec,
    iconBg: "#383E56",
    date: "Jan 2019 - July 2021",
    points: [
      "Developing and maintaining 3D web applications using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including Energy Analysts, IT Specialists, and other developers to create high-quality visualizations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Target Electronics Representative",
    company_name: "Target",
    icon: target,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - December 2018",
    points: [
      "Provide exceptional customer service by greeting and assisting customers in the electronics department, answering their questions and providing product recommendations.",
      "Demonstrate a deep knowledge of electronics products and stay up-to-date with the latest trends and technologies to provide customers with informed and relevant advice.",
      "Drive sales and meet performance targets by proactively engaging with customers, recommending additional products and services, and closing sales.",
      "Build strong relationships with customers by following up on purchases, resolving any issues, and providing ongoing support and assistance.",
    ],
  },

  {
    title: "Busser",
    company_name: "The Vine",
    icon: vine,
    iconBg: "#383E56",
    date: "Jan 2015 - August 2016",
    points: [
      "Maintain a high standard of cleanliness and hygiene in the restaurant by promptly clearing and sanitizing tables after guests have left.",
      "Provide outstanding support to the serving staff by assisting in the timely delivery of food and beverages to guests, ensuring a seamless and enjoyable dining experience.",
      "Display a keen attention to detail by anticipating guests' needs and refilling water glasses and other drinks in a timely and unobtrusive manner.",
      "Demonstrate a strong work ethic and a commitment to excellence by diligently and efficiently removing dirty dishes and utensils from tables and promptly returning them to the kitchen for cleaning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Diego proved me wrong.",
    name: "To Be Determined...",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Diego does.",
    name: "To Be Determined...",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Diego optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "To Be Determined...",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media Backend API",
    description:
      "a REST API built to support a fully functional social media website. Deployed with a Docker to the Cloud.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "fast-api",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: fastapi,
    source_code_link:
      "https://github.com/GuisandeGolfer/FCC-fully-featured-fastAPI",
  },
  {
    name: "AI Photo Generator",
    description:
      "a Vanilla JS app built with Vite.js that queries the OpenAI API with a request written by the user",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Vite.js",
        color: "pink-text-gradient",
      },
    ],
    image: aiPhotoGen,
    source_code_link:
      "https://github.com/GuisandeGolfer/fireship-pro-AI-Photo-Generator",
    live_site_link: "https://photo-generator-by-diego.netlify.app/",
  },
  {
    name: "To Be Determined",
    description: "To Be Determined",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: questionMark,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaLinks,
};
