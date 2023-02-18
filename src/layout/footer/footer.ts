import { renderContacts } from "./contacts/contacts";
import "./footer.css";

const footer = document.createElement("footer");
footer.classList.add("footer");

document.querySelector("#app")!.append(footer);

renderContacts();
