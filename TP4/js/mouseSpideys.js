function castParallax(){
    var opThresh = 350;
    var opFactor = 750;


    window.addEventListener("scroll", function(event) {
        var top = this.scrollY;
        var layers = document.getElementsByClassName("parallax");

        for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';

        // Ajusta el tamaño de la imagen en función del desplazamiento
        // var scale = 1 + (yPos / 1000); // Ajusta según sea necesario
        // layer.style.transform += ' scale(' + scale + ')';
        }
    });
}


document.body.onload = castParallax;