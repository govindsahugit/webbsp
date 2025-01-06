import { image } from "framer-motion/client";
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
  logo,
  iphone,
  earth,
  webgi,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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

const services = [
  {
    title: "Website Designing",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "Website Maintenance",
    icon: backend,
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
    title: "iPhone 14 Pro",
    company_name: "Starbucks",
    icon: logo,
    iconBg: "#1d1836",
    date: "March 2020 - April 2021",
    image: iphone,
    link: "iphonewebgi.netlify.app",
    points: [
      "A website dedicated to the iPhone 14 Pro showcases a stunning 3D model of the device, complemented by breathtaking scrolling animations. This website does not include additional features; it serves solely as a demonstration of how scrolling animations can be implemented and customized for various websites.",
    ],
  },
  {
    title: "Countries API",
    link: "countriesapiearth.netlify.app",
    image: earth,
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#1d1836",
    date: "Jan 2021 - Feb 2022",
    points: [
      "This is a standard website that retrieves country data from an API and presents it in card format. Initially, the website appears conventional in light mode, but upon switching to dark mode, a stunning 3D model of Earth rotates in the background, accompanied by stars. I can implement this concept for your website tailored to your specific preferences.",
    ],
  },
  {
    title: "Portfolio",
    link: "govindsahu.netlify.app",
    image: portfolio,
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#1d1836",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A personal digital animated portfolio featuring a 3D PC model that is rotatable in 360 degrees, creating a stunning and impressive visual experience. Additionally, I have incorporated various 3D elements and animations that are exceptional. This portfolio is designed for developers, but I am capable of creating similar portfolios for any domain.",
    ],
  },
  {
    link: "webbspin.vercel.app",
    title: "Webbsp.in",
    image: webgi,
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#1d1836",
    date: "Jan 2022 - Jan 2023",
    points: [
      "This website features a stunning 3D model of a modern office, showcasing impressive scrolling animations, floating headings, scrolling text, and more. It serves as a source of inspiration for creating your own website.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const contackLinks = [
  {
    linkName: "INSTAGRAM",
    icon: `instagram`,
    styles: "flex gap-2 items-center",
    url: "https://www.instagram.com/webbsp.in/?igsh=MW9qdmZyZG9wcnVzNA%3D%3D#",
  },
  {
    linkName: "WHATSAPP",
    icon: `whatsapp`,
    styles: "flex gap-2 items-center",
    url: "https://wa.me/917067738849?text=Hi, I want to discuss with you about your service.",
  },
  {
    linkName: "EMAIL",
    icon: `mail`,
    styles: "flex gap-2 items-center",
    url: "mailTo:webbspdotin@gmail.com",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contackLinks,
};
