import "./main.css";
import "./layout/header/header";
import "./layout/footer/footer";
import "./layout/home/home";

// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

//SKILLS
const observerSkills = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-skill");
    } else {
      entry.target.classList.remove("show-skill");
    }
  });
});

const hiddenSkillElements = document.querySelectorAll(".hidden-skill");
hiddenSkillElements.forEach((el) => observerSkills.observe(el));

//CERTIFICATES
const observerCertificate = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-certificate");
    } else {
      entry.target.classList.remove("show-certificate");
    }
  });
});

const hiddenCertificateElements = document.querySelectorAll(
  ".hidden-certificate"
);
hiddenCertificateElements.forEach((el) => observerCertificate.observe(el));
