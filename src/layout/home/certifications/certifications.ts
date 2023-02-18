import { Certification } from "../../../model/mytypes";
import "./certifications.css";
import { certifications as certificationsData } from "../../../model/constants";

export function renderCertifications() {
  let certifications = document.createElement("section");
  certifications.classList.add("certifications");

  certifications.innerHTML = `<div class='certifications-box'>
  <p class='certifications__title'>CERTIFICATIONS</p>
  </div>`;
  certifications.innerHTML += renderCertList(certificationsData);
  document.querySelector(".skills")?.after(certifications);
}

function renderCertItem(image: string, text: string, link: string) {
  return `<div class='certifications__image'>
  <a href=${link} alt=${text} target="_blank" rel=”noreferrer”>
  <img src='${image}' alt='${text}'/>
  </a>
  </div>`;
}

function renderCertList(certifications: Certification[]) {
  let certificationsHTML = certifications
    .map((certification) => {
      return `<li class='certifications__item hidden-certificate'>${renderCertItem(
        certification.image,
        certification.text,
        certification.link
      )}</li>`;
    })
    .join(" ");
  return `<ul class='certifications__list'>${certificationsHTML}</ul>`;
}
