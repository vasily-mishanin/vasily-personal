import { Contact } from './mytypes';

export const myContacts: Contact[] = [
  {
    id: 'tel1',
    type: 'tel',
    image: './images/icon-phone-call.png',
    text: '+79204955345',
    link: 'tel:+79204955345',
  },
  {
    id: 'telegram',
    type: 'telegram',
    image: './images/icon-telegram-black.png',
    text: '@auvasya',
    link: 'https://t.me/auvasya',
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
