import { renderContacts } from './contacts/contacts';
import './footer.css';
const todayYear = new Date().getFullYear();

const footer = document.createElement('footer');
footer.id = 'footer';
footer.classList.add('footer');

document.querySelector('#app')!.append(footer);

renderContacts();

footer.innerHTML += `<div class='footer__copyright'>
<p data-dictionary='copyright'> made on Vite with vanilla HTML, CSS and TS</p>
<p> © ${todayYear}</p>
</div>`;
