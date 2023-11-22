document.getElementById('hamburguerMenu').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('hamburguerMenuOpen');
});