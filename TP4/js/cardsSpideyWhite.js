
  document.addEventListener('DOMContentLoaded', function () {
    var scrollPosition = window.scrollY;
    var card1 = document.querySelector('#sw1');
    var card2 = document.querySelector('#sw2');
    var card3 = document.querySelector('#sw3');
    var speed = 0.05; 

    function handleScroll() {
        // Mueve las tarjetas en la dirección del scroll, pero más lentamente
        card1.style.transform = 'translate(-5%, -21%) translateY(' + scrollPosition * speed + 'px)';
        card2.style.transform = 'translate(-4%, -20%) translateY(' + scrollPosition * speed + 'px)';
        card3.style.transform = 'translate(-3%, -19%) translateY(' + scrollPosition * speed + 'px)';
    }

    function handleMouseEnter(card) {
        card.style.transform = 'translateY(10px) rotateX(45deg)';
    }

    function handleMouseLeave(card) {
        card.style.transform = ''; // Restaurar la transformación original
    }

    document.addEventListener('scroll', function () {
        scrollPosition = window.scrollY;
        handleScroll();
    });

    card1.addEventListener('mouseenter', function () {
        handleMouseEnter(card1);
    });
    card1.addEventListener('mouseleave', function () {
        handleMouseLeave(card1);
    });

    card2.addEventListener('mouseenter', function () {
        handleMouseEnter(card2);
    });
    card2.addEventListener('mouseleave', function () {
        handleMouseLeave(card2);
    });

    card3.addEventListener('mouseenter', function () {
        handleMouseEnter(card3);
    });
    card3.addEventListener('mouseleave', function () {
        handleMouseLeave(card3);
    });
});


