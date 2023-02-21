import {
  Certification,
  Contact,
  Dictionary,
  Language,
  Project,
  Skill,
} from "./mytypes";

export const skills__core: Skill[] = [
  {
    id: "w3ecfw4",
    text: "HTML",
    image: "./images/html-5.png",
    description: " HiperText Markup Language",
  },
  {
    id: "hh5erd",
    text: "CSS",
    image: "./images/css-3.png",
    description: "Cascade Style Sheets",
  },

  {
    id: "596yfbb",
    text: "Javascript",
    image: "./images/js.png",
    description: "Javacript programming language",
  },
  {
    id: "596yfbbTS",
    text: "Typescript",
    image: "./images/typescript.png",
    description:
      "Typescript - a strict syntactical superset of JavaScript and adds optional static typing to the language",
  },
  {
    id: "pwvm340fs",
    text: "Git, GitHub",
    image: "./images/git-github.png",
    description: "Version control system ",
  },
];

export const skills__spec: Skill[] = [
  {
    id: "hh5erscssd",
    text: "SCSS",
    image: "./images/sass.png",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets",
  },
  {
    id: "react54it4",
    text: "React JS",
    image: "./images/react-icon.png",
    description: "React - front-end JavaScript library",
  },
  {
    id: "redux4356t",
    text: "Redux",
    image: "./images/redux_logo.png",
    description:
      "Redux - JavaScript library for managing and centralizing application state",
  },
  {
    id: "redux4356t",
    text: "Redux-toolkit",
    image: "./images/redux-toolkit.webp",
    description: "Redux Toolkit - toolset for efficient Redux development",
  },
  {
    id: "webpack4bfv5t",
    text: "Webpack",
    image: "./images/webpack.png",
    description:
      "Webpack is a free and open-source module bundler for JavaScript.",
  },
];

export const skills__languages: Language[] = [
  { id: "ru", text: "Russian", image: "./images/russia.png", level: "Native" },
  { id: "en", text: "English", image: "./images/usa.png", level: "B2" },
];

export const certifications: Certification[] = [
  {
    id: "202202",
    image: "./images/certif-react-udemy-2022.jpeg",
    text: "React - The complete Guide, Academind, Udemy",
    description: "",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    id: "202209",
    image: "./images/certif-rss-frontend-2022.jpg",
    text: "RS School(feat.EPAM) - JS/Frontend 2022Q1 (score 48/888)",
    description: "",
    link: "https://rs.school/",
  },
  {
    id: "202212",
    image: "./images/certif-rss-react-2022.jpg",
    text: "RS School(feat.EPAM) - React 2022Q3",
    description: "",
    link: "https://rs.school/",
  },
  {
    id: "202302",
    image: "./images/certif-meta-frontend-2023.png",
    text: "Meta Front-End Developer by Meta on Coursera",
    description: "",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/3FRYT7USD7PJ",
  },
  {
    id: "202302",
    image: "./images/meta-front-end-developer-certificate.png",
    text: "Meta Front-End Developer by Meta on Coursera",
    description: "",
    link: "https://www.credly.com/badges/b1a219b2-9ec0-45bd-b79b-da32b172170a/public_url",
  },
];

export const projects: Project[] = [
  {
    id: "rs_lang",
    image: "./images/rs-lang.png",
    text: "RS-Lang",
    description:
      "Web app for learning English. Created in collaboration inside small team. Tools: TS, React JS, React Location, Redux Toolkit, Chart.js, Post CSS, Tailwind CSS, HeroIcons.",
    link: "https://github.com/vasily-mishanin/rs-lang",
  },
  {
    id: "giraff",
    image: "./images/giraff.png",
    text: "GirAff",
    description:
      "Kanban-like Management App with Drag&Drop features. Tools: TS, React, Redux Toolkit, React Router 6.4, React Hook Form, MUI, React Beautiful DND, i18next, SCSS.",
    link: "https://github.com/vasily-mishanin/rss-management-app",
  },
  {
    id: "little_lemon",
    image: "./images/little-lemon.png",
    text: "Little Lemon",
    description:
      "A restaurant website. Tools: TS, React, React Router, Formik + Yup, SCSS.",
    link: "https://github.com/vasily-mishanin/little-lemon",
  },
  {
    id: "virtual_keyboard",
    image: "./images/virtual-keyboard.png",
    text: "Virtual Keyboard",
    description: "Vanilla JS, HTML and CSS.",
    link: "https://github.com/vasily-mishanin/virtual-keyboard",
  },
  {
    id: "readbook",
    image: "./images/readbook.png",
    text: "Readbook",
    description:
      "Web app for managing books reading, frontend for OpenLibrary API.",
    link: "https://github.com/vasily-mishanin/readbook_dataart",
  },
  {
    id: "css_mem_slider",
    image: "./images/css-mem-slider.png",
    text: "Mem Slider",
    description: "Made with HTML and CSS only.",
    link: "https://github.com/vasily-mishanin/cssMemSlider",
  },
];

export const myContacts: Contact[] = [
  {
    id: "tel1",
    type: "tel",
    image: "./images/icon-phone-call.png",
    text: "+79204955345",
    link: "tel:+79204955345",
  },
  {
    id: "tel2",
    type: "tel",
    image: "./images/icon-phone-call.png",
    text: "+996770119715",
    link: "tel:+996770119715",
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    image: "./images/icon-whatsapp-black.png",
    text: "+79204955345",
    link: "https://wa.me/+79204955345",
  },
  {
    id: "telegram",
    type: "telegram",
    image: "./images/icon-telegram-black.png",
    text: "@auvasya",
    link: "https://t.me/auvasya",
  },
  {
    id: "email",
    type: "email",
    image: "./images/icon-email.png",
    text: "vasilymishanin@gmail.com",
    link: "mailto:vasilymishanin@gmail.com",
  },
  // {
  //   id: "location",
  //   type: "location",
  //   image: "./images/icon-pin.png",
  //   text: "Voronezh",
  //   link: "https://goo.gl/maps/oZb5fEU7mtJoDygc9",
  // },
  {
    id: "linkedin",
    type: "social",
    image: "./images/icon-linkedin.png",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/vasilymishanin",
  },
  {
    id: "github",
    type: "social",
    image: "./images/icon-github.png",
    text: "GitHub",
    link: "https://github.com/vasily-mishanin",
  },
];

export const dictionary: Dictionary = {
  mode: "en",
  en: {
    greeting: "Hi! I'm Vasily",
    specialization: "FRONTEND DEVELOPER",
    skills: "SKILLS",
    core: "CORE",
    tools: "LIBS, TOOLS",
    languages: "LANGUAGES",
    cert: "CERTIFICATIONS",
    projects: "SOME OF MY PROJECTS",
    other_projects: "Other projects on my GitHub",
    contactme: "CONTACT ME",
    download: "download resume",
    copyright: "made on Vite with vanilla HTML, CSS and TS",
    description__rs_lang:
      "Web app for learning English. Created in collaboration inside small team. Tools: TS, React JS, React Location, Redux Toolkit, Chart.js, Post CSS, Tailwind CSS, HeroIcons.",
    description__giraff:
      "Kanban-like Management App with Drag&Drop features. Tools: TS, React, Redux Toolkit, React Router 6.4, React Hook Form, MUI, React Beautiful DND, i18next, SCSS.",
    description__little_lemon:
      "A restaurant website. Tools: TS, React, React Router, Formik + Yup, SCSS.",
    description__virtual_keyboard: "Vanilla JS, HTML and CSS.",
    description__readbook:
      "Web app for managing books reading, frontend for OpenLibrary API.",
    description__css_mem_slider: "Made with HTML and CSS only.",
  },
  ru: {
    greeting: "Привет! Я Василий",
    specialization: "ФРОНТЕНД РАЗРАБОТЧИК",
    skills: "НАВЫКИ",
    core: "БАЗА",
    tools: "БИБЛИОТЕКИ, ИНСТРУМЕНТЫ",
    languages: "ЯЗЫКИ",
    cert: "СЕРТИФИКАТЫ",
    projects: "НЕКОТОРЫЕ ИЗ МОИХ ПРОЕКТОВ",
    other_projects: "Другие мои проекты на GitHub",
    contactme: "СВЯЖИТЕСЬ СО МНОЙ",
    download: "скачать резюме",
    copyright: "сделано на Vite и чистых HTML, CSS, TS",
    description__rs_lang:
      "Веб-приложение для изучения английского. Создано внутри небольшой команды разработчиков. Инструменты: TS, React JS, React Location, Redux Toolkit, Chart.js, Post CSS, Tailwind CSS, HeroIcons.",
    description__giraff:
      "Веб-приложение по типу Канбан-доски для организации процессов. Инструменты: TS, React, Redux Toolkit, React Router 6.4, React Hook Form, MUI, React Beautiful DND, i18next, SCSS.",
    description__little_lemon:
      "Веб сайт ресторана. Tools: TS, React, React Router, Formik + Yup, SCSS.",
    description__virtual_keyboard: "Написана на чистых JS, HTML и CSS.",
    description__readbook:
      "Веб-приложение для ведения списков книг, фронтенд для OpenLibrary API.",
    description__css_mem_slider: "Написано на HTML и CSS.",
  },
};
