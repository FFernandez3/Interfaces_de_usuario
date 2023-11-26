document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('ctn8');
    const divSpideyWhite=document.getElementById('img-container1');
    const divSpideyRed=document.getElementById('img-container2');
    const divSpideyBlack=document.getElementById('img-container3');
    const imgBackground=document.querySelector("#backgroundSpiders");
    const section=document.querySelector(".spiders");
  
    container.addEventListener('mouseover', function () {
      container.classList.add('active');

    });
    divSpideyWhite.addEventListener('mouseover', function(){
      /*contenedor.style.backgroundImage="url(img/fondo_rosa.png)";*/
      imgBackground.src="./img/fondo_rosa_full_blanco.png";
      imgBackground.style.height="797px";
     /* section.style.backgroundColor="#f0f0f0";*/
    })
  
    /*container.addEventListener('mouseout', function () {
      container.classList.remove('active');
    });*/
    divSpideyWhite.addEventListener('mouseout', function(){
      /*container.style.backgroundImage="url(img/fondo_blanco.png";*/
      imgBackground.src="./img/fondo_tres_muñecos_abajo.png";
      imgBackground.style.height="680px";
      /*section.style.backgroundColor="#000000";*/
    })
    divSpideyRed.addEventListener('mouseover', function(){
      //container.style.backgroundImage="url(img/fondo_azul.png)";
      imgBackground.src="./img/fondo_azul_full_blanco.png";
      imgBackground.style.height="797px";
     /* section.style.backgroundColor="#f0f0f0";*/
    })
    divSpideyBlack.addEventListener('mouseover', function(){
      //container.style.backgroundImage="url(img/fondo_gris.png)";
      imgBackground.src="./img/fondo_gris_full_blanco.png";
      imgBackground.style.height="797px";
      /*section.style.backgroundColor="#f0f0f0";*/
    })
    divSpideyRed.addEventListener('mouseout', function(){
      //container.style.backgroundImage="url(img/fondo_blanco.png";
      imgBackground.src="./img/fondo_tres_muñecos_abajo.png";
      imgBackground.style.height="680px";
      /*section.style.backgroundColor="#000000";*/
    })
    divSpideyBlack.addEventListener('mouseout', function(){
      //container.style.backgroundImage="url(img/fondo_blanco.png";
      imgBackground.src="./img/fondo_tres_muñecos_abajo.png";
      imgBackground.style.height="680px";
      /*section.style.backgroundColor="#000000";*/
    })
  });