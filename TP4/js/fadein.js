document.addEventListener('scroll', function () {
    var cards = document.querySelectorAll('.smallCard');
  
    cards.forEach(function (card) {
      var cardPosition = card.getBoundingClientRect().top;
      var screenPosition = window.innerHeight;
  
      if (cardPosition < screenPosition / 1.2) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  });