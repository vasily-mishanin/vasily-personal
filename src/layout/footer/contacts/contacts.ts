import { myContacts } from "../../../model/constants";
import { Contact } from "../../../model/mytypes";
import "./contacts.css";

export function renderContacts() {
  const contacts = document.createElement("section");
  contacts.classList.add("contacts");

  contacts.innerHTML = `<div class='contacts-box'><p class='contacts__title'>CONTACT ME</p></div>`;
  contacts.innerHTML += renderContactList(myContacts);

  document.querySelector(".footer")?.prepend(contacts);
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
    .join(" ");
  return `<ul class='contacts__list'>${contactsHTML}</ul>`;
}
