import './home.css';
import { renderSkills } from './skills/skills';
import { renderCertifications } from './certifications/certifications';
import { renderProjects } from './projects/projects';

const main = document.createElement('main');

//main.innerHTML = '<h1>MAIN</h1>';

document.querySelector('header')!.after(main);

renderSkills();
renderProjects();
renderCertifications();
