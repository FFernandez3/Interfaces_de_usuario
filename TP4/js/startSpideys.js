document.addEventListener("DOMContentLoaded", function(){
    let logo=document.querySelector('#headerTitle');
    logo.style.opacity="1";

    let spideyRed=document.querySelector("#spideyRed");
    let spideyWhite=document.querySelector("#spideyWhite");
    let spideyBlack=document.querySelector("#spideyBlack");

    let buildingsRight=document.querySelector("#buildingsRight");
    let buildingsLeft=document.querySelector("#buildingsLeft");


    setTimeout(() => {
        spideyWhite.style.top="255px";
     
        spideyRed.style.top="220px";
      
        spideyBlack.style.top="180px";

        buildingsRight.style.right="-7px";

        buildingsLeft.style.left="-55px";
        
    }, 500);


    


})