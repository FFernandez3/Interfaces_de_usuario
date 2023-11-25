function castParallax(){   
    window.addEventListener("scroll", function(event) {
        var top = this.scrollY;
        var layers = document.getElementsByClassName("parallax");

        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            var speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.style.transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
        }
    });
}

document.body.onload = castParallax;