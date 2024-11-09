import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, HTML, CSS, Sass, Tailwind, Redux and etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 May - 2024 Jul",
    role: "Frontend Developer",
    company: "All Pay Way",
    description: `Creating billing systems, document management, authorization and user management systems with admin panels and  landing pages websites using React.js, Typescript, Javascript, HTML, Tailwind Css, React query, React hook form, Redux.js (toolkit),  Vite, Git, Figma. Worked collaboratively with other team members: backend developers, frontend developer and designer.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React.js",
      "Tailwind",
      "React Query",
      "React Hook Form",
      "Redux.js",
      "Figma",
      "Gitlab",
      "Github",
    ],
  },
  {
    year: "2022 Oct - 2023 Feb",
    role: "Fullstack Developer Intern",
    company: "Redberry",
    description: `Worked on 4 projects using React.js, Next,js, Javascript, Typescript, Php, Laravel, HTML, Css, Tailwind, React Hook Form, React Query. Working with mentors and code reviewers, I built responsive, user-friendly applications with clean code and architecture.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React.js",
      "Laravel",
      "mySQL",
      "Tailwind",
      "React Query",
      "React Hook Form",
      "Redux.js",
      "Figma",
      "Github",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MERN Movie Quotes",
    image: project1,
    description:
      "Movie Quotes is a bilingual (Georgian-English) responsive website where users can register, log in, and view movies and quotes. After registration, users activate their accounts via email or Google Authentication. Once authorized, users can add movies and quotes, which appear in endlessly scrolling newsfeed. Quotes can be liked and commented on, with real-time notifications for the author. Users can view and search for movies and quotes they've added, update their profile, change their password, username, and avatar, and reset their password if forgotten.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "React Hook Form",
      "Socket.io",
      "JWT",
      "Firebase",
      "Redux.js",
      "Framer Motion",
      "I18Next",
    ],
    github: "https://github.com/datomaluta/mern-movie-quotes",
    live: "https://mern-movie-quotes.onrender.com",
  },
  {
    title: "Customer management and Billing system",
    image: project2,
    description:
      "A complex platform that combines customer management, billing system and document management capabilities in one space.Registering users, creating roles, assigning roles, displaying transactions, executing transactions, viewing statistics and data with charts, documents, document templates, document electronic signature, editing and printing functions.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Hook Form",
      "Redux.js",
    ],
  },
  {
    title: "Studypay.ge - Digital accounting and payment",
    image: project3,
    description:
      "Studypay is a digital accounting and payment platform for educational organizations that simplifies daily operations and financial transactions.The project consists of several parts. The platform has a panel with different actions for legal entities and physical entities.In addition, the platform has an admin panel from where everything is controlled and managed",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Hook Form",
      "Redux.js",
    ],
  },
  {
    title: "MERN Blog",
    image: project4,
    description:
      "The project is a blogging platform with two roles: Admin and User. Users can register, log in, post content, and manage their posts on a personal dashboard. They can also comment, like, edit, and delete their own comments. Admins have full access to all content and user information, allowing them to manage and edit or delete any post or comment. Unauthorized users will be redirected to the login page. The site will support dark/light modes and Google authentication.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "React Hook Form",
      "JWT",
      "Firebase",
      "Redux.js",
      "Framer Motion",
    ],
    live: "https://mern-blog-gg9u.onrender.com/",
    github: "https://github.com/datomaluta/mern-blog",
  },
  {
    title: "Istore e-commerce",
    image: project5,
    description:
      "E-commerce website for computers. The app language is Georgian and english. It has a search functionality, dark/light theme mode, and also an admin functionality. If you register and authenticated with laravel sanctum, you will have permission to access the admin panel and create, edit, or delete product.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Laravel",
      "mySQL",
      "Tailwind",
      "React Hook Form",
      "Framer Motion",
    ],
    live: "https://istore-maluta.netlify.app/",
    github_front: "https://github.com/datomaluta/istore-front.git",
    github_back: "https://github.com/datomaluta/istore-back.git",
  },
  {
    title: "News Site",
    image: project6,
    description:
      "A news site is a platform where you can read news about politics, society, and sports. The app language is Georgian. It features a search functionality, dark/light theme mode, and also an admin functionality. If you register and authenticated with laravel sanctum, you will have permission to access the admin panel and create, edit, or delete news.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Laravel",
      "mySQL",
      "Tailwind",
      "React Hook Form",
    ],
    live: "https://youtu.be/n_Fbo5jJ4DE",
    github_front: "https://github.com/datomaluta/inews-front.git",
    github_back: "https://github.com/datomaluta/inews-back.git",
  },
  {
    title: "Coronatime",
    image: project7,
    description:
      "Coronatime - is a platform where we can register, go through authorization (as well as restore the password if we have forgotten it) and see what the situation is today in the countries of the world.",
    technologies: ["Laravel", "JavaScript", "Tailwind", "Spatie"],
    live: "https://youtu.be/vEtbZ80SjEA",
    github: "https://github.com/datomaluta/coronatime-redberry-project",
  },
  {
    title: "Farmvest - Responsive Landing page",
    image: project8,
    description:
      "Farmwest site - responsive landing page, where are several sections and interesting layouts.",
    technologies: ["HTML", "CSS"],
    live: "https://farmvest-malia.netlify.app/",
    github: "https://github.com/datomaluta/Farmvest",
  },
  {
    title: "Natours - Responsive Landing page",
    image: project9,
    description:
      "Farmwest site - responsive landing page, where beautiful animations are used.",
    technologies: ["HTML", "SCSS/SASS"],
    live: "https://idyllic-sundae-85639b.netlify.app/",
    github: "https://github.com/datomaluta/natours.git",
  },
  {
    title: "Omnifood - Responsive Landing page",
    image: project10,
    description:
      "Farmwest site - responsive landing page, წhere modern style and all the details that a landing page needs are used.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://maliafood.netlify.app/",
    github: "https://github.com/datomaluta/omnifood",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+995 591 921 669 ",
  email: "datomaluta@gmail.com",
};
