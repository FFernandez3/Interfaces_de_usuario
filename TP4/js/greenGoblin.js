document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var duendeVerde = document.querySelector('.imgGreenGoblin');
    var speed = 0.15; // Ajusta la velocidad según tus necesidades
  
    // Mueve el Duende Verde en la dirección del scroll, pero más lentamente
    duendeVerde.style.transform = 'translate(-5%, -21%) translateY(' + scrollPosition * speed + 'px)';
  });
  /*document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var duendeVerde = document.querySelector('.imgGreenGoblin');
    var container = document.querySelector('.ctn2'); 
    var containerHeight = container.offsetHeight;
    var speed = 1;

    // Calcula la posición máxima a la que la imagen puede moverse
    var maxTranslateY = containerHeight - duendeVerde.offsetHeight +200;

    // Ajusta la velocidad según tus necesidades
    var translateY = scrollPosition * speed *3;

    // Limita la posición de la imagen para que no se salga del contenedor
    translateY = Math.max(translateY, -maxTranslateY);
    translateY = Math.min(translateY, 0);

    // Mueve el Duende Verde en la dirección del scroll, pero más lentamente
    duendeVerde.style.transform = 'translate(-5%, -8%) translateY(' + translateY + 'px)';
});*/
