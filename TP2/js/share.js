const popUp=document.querySelector('#sharePopUp');
const btnShare=document.querySelector('#share')
const btnCross=document.querySelector('#crossShare')
const bgShare=document.querySelector('#shareBlur');
/*pop up compartir---------------- */
btnShare.addEventListener("click", ()=>{
    popUp.classList.remove('dNone');
    bgShare.classList.add('opacity');
})
btnCross.addEventListener("click", ()=>{  
    popUp.classList.add('dNone');
    bgShare.classList.remove('opacity');
})