document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var duendeVerde = document.querySelector('.imgGreenGoblin');
    var speed = 0.15; 
    // Mueve el Duende Verde en la dirección del scroll, pero más lentamente
    duendeVerde.style.transform = 'translate(-5%, -21%) translateY(' + scrollPosition * speed + 'px)';
  });
  