import './skills.css';
import { Language, Skill } from '../../../model/mytypes';
import { skills__core as skillsData__core } from '../../../model/data_skills';
import { skills__spec as skillsData__spec } from '../../../model/data_skills';
import { skills__languages as skillsData__lang } from '../../../model/data_skills';

export function renderSkills() {
  const skills = document.createElement('section');
  skills.classList.add('skills');

  skills.innerHTML = `<div class='skills-box'>
    <p class='skills__title' data-dictionary='skills'>SKILLS</p>
    </div>`;

  skills.innerHTML += ` <h3 class='skills__subtitle' data-dictionary='core'>Core</h3>`;
  skills.innerHTML += renderSkillsList(skillsData__core);
  skills.innerHTML += ` <h3 class='skills__subtitle' data-dictionary='tools'>Libs, Tools</h3>`;
  skills.innerHTML += renderSkillsList(skillsData__spec);
  skills.innerHTML += ` <h3 class='skills__subtitle' data-dictionary='languages'>Languages</h3>`;
  skills.innerHTML += renderLanguageList(skillsData__lang);

  document.querySelector('main')!.prepend(skills);
}

function renderSkillItem(image: string, text: string) {
  return `<div class='skills__image'> <img src='${image}' alt='${text}'/> </div>`;
}

function renderSkillsList(skills: Skill[]) {
  let skillsHTML = skills
    .map((skill) => {
      return `<li class='skills__item hidden-skill'>${renderSkillItem(
        skill.image,
        skill.text
      )}</li>`;
    })
    .join(' ');
  return `<ul class='skills__list'>${skillsHTML}</ul>`;
}

//LANGUAGES
function renderLanguageItem(image: string, text: string, level: string) {
  return ` <figure class='skills__image-lang'>
    <img src='${image}' alt='${text}'/>
    <figcaption class='skills__image-lang-caption'>${level}</figcaption>
</figure>

  </div>`;
}

function renderLanguageList(languages: Language[]) {
  let skillsHTML = languages
    .map((language) => {
      return `<li class='skills__item hidden-skill'>${renderLanguageItem(
        language.image,
        language.text,
        language.level
      )}</li>`;
    })
    .join(' ');
  return `<ul class='skills__list'>${skillsHTML}</ul>`;
}
