import "./header.css";

const header = document.createElement("header");
header.className = "header pattern-header";
header.innerHTML = `<section class="header-inner">
<div class='header__image hidden'>
<img src="./images/vasily-mishanin.jpg" alt="Vasily\'s photo">
</div>
<div class='header__text hidden' >
<h1 class='header-title'>Hi! I\'m Vasily</h1>
<p class='header-subtitle'>FRONTEND DEVELOPER</p>
</div>
</section>`;

document.querySelector("#app")!.prepend(header);
