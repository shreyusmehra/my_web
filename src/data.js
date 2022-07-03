import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export const projects = [
  {
    id: "FirstProject",
    name: "Food App",
    Github: "https://www.github.com",
    techstack: "MERN Stack",
    description:
      "Food App is my ongoing project, it uses ReactJS for frontend and nodeJS(express) for backend and mongodb as database. You can add new food items to the database, get food items, delete food items and update existing items.It has authenication and authorization and user which has correct id and password will be allowed to edit items in the database.",
  },
  {
    id: "SecondProject",
    name: "Recipe App",
    Github: "https://www.github.com",
    techstack: "ReactJS",
    description:
      "Recipe App is a web app which is made by using ReactJS, it has dummy login/signup page ,you can store your recipes in it.",
  },
  {
    id: "ThirdProject",
    name: "Todo App",
    Github: "https://www.github.com",
    techstack: "ReactJS",
    description:
      "Todo App is a simple web app in which can store your daily tasks and it can filter the tasks which are complete or not.",
  },
];

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.github.com",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

export const details = [
  {
    id: 1,
    title: "Short Version",
    description: "Just a Developer!",
  },
  {
    id: 2,
    title: "Perfect!",
    description:
      "Shreyus here, student at LPU, i specailize in react for frontend and node for backend (MERN Stack). For more check the skills below.",
  },
  {
    id: 3,
    title: "Too detailed",
    description:
      "Hey Shreyus here! Right Now pursuing Bachelor in Technology in Computer Science and Engineering from LPU. Qualified as a Full Stack Developer and also have interests in learning about new technologies that are revolutionalizing the digital world. I have achieved a sense of commitment and comprehensiveness towards anything and everything that I take up professionally. Acing communication skills, Bosting management and learning new skills are some of the knacks that I have been able to acquire with time and I still continue to grow and learn in whatever ways I can.",
  },
];

export const techStack = [
  {
    id: 1,
    name: "Basic Frontend",
    description: "HTML5 and CSS3",
    icon: <ImHtmlFive />,
  },
  {
    id: 2,
    name: "JS Developer",
    description: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    name: "React Developer",
    description: "ReactJS (Frontend)",
    icon: <FaReact />,
  },
  {
    id: 4,
    name: "API Developer",
    description: "NodeJS and Express (Backend)",
    icon: <FaNodeJs />,
  },
  {
    id: 5,
    name: "Non-relational Databases",
    description: "MongoDB (NoSql)",
    icon: <DiMongodb />,
  },
];
