import { Project } from "../../../model/mytypes";
import "./projects.css";
import { projects as projectsData } from "../../../model/constants";

export function renderProjects() {
  const projects = document.createElement("section");
  projects.classList.add("projects");
  projects.innerHTML = `<div class='projects-box'>
  <p class='projects__title'>SOME OF MY PROJECTS</p>
  </div>`;

  projects.innerHTML += renderProgectList(projectsData);
  const github = {
    image: "./images/icon-github.png",
    text: "Other projects on my GitHub",
    link: "https://github.com/vasily-mishanin",
  };
  projects.innerHTML += `<a class='github' href=${github.link} alt=${github.text} target="_blank" rel=”noreferrer”>
                        <div class='github__text'><p>${github.text}</p></div>
                        <div class='github__image'>
                           <img src='${github.image}' alt='${github.text}'/>
                         </div>
                         </a>`;

  document.querySelector(".certifications")?.after(projects);
}

function renderProgectCard(
  image: string,
  text: string,
  link: string,
  description: string
) {
  return `<a class='project__card' href=${link}  target="_blank" rel=”noreferrer”>
   <div class='project__card-image'>
   <img src='${image}' alt='${text}'/>
   </div>

   <div class='project__card-text'>
   <p class='project__name'>${text}</p>
   <p class='project__description'>${description}</p>
   </div>
    </a>`;
}

function renderProgectList(projects: Project[]) {
  let projectsHTML = projects
    .map((project) => {
      return `<li class='project__item'>${renderProgectCard(
        project.image,
        project.text,
        project.link,
        project.description
      )}</li>`;
    })
    .join(" ");

  return `<ul class='projects__list'>${projectsHTML}</ul>`;
}
