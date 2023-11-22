document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Define el tamaño original del logo y el tamaño deseado al hacer scroll
    var originalHeight = 301;
    let originalWidth=590;
    var newHeight = 68;
    let newWidth=133;

    // Calcula el nuevo tamaño del logo basado en la posición de desplazamiento
    var logoHeightSize = originalHeight - scrollPosition / 2;
    var logoWidthSize = originalWidth - scrollPosition / 2;

    // Limita el tamaño mínimo del logo para evitar que se haga demasiado pequeño
    logoHeightSize = Math.max(logoHeightSize, newHeight);
    logoWidthSize = Math.max(logoWidthSize,newWidth);

    // Aplica el nuevo tamaño al logo y ajusta otros estilos según sea necesario
    document.getElementById('headerTitle').style.width =logoWidthSize  + 'px';
    document.getElementById('headerTitle').style.height = logoHeightSize + 'px';

    console.log("ancho"+document.getElementById('headerTitle').style.width)
    console.log("alto"+  document.getElementById('headerTitle').style.height)
});