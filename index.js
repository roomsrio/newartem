// animation de nom Artem dans accueil
anime({
  targets: "#svgAnim path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutExpo",
  duration: 5000,
  direction: "alternate",
  loop: true,
});

// animation de la fenetre transparente name de gauche à droite dans accueil

const accueil = document.getElementById("accueil");
const name = document.getElementById("name");

accueil.addEventListener("mousemove", (e) => {
  if (e.pageX <= window.innerWidth * 0.25) {
    name.style.left = 0;
  } else if (e.pageX >= window.innerWidth * 0.75) {
    name.style.right = 0;
  } else {
    name.style.left = `calc(${e.pageX}px - 25vw)`;
  }
});

// coller la navBar au scroll

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
let positionNavBar = navbar.offsetTop;

function sticky() {
  let posCurseur = this.pageYOffset;
  if (positionNavBar - posCurseur < 15) {
    header.classList.add("stickyHeader");
    navbar.classList.add("stickyNav");
    logo.style.display = "none";
  } else {
    header.classList.remove("stickyHeader");
    navbar.classList.remove("stickyNav");
    logo.style.display = "flex";
  }
}

window.addEventListener("scroll", sticky);

// apparition de l'overlay avec les bouton savoir

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

const years = document.querySelectorAll(".years");
const circleContainer = document.querySelectorAll(".circle-container");
const yearsText = document.querySelectorAll(".yearsText");

console.log(circleContainer.children[3].tagName);
