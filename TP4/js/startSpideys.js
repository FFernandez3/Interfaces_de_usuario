document.addEventListener("DOMContentLoaded", function(){
    let logo=document.querySelector('#headerTitle');
    //logo.style.opacity="1";

    let spideyRed=document.querySelector("#spideyRed");
    let spideyWhite=document.querySelector("#spideyWhite");
    let spideyBlack=document.querySelector("#spideyBlack");

    let buildingsRight=document.querySelector("#buildingsRight");
    let buildingsLeft=document.querySelector("#buildingsLeft");


    setTimeout(() => {
        logo.style.opacity="1";


        spideyWhite.style.top="255px";
     
        spideyRed.style.top="220px";
        
      
        spideyBlack.style.top="180px";

        buildingsRight.style.right="-7px";

        buildingsLeft.style.left="-55px";
        
    }, 5500); /*antes 500 */
    setTimeout(() => {
        spideyRed.style.zIndex=10;
        
    }, 6600);
   


    


})