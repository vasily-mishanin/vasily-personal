import { Certification } from '../../../model/mytypes';
import './certifications.css';
import { certifications as certificationsData } from '../../../model/data_certifications';

export function renderCertifications() {
  let certifications = document.createElement('section');
  certifications.classList.add('certifications');

  certifications.innerHTML = `<div class='certifications-box'>
  <p class='certifications__title' data-dictionary='cert'>CERTIFICATIONS</p>
  </div>`;
  certifications.innerHTML += renderCertList(certificationsData);
  document.querySelector('.projects')?.after(certifications);
}

function renderCertItem(image: string, text: string, link: string) {
  const modificator =
    text.startsWith('Meta') || text.startsWith('Apollo') ? 'contain' : 'cover';

  return `<div class="certifications__image">
  <a href=${link} target="_blank" rel=”noreferrer”>
  <img class="${modificator}" src='${image}' alt='${text}'/>
  </a>
  </div>`;
}

function renderCertList(certifications: Certification[]) {
  let certificationsHTML = certifications
    .reverse()
    .map((certification) => {
      return `<li class='certifications__item hidden-certificate'>${renderCertItem(
        certification.image,
        certification.text,
        certification.link
      )}</li>`;
    })
    .join(' ');
  return `<ul class='certifications__list'>${certificationsHTML}</ul>`;
}
