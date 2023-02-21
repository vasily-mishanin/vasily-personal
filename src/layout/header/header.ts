import "./header.css";
import { dictionary } from "../../model/constants";

const header = document.createElement("header");
header.className = "header pattern-header";

header.innerHTML = `<section class="header-inner">
<div class='header__image hidden'>
<img src="./images/vasily-mishanin.jpg" alt="Vasily\'s photo">
</div>
<div class='header__text hidden' >
<h1 class='header-title' data-dictionary='greeting'>Hi! I'm Vasily</h1>
<p class='header-subtitle' data-dictionary='specialization'> FRONTEND DEVELOPER </p>
</div>
</section>`;

header.innerHTML += `<div class='select'>
<select class='select__language'  id='languageSelect'>
<option value='en' selected> EN </option>
<option value='ru'> RU </option>
</select>
</div>`;

document.querySelector("#app")!.prepend(header);

// CHANGE LANGUAGE
const languageSelector = header.querySelector(
  "#languageSelect"
) as HTMLSelectElement;
languageSelector?.addEventListener("change", changeLanguage);

function changeLanguage(event: Event) {
  const select = event.target as HTMLSelectElement;
  const lang = select.value;
  if (lang === "en" || lang === "ru") {
    dictionary.mode = lang;
    document
      .querySelectorAll<HTMLElement>("[data-dictionary]")
      .forEach((element) => {
        if (element.dataset.dictionary) {
          element.textContent = dictionary[lang][element.dataset.dictionary];
        }
      });
  }
}
