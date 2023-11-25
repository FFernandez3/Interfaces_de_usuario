document.getElementById('hamburguerMenu').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('hamburguerMenuOpen');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    
});