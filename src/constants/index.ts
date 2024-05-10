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
  instagram,
  unity,
  techedge,
  lastminute,
  extra,
} from "../assets";
import type { Experience } from "../components/Experience";
import type { Testimonial } from "../components/Feedbacks";
import type { Project } from "../components/Works";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: unity,
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
    name: "Unity",
    icon: unity,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "lastminute.com",
    icon: lastminute,
    iconBg: "#383E56",
    date: "October 2021 - now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: instagram,
    iconBg: "#383E56",
    date: "Dec 2020 - Jul 2021",
    points: [
      "Develop and maintain App using React Native and other related technologies.",
      "Deploy and publish on both Play Store and Apple Store.",
      "Instagram API integration.",
      "Google Maps API integration.",
      "Local push notifications.",
      "Remote push notifications.",
      "Chat system integration.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Extra.it",
    icon: extra,
    iconBg: "#383E56",
    date: "Oct 2020 - Jul 2021",
    points: [
      "Develop multiple website hosting online conferences.",
    ],
  },
  {
    title: "Unity Developer",
    company_name: "Haptica SRL",
    icon: unity,
    iconBg: "#383E56",
    date: "Oct 2019 - Dec 2019",
    points: [
      "Android AR app development.",
      "Marker detection",
      "AR visualization of animated 3D objects.",
      "Windows Application dashboard with SQL db integration.",
      "UDP communication between App and dashboard.",
    ],
  },
  {
    title: "Unity Developer",
    company_name: "SoNi SRL",
    icon: unity,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Android AR game development.",
      "Dreamglass AR glasses integration.",
      "Vive sensor integration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Francy Solutions",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Nov 2019",
    points: [
      "ASP.NET Core Application developing and maintainance.",
      "ASP.NET WebForms Application developing and maintainance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Techedge Group",
    icon: techedge,
    iconBg: "#FFFFFF",
    date: "Sep 2017 - Oct 2019",
    points: [
      "SQL Datawarehouse management (advanced queries, stored procedures and database architecture)",
      "Business intelligence ETL development (Microsoft technologies)",
      "Advanced data entry techniques",
      "Microsoft Excel expert and plugin development",
      ".NET desktop development",
      "ReactJS + Typescript Frontend development",
      "Node JS Backend development",
      ".NET Core Backend development",
      ".NET Framework Backend development",
    ],
  },
];

const testimonials: Testimonial[] = [
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

const projects: Project[] = [
  {
    name: "The House Farmer",
    description:
      "Web-based platform that allows the user to manage their crops with automation of the plant's life cycle.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ionic",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ades Consulting",
    description:
      "Web-based application that allows the management of a factory's warehouse and inventory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ionic",
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
    name: "Visioni Digitali",
    description:
      "AR application for Luxottica for in-store promotion managed by hostesses of a new line of glasses.",
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
];

export { services, technologies, experiences, testimonials, projects };
