document.addEventListener("DOMContentLoaded", function () {
    // Obtener las posiciones de los títulos e imágenes
    let sectionBigCards = document.querySelector("#bigCards");
    let divBC = document.querySelectorAll(".divBC");
    const divBCArray = Array.from(divBC);
    //let title2 = document.getElementById("title-2");
    //let title3 = document.getElementById("title-3");
    //let title4 = document.getElementById("title-4");
  
    //let text1 = document.getElementById("text-1");
    //let text2 = document.getElementById("text-2");
    //let text3 = document.getElementById("text-3");
    //let text4 = document.getElementById("text-4");
  
    //let texts = [text1, text2, text3, text4];
  
    let imgBC = document.querySelectorAll(".imgBG");
    const imgBCArray = Array.from(imgBC);
    console.log("imagenes: "+imgBCArray)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target.id)
                // Ajusta la opacidad de todas las imágenes a 0
                imgBCArray.forEach(img => (img.style.opacity = 0));
                // Ajusta la opacidad de todos los títulos a 0
                divBCArray.forEach(title => (title.style.opacity = 0));

                // Muestra la imagen y título correspondientes al elemento intersectado
                entry.target.style.opacity = 1;

                // Muestra la imagen correspondiente al elemento intersectado
                const classTarget = entry.target.className;
                console.log("classtarget: "+classTarget);
                const arrayClass = classTarget.split(' ');

                const secondClass = arrayClass[1];
                console.log("Segunda clase: " + secondClass);

                const indexClass = (Number)(secondClass.substring(secondClass.length - 1));
                console.log(imgBCArray[indexClass]);
                imgBCArray[indexClass].style.opacity = 1;




                // const indexClass = arrayClass[1];
                // console.log(imgBCArray[indexClass]);
                // imgBCArray[indexClass].style.opacity = 1;
                
            }
        });
    });

    // Observa cada texto individual en el array
    divBCArray.forEach(div => {
        observer.observe(div);
    });
});
    //let img2 = document.getElementById("image2");
    //let img3 = document.getElementById("image3");
    //let img4 = document.getElementById("image4");
  
//     const observer = new IntersectionObserver(entries => {
//         console.log("entries: " +entries);
//       //itera x cada entrada, por cada texto
//       entries.forEach(entry => {
//         //esta visible?
//         console.log("entry: "+entry);
//         if (entry.isIntersecting) {
//           //indice del texto actual del arreglo texts, asi se ve cual texto es el visible
//           //entry.target(me devuelve el obj), indexof el indice de ese obj en arrglo
          
//           console.log("imagen: "+imgBCArray[2]);
//           const index = divBCArray.indexOf(entry.target);
          
//           //const index = divBC.indexOf(entry.target);
  
//           //Ajusta la opacidad de todas las imágenes a 0, para q solo este visible la q yo quiero
//           imgBC.forEach(img => (img.style.opacity = 0));
//           //ajusta titulos
//           divBC.forEach(title => (title.style.opacity = 0));
  
//           //[title1, title2, title3, title4].forEach(title => (title.style.opacity = 0));
          
//           //segun la pos en el arreglo sera la imagen y texto q quiero ver
//           if(index == 0) {
//               imgBCArray[0].style.opacity = 1;
              
//               divBCArray[0].style.opacity = 1;
//               //title1.style.opacity = 1;
//              // title2.style.opacity =0;
//           }else if(index == 1){
//                 imgBCArray[1].style.opacity = 1;
//                 divBCArray[0].style.opacity = 0;
//                 //title1.style.opacity = 0;
//                 divBCArray[1].style.opacity = 1;
//                 //title2.style.opacity =1;
//           }else if(index == 2){
//                 imgBCArray[2].style.opacity = 1;
//                 divBCArray[2].style.opacity = 1;
//                 //title3.style.opacity =1;
//                 divBCArray[1].style.opacity = 0;
//                 //title2.style.opacity = 0;
                
//           }else{
//                 imgBCArray[3].style.opacity = 1;
//                 divBCArray[3].style.opacity = 1;
//                 //text3.style.opacity = 0;
//                 divBCArray[2].style.opacity = 0;
//                 //text4.style.opacity = 1;
               
//           }
           
              
             
            
            
          
//         }
//       });
//     });
  
//     //Observa cada texto individual, que este en el arrgelo
//     divBCArray.forEach(div => {
//       observer.observe(div);
//       console.log("div:" + div)
//     });
  
  
    
//   });