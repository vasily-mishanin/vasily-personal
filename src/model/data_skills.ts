import { Language, Skill } from './mytypes';

export const skills__core: Skill[] = [
  {
    id: 'w3ecfw4',
    text: 'HTML',
    image: './images/html-5.png',
    description: ' HiperText Markup Language',
  },
  {
    id: 'hh5erd',
    text: 'CSS',
    image: './images/css-3.png',
    description: 'Cascade Style Sheets',
  },

  {
    id: '596yfbb',
    text: 'Javascript',
    image: './images/js.png',
    description: 'Javacript programming language',
  },
  {
    id: '596yfbbTS',
    text: 'Typescript',
    image: './images/typescript.png',
    description:
      'Typescript - a strict syntactical superset of JavaScript and adds optional static typing to the language',
  },
  {
    id: 'pwvm340fs',
    text: 'Git, GitHub',
    image: './images/git-github.png',
    description: 'Version control system ',
  },
];

export const skills__spec: Skill[] = [
  {
    id: 'hh5erscssd',
    text: 'SCSS',
    image: './images/sass.svg',
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets',
  },
  {
    id: 'react54it4',
    text: 'React JS',
    image: './images/react-icon.png',
    description: 'React - front-end JavaScript library',
  },
  {
    id: 'redux4356t',
    text: 'Redux',
    image: './images/redux_logo.png',
    description:
      'Redux - JavaScript library for managing and centralizing application state',
  },
  {
    id: 'redux4356t',
    text: 'Redux-toolkit',
    image: './images/redux-toolkit.webp',
    description: 'Redux Toolkit - toolset for efficient Redux development',
  },
  {
    id: 'webpack4bfv5t',
    text: 'Webpack',
    image: './images/webpack.png',
    description:
      'Webpack is a free and open-source module bundler for JavaScript.',
  },
  {
    id: 'nextjs34345dsvf',
    text: 'Next.js',
    image: './images/logo-next-js.svg',
    description: 'Next.js - the React Framework for production',
  },
  {
    id: 'graphql4069t4wncm1-3i4',
    text: 'GraphQL',
    image: './images/graphql.png',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
  },
];

export const skills__languages: Language[] = [
  { id: 'ru', text: 'Russian', image: './images/russia.png', level: 'Native' },
  { id: 'en', text: 'English', image: './images/usa.png', level: 'B2' },
];
