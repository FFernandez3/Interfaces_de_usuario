document.addEventListener('DOMContentLoaded', function() {
    let header = document.getElementById('header');
    let headerImage = document.querySelector("#headerImg");
    let menu = document.querySelector("#hamburguerMenu");
    let buyButton = document.querySelector("#buyButton");
    console.log(header);
    
    //var headerImage = header.style.backgroundImage;
    console.log(headerImage);
    

    var elementHeight = header.clientHeight;//531; 

    window.addEventListener('scroll', function() {
        var scrollPosition = document.scrollingElement.scrollTop; // window.scrollY;

        // Verificar si ya estamos en el estado deseado antes de realizar el cambio
        if (scrollPosition > elementHeight && headerImage.src !== './img/header_fixed.png') {
            clearTimeout(headerImage.timeout);
            menu.classList.add("hidden");
            buyButton.classList.add("hidden");
            headerImage.timeout = setTimeout(function() {
                headerImage.src = './img/header_fixed.png';
            }, 20); // Ajusta el valor del tiempo según sea necesario
        } else if (scrollPosition <= elementHeight && headerImage.src !== './img/header_sin_logo.png') {
            clearTimeout(headerImage.timeout);
            menu.classList.remove("hidden");
            buyButton.classList.remove("hidden");
            headerImage.timeout = setTimeout(function() {
                headerImage.src = './img/header_sin_logo.png';
            }, 20); // Ajusta el valor del tiempo según sea necesario
        }
    });
});
