import { Language, Skill } from "./mytypes";

export const skills__core: Skill[] = [
  {
    id: "w3ecfw4",
    text: "HTML",
    image: "./html-5.png",
    description: " HiperText Markup Language",
  },
  {
    id: "hh5erd",
    text: "CSS",
    image: "./css-3.png",
    description: "Cascade Style Sheets",
  },

  {
    id: "596yfbb",
    text: "Javascript",
    image: "./js.png",
    description: "Javacript programming language",
  },
  {
    id: "596yfbbTS",
    text: "Typescript",
    image: "./typescript.png",
    description:
      "Typescript - a strict syntactical superset of JavaScript and adds optional static typing to the language",
  },
  {
    id: "pwvm340fs",
    text: "Git, GitHub",
    image: "./git-github.png",
    description: "Version control system ",
  },
];

export const skills__spec: Skill[] = [
  {
    id: "hh5erscssd",
    text: "SCSS",
    image: "./sass.png",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets",
  },
  {
    id: "react54it4",
    text: "React JS",
    image: "./react-icon.png",
    description: "React - front-end JavaScript library",
  },
  {
    id: "redux4356t",
    text: "Redux",
    image: "./redux_logo.png",
    description:
      "Redux - JavaScript library for managing and centralizing application state",
  },
  {
    id: "redux4356t",
    text: "Redux-toolkit",
    image: "./redux-toolkit.webp",
    description: "Redux Toolkit - toolset for efficient Redux development",
  },
  {
    id: "webpack4bfv5t",
    text: "Webpack",
    image: "./webpack.png",
    description:
      "Webpack is a free and open-source module bundler for JavaScript.",
  },
];

export const skills__languages: Language[] = [
  { id: "ru", text: "Russian", image: "./russia.png", level: "Native" },
  { id: "en", text: "English", image: "./usa.png", level: "B2" },
];
