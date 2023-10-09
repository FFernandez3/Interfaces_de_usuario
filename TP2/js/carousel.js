addEventListener("DOMContentLoaded", (e) => {
    const row = document.querySelectorAll(".contCards");
    const cards = document.querySelectorAll(".mgCard");
    const btnScrollRight = document.querySelectorAll("#btnScrollRight");
    const btnScrollLeft = document.querySelectorAll("#btnScrollLeft");
    
    for(let i = 0; i < btnScrollRight.length;i++){
        btnScrollRight[i].addEventListener("click", function(){
            const carrusel = row[i];
            carrusel.scrollLeft += (carrusel.offsetWidth - 383);
            for(let i=0; i< cards.length; i++){
                cards[i].classList.add("skewActive");
            }
            setTimeout(() => {
                cards.forEach(card => {
                    card.classList.remove('skewActive');
                });
            }, 300);
            console.log("entro al evento click der")
        });
        console.log("entro al for derecho")
    }
    
    for(let i = 0; i < btnScrollLeft.length;i++){
        btnScrollLeft[i].addEventListener("click", function() {
            const carrusel = row[i];
            carrusel.scrollLeft -= (carrusel.offsetWidth - 383);
            for(let i=0; i< cards.length; i++){
                cards[i].classList.add("skewActive2");
            }
            setTimeout(() => {
                cards.forEach(card => {
                    card.classList.remove('skewActive2');
                });
            }, 300);
    
            console.log("entro al evento click izq")
        });
        console.log("entro al for izq")
    }
    
    
    });
