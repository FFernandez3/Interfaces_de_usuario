
const header = document.querySelector("#header");
const logo = document.querySelector("#headerTitle");
let headerImage = document.querySelector("#headerImg");
const smallLogo = document.querySelector("#smallLogo");
document.addEventListener("scroll", () => {
  if (window.scrollY < 103) {
    smallLogo.style.opacity = 0;
  }
  if (window.scrollY > 103) {
    header.classList.add("scrollHeader");
    smallLogo.style.opacity = window.scrollY / 400;
  } else {
    header.classList.remove("scrollHeader");
  }
  logo.style.opacity = 1 - window.scrollY / 120;
  headerImage.style.opacity=  Math.max(0.9, 1 - window.scrollY / 720);;
  logo.style.scale = 1 - window.scrollY / 200;
});
