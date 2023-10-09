/*click en menu juego */
const heartBtn=document.querySelector('#heart');
const likeBtn=document.querySelector('#like');
const dislikeBtn=document.querySelector('#dislike');
const imgHeart=document.querySelector('#heartImg');
const imgLike=document.querySelector('#likeImg');
const imgDislike=document.querySelector('#dislikeImg');
let isImg1=true;

function changeImgToHoverVersion(img, src1, src2){
    if(isImg1==true){
        img.src=src1;
        isImg1= false; 
    }
    else{
        img.src=src2;
        isImg1=true;
    }
}
heartBtn.addEventListener("click",()=>{
    changeImgToHoverVersion(imgHeart, "img/botones/heartColor.svg","img/botones/heart.svg");
} )
likeBtn.addEventListener("click", ()=>{
    changeImgToHoverVersion(imgLike, "img/botones/likeColor.svg", "img/botones/handUp.svg");
})
dislikeBtn.addEventListener("click", ()=>{
    changeImgToHoverVersion(imgDislike, "img/botones/dislikeColor.svg", "img/botones/dislike.svg")
})
