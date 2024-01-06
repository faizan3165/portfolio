import { om, pftp } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  angular,
  ror,
  postgres,
  blog,
  plane,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },

  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: postgres,
    name: "PostgreSQL",
    type: "Database",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Fullstack",
  },

  {
    imageUrl: angular,
    name: "Angular.js",
    type: "Frontend",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: ror,
    name: "Ruby-on-Rails",
    type: "Backend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Fullstack",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "PFTP",
    icon: pftp,
    iconBg: "#accbe1",
    date: "July 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Ruby-on-Rails Developer",
    company_name: "OMSolutionz",
    icon: om,
    iconBg: "#fbc3bc",
    date: "October 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },

  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/faizan3165",
  },

  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/faizanmehmoodthreeonesixfive",
  },
];

export const projects = [
  // {
  //   iconUrl: pricewise,
  //   theme: "btn-back-red",
  //   name: "Car Info App",
  //   description:
  //     "Developed a web application that shows information for different cars.",
  //   link: "https://car-vault.vercel.app",
  // },

  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },

  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a web app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://car-vault.vercel.app",
  },

  {
    iconUrl: blog,
    theme: "btn-back-pink",
    name: "Blog Posting App",
    description:
      "Built a web application for users to create an blog posts and sort them categorically, allowing them to converse through comments",
    link: "https://nextjs-blog-app-ten.vercel.app/",
  },

  {
    iconUrl: plane,
    theme: "btn-back-red",
    name: "Airline Ticketing App",
    description:
      "Built a full stack web app for air ticket bookings. With a sleek interface and user-friendly design, we simplify the process of finding, comparing, and securing the best flight deals for your dream destinations.",
    link: "https://alibrahimtravels.netlify.app/",
  },

  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },

  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://property-prowess.vercel.app/",
  },

  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
