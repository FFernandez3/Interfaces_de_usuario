document.addEventListener('DOMContentLoaded', function() {
    let header = document.getElementById('header');
    let headerImage = document.querySelector("#headerImg");
    let menu = document.querySelector("#hamburguerMenu");
    let buyButton = document.querySelector("#buyButton");
    let headerTitle = document.querySelector("#headerTitle");
    //console.log(headerTitle);
    
    //var headerImage = header.style.backgroundImage;
    //console.log(headerImage);
    

    var elementHeight = 270;//headerTitle.clientHeight; 
    console.log(elementHeight);

    window.addEventListener('scroll', function() {
        var scrollPosition = document.scrollingElement.scrollTop; // window.scrollY;

        // Verificar si ya estamos en el estado deseado antes de realizar el cambio
        if (scrollPosition > elementHeight && headerImage.src !== './img/header_scroll.png') {
            clearTimeout(headerImage.timeout);
            
            headerImage.timeout = setTimeout(function() {
                
                headerImage.src = './img/header_scroll.png';
                headerImage.classList.add("scrollHeader");
            }, 10); // Ajusta el valor del tiempo según sea necesario
        } else if (scrollPosition <= elementHeight && headerImage.src !== './img/header_sin_logo.png') {
            clearTimeout(headerImage.timeout);
           
            headerImage.timeout = setTimeout(function() {
                
                headerImage.classList.remove("scrollHeader");
                headerImage.src = './img/header_sin_logo.png';
            }, 10); // Ajusta el valor del tiempo según sea necesario
        }
    });
});
