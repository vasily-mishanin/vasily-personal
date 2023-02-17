import "./home.css";
import {renderSkills} from "./skills/skills";

const main = document.createElement('main');

//main.innerHTML = '<h1>MAIN</h1>';

document.querySelector('header')!.after(main);

renderSkills();