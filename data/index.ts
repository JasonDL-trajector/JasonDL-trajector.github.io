export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize team collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SAAS app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b51.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-zinc-200",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modernized PhilHealth",
    des: "A modernized version of PhilHealth's website using React Typescript with Material UI",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    jump: "/philhealth-modernized",
    link: "https://github.com/JasonDL-trajector/PhilHealth-Modernized",
  },
  {
    id: 2,
    title: "Replica",
    des: "A web application built with ReactJS that serves as an AI Chatbot similar to ChatGPT. It integrates with the OpenAI API to provide users with a conversational AI experience.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    jump: "/replica",
    link: "https://github.com/JasonDL-trajector/Replica",
  },
  {
    id: 3,
    title: "FormEase",
    des: "a ReactJS-based web application that integrates with the Notion API to create and manage forms. The application allows users to design custom forms and store submitted data in a Notion database.",
    img: "/formease.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    jump: "/formease",
    link: "https://github.com/JasonDL-trajector/ReactNotion",
  },
  {
    id: 4,
    title: "Kabet Chats",
    des: "Recreated a popular chat app with modern styling, user authentication, and file uploads using React.js",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    jump: "/kabet-chats",
    link: "https://github.com/JasonDL-trajector/Kabet-Chats",
  },
];

export const testimonials = [
  {
    quote:
      "I've been working with Emmanuel during the half of his internship and I have a pleasure to work with him. In his assigned role as team leader of the application engineering interns team, he really shows what should be a team leader and I am very happy for the successful project that has been done under their team. I am very impressed with the software development skills he has and I am confident to highly recommend him for any future endeavors and companies that he will be working with in the future.",
    name: "Nick De Cilio",
    title: "IT CRM Specialist/Consultant | IT Executive Officers",
  },
 
];

export const companies = [
  {
    id: 1,
    name: "Trajector",
    img: "/trajector-logo.png",
  },
  {
    id: 2,
    name: "FourPointZero",
    img: "/fourpointzero_inc_logo.png",
  },
  
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer I",
    company: "Trajector",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Applications Engineering Lead",
    company: "Trajector",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "FourPointZero, Inc.",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Fullstack Developer",
    company: "Capstone Team",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JasonDL-trajector",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/jsndlrx",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jsndlr/",
  },
];