import { myContacts } from '../../../model/data_contacts';
import { Contact } from '../../../model/mytypes';
import resume_en from '/src/resume/resume-mishanin-eng.pdf';
import resume_ru from '/src/resume/resume-mishanin-ru.pdf';

const downloadIcon = './images/downloading.png';

import './contacts.css';

export function renderContacts() {
  const contacts = document.createElement('section');
  contacts.classList.add('contacts');

  contacts.innerHTML = `<div class='contacts-box'><p class='contacts__title' data-dictionary='contactme'>CONTACT ME</p></div>`;
  contacts.innerHTML += renderContactList(myContacts);
  contacts.innerHTML += `<div class='contacts__downloads'>
  <a class='contacts__downloads-link' href=${resume_en} download>
   <img src=${downloadIcon} alt="download">
   <span data-dictionary='download'> download resume </span> <span> (.pdf EN)</span>
  </a>
  <a class='contacts__downloads-link' href=${resume_ru} download>
  <img src=${downloadIcon} alt="download">
  <span data-dictionary='download'> download resume </span> <span>(.pdf RU)</span>
 </a>
  </div>`;

  document.querySelector('.footer')?.prepend(contacts);
}

function renderContactItem(contact: Contact) {
  return `<a class='contact' href=${contact.link} alt=${contact.text} target="_blank" rel=”noreferrer”>
  <div class='contact__image'>
  <img src='${contact.image}' alt='${contact.text}'/>
  </div>
  <div class='contact__text'><p>${contact.text}</p></div>
  </a>`;
}

function renderContactList(contacts: Contact[]) {
  let contactsHTML = contacts
    .map((contact) => {
      return `<li class='contacts__item'>${renderContactItem(contact)}</li>`;
    })
    .join(' ');
  return `<ul class='contacts__list'>${contactsHTML}</ul>`;
}
