// document.addEventListener('DOMContentLoaded', function() {
//     let header = document.getElementById('header');
//     let headerImage = document.querySelector("#headerImg");
//     let menu = document.querySelector("#hamburguerMenu");
//     let buyButton = document.querySelector("#buyButton");
//     let headerTitle = document.querySelector("#headerTitle");
//     //console.log(headerTitle);
    
//     //var headerImage = header.style.backgroundImage;
//     //console.log(headerImage);
    

//     var elementHeight = 100;//headerTitle.clientHeight; /*270 */
//     console.log(elementHeight);

//     window.addEventListener('scroll', function() {
//         var scrollPosition = document.scrollingElement.scrollTop; // window.scrollY;

//         // Verificar si ya estamos en el estado deseado antes de realizar el cambio
//         if (scrollPosition > elementHeight && headerImage.src !== './img/header_scroll.png') {
//             clearTimeout(headerImage.timeout);
            
//             headerImage.timeout = setTimeout(function() {
                
//                 headerImage.src = './img/header_scroll.png';
//                 headerImage.classList.add("scrollHeader");
//             }, 5); // Ajusta el valor del tiempo según sea necesario
//         } else if (scrollPosition <= elementHeight && headerImage.src !== './img/header_sin_logo.png') {
//             clearTimeout(headerImage.timeout);
           
//             headerImage.timeout = setTimeout(function() {
                
//                 headerImage.classList.remove("scrollHeader");
//                 headerImage.src = './img/header_sin_logo.png';
//             }, 5); // Ajusta el valor del tiempo según sea necesario
//         }
//     });
// });

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
