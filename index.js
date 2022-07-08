anime({
  targets: "#svgAnim path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutExpo",
  duration: 5000,
  direction: "alternate",
  loop: true,
});

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
