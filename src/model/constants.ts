import { Certification, Contact, Language, Skill } from './mytypes';

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
];

export const skills__languages: Language[] = [
  { id: 'ru', text: 'Russian', image: './images/russia.png', level: 'Native' },
  { id: 'en', text: 'English', image: './images/usa.png', level: 'B2' },
];

export const certifications: Certification[] = [
  {
    id: '202202',
    image: './images/certif-react-udemy-2022.jpeg',
    text: 'React - The complete Guide, Academind, Udemy',
    description: '',
    link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  },
  {
    id: '202209',
    image: './images/certif-rss-frontend-2022.jpg',
    text: 'RS School(feat.EPAM) - JS/Frontend 2022Q1 (score 48/888)',
    description: '',
    link: 'https://rs.school/',
  },
  {
    id: '202212',
    image: './images/certif-rss-react-2022.jpg',
    text: 'RS School(feat.EPAM) - React 2022Q3',
    description: '',
    link: 'https://rs.school/',
  },
  {
    id: '202302',
    image: './images/certif-meta-frontend-2023.png',
    text: 'Meta Front-End Developer by Meta on Coursera',
    description: '',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/3FRYT7USD7PJ',
  },
  {
    id: '202302',
    image: './images/meta-front-end-developer-certificate.png',
    text: 'Meta Front-End Developer by Meta on Coursera',
    description: '',
    link: 'https://www.credly.com/badges/b1a219b2-9ec0-45bd-b79b-da32b172170a/public_url',
  },
  {
    id: '20230227',
    image: './images/certif-2022-02-27-udemy-typescript.jpg',
    text: 'Understanding TypeScript',
    description:
      'Understanding TypeScript by Maximilian Schwarzmüller, Academind',
    link: 'https://www.udemy.com/course/understanding-typescript/',
  },
  {
    id: '20230417',
    image: './images/certificate-nextjs-udemy-academind-vasily-mishanin.jpg',
    text: ' Next.js',
    description:
      'Next.js & React - The Complete Guide (incl. Two Paths!) by Maximilian Schwarzmüller',
    link: 'https://www.udemy.com/certificate/UC-fdbaa711-4002-4fed-83bf-52e65affa010/',
  },
];

export const myContacts: Contact[] = [
  {
    id: 'tel1',
    type: 'tel',
    image: './images/icon-phone-call.png',
    text: '+79204955345',
    link: 'tel:+79204955345',
  },
  {
    id: 'tel2',
    type: 'tel',
    image: './images/icon-phone-call.png',
    text: '+996703155666',
    link: 'tel:+996770119715',
  },
  {
    id: 'whatsapp',
    type: 'whatsapp',
    image: './images/icon-whatsapp-black.png',
    text: '+79204955345',
    link: 'https://wa.me/+79204955345',
  },
  {
    id: 'telegram',
    type: 'telegram',
    image: './images/icon-telegram-black.png',
    text: '@auvasya',
    link: 'https://t.me/auvasya',
  },
  {
    id: 'email',
    type: 'email',
    image: './images/icon-email.png',
    text: 'vasilymishanin@gmail.com',
    link: 'mailto:vasilymishanin@gmail.com',
  },
  // {
  //   id: "location",
  //   type: "location",
  //   image: "./images/icon-pin.png",
  //   text: "Voronezh",
  //   link: "https://goo.gl/maps/oZb5fEU7mtJoDygc9",
  // },
  {
    id: 'linkedin',
    type: 'social',
    image: './images/icon-linkedin.png',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vasilymishanin',
  },
  {
    id: 'github',
    type: 'social',
    image: './images/icon-github.png',
    text: 'GitHub',
    link: 'https://github.com/vasily-mishanin',
  },
];
