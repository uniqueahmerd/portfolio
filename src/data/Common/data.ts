import { BiLogoPostgresql, BiLogoPhp } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaPython, FaXTwitter } from "react-icons/fa6";
import { FaVuejs, FaLaravel, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import { SiFlutter, SiScrapy, SiSelenium } from "react-icons/si";

import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiRedis,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDjango,
  SiMysql,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import { ImLab } from "react-icons/im";

const skills = [
  // { id: 1, icon: BiLogoPhp, text: "PHP" },
  // { id: 2, icon: FaPython, text: "Python" },
  { id: 3, icon: IoLogoNodejs, text: "Node.js" },
  // { id: 4, icon: FaLaravel, text: "Laravel" },
  // { id: 5, icon: SiDjango, text: "Django" },
  { id: 6, icon: SiExpress, text: "Express" },
  { id: 7, icon: RiReactjsLine, text: "React" },
  { id: 8, icon: FaVuejs, text: "Vue.js" },
  { id: 9, icon: RiNextjsLine, text: "Next.js" },
  // { id: 10, icon: SiFlutter, text: "Flutter" },
  // { id: 11, icon: FaAws, text: "AWS" },
  { id: 12, icon: SiMysql, text: "MySQL" },
  { id: 13, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 14, icon: SiMongodb, text: "MongoDB" },
  // { id: 15, icon: SiRedis, text: "Redis" },
  // { id: 16, icon: SiScrapy, text: "Scrapy" },
  // { id: 17, icon: SiSelenium, text: "Selenium" },
  { id: 18, icon: DiJavascript, text: "JavaScript" },
  { id: 19, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 20, icon: RiTailwindCssFill, text: "Tailwind" },
  // { id: 21, icon: FaDocker, text: "Docker" },
  { id: 22, icon: FaGitAlt, text: "Git" },
  { id: 23, icon: FaGithub, text: "GitHub" },
  // { id: 24, icon: VscTerminalLinux, text: "Linux" },
  { id: 25, icon: SiPostman, text: "Postman" },
];
const projects = [
  {
    id: 1,
    img: "/assets/images/project/ecommerce page.png",
    title: "E-commerce ",
    status: true,
    content:
      "A fully functional e-commerce platform that allows users to browse products, add items to a cart, and complete purchases through a secure checkout system. The website includes product listings, user authentication, and order management, providing a smooth and user-friendly online shopping experience.",
    url: "https://e-commerce-gamma-ashy.vercel.app/",
    github: "",
    skill: [
      "React",
      "Redux",
      "Express",
    ],
    preview: "https://e-commerce-gamma-ashy.vercel.app/",
  },
  {
    id: 2,
    img: "/assets/images/project/product management.png",
    title: "Project Management App",
    status: true,
    content:
      "A web application that helps users plan, organize, and track projects by creating tasks, setting priorities, and monitoring progress. The app supports user authentication and provides a simple, efficient way for teams or individuals to manage their work.",
    url: "https://project-management-gs.vercel.app/",
    github: "",
    skill: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    preview: "https://project-management-gs.vercel.app/",
  },
  {
    id: 3,
    img: "/assets/images/project/bizmate.png",
    title: "biz-mate.com",
    status: true,
    content:
      "BizMate is a MERN web app that helps workers generate Quotations and traders create Stock Lists with clean, branded PDFs. It features user authentication, profile management, and a dashboard for easy access to documents. Users can customize templates, save data, and download PDFs, streamlining business documentation.",
    github: "",
    url: "https://biz-mate-pi.vercel.app/",
    skill: ["Node.js", "Express", "React", "Tailwind", "PostgreSQL", "Sequelize ORM"],
    preview: "https://biz-mate-pi.vercel.app/",
  },
];

const hireText =
  "I'm currently available for freelance projects and consulting opportunities. With 1 years of experience in full-stack development, I can help bring your ideas to life with scalable, efficient solutions.";

const emailLink =
  "mailto:ahmadusman1809@gmail.com?subject=Interested%20in%20Working%20Together";

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "X",
    link: "https://x.com/Uniqueahmerdy10",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://https://github.com/uniqueahmerd",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/ahmad-usman-dev",
    icon: FaLinkedinIn,
  },
];

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work.";

export { projects, emailLink, skills, hireText, navLinks, supportText };
