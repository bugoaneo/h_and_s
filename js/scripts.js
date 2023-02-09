const sectionsCollection = document.querySelectorAll(".section");
const demoBTNwrap = document.querySelector(".demo")
let currentSection = sectionsCollection[0];

demoBTNwrap.addEventListener("click", toggleHideSection);

function toggleHideSection(e) {
 let target = e.target.closest(".demo__btn");
 if (!target) return;
 const targetAttr = target.getAttribute("data-target");
 currentSection.classList.remove('current');
 currentSection = document.querySelector(`#${targetAttr}`);
 currentSection.classList.add('current');
}


const btnConnection = document.querySelector(".connection");

btnConnection.addEventListener("click", toggleClass);

function toggleClass() {
 this.classList.toggle("on")
}