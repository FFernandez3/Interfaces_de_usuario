let spidey = document.querySelector("#spidey");
let img =document.querySelector("#img");
spidey.addEventListener("mouseover", function(){
    console.log(img);
    img.classList.add("display");
    spidey.classList.add("spidey");
});
spidey.addEventListener("mouseout", function(){
    img.classList.remove("display");
    spidey.classList.remove("spidey");
})