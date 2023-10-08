"use strict";
/*addEventListener("DOMContentLoaded", (e) => {
    const carrusel = document.querySelector(".containerCarrusel");

    const btnScrollRight = document.querySelector("#btnScrollRight");
    const btnScrollLeft = document.querySelector("#btnScrollLeft");

    btnScrollLeft.addEventListener("click", ()=>{

                
                carrusel.scrollLeft -= (carrusel.offsetWidth - 383);
            
            console.log("entro a btn izq");
        }
    );
    btnScrollRight.addEventListener("click", ()=>{
        
            
                
                carrusel.scrollLeft += (carrusel.offsetWidth - 383);
            
            console.log("entro a btn derecho");
        }
    )
});*/
addEventListener("DOMContentLoaded", (e) => {
const row = document.querySelectorAll(".contCards");

const btnScrollRight = document.querySelectorAll("#btnScrollRight");
const btnScrollLeft = document.querySelectorAll("#btnScrollLeft");

for(let i = 0; i < btnScrollRight.length;i++){
    btnScrollRight[i].addEventListener("click", function(){
        const carrusel = row[i];
        carrusel.scrollLeft += (carrusel.offsetWidth - 383);
        console.log("entro al evento click der")
    });
    console.log("entro al for derecho")
}

for(let i = 0; i < btnScrollLeft.length;i++){
    btnScrollLeft[i].addEventListener("click", function() {
        const carrusel = row[i];
        carrusel.scrollLeft -= (carrusel.offsetWidth - 383);
        console.log("entro al evento click izq")
    });
    console.log("entro al for izq")
}
});
