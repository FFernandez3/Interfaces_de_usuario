"use strict";
let menuBtn = document.querySelector("#menu-btn");
let mainNav = document.querySelector("#main-nav");
let crossNavBtn=document.querySelector("#crossNav-btn");

menuBtn.addEventListener("click", () => {
    console.log("entre");
    mainNav.classList.remove("displayNone");
}); 

crossNavBtn.addEventListener("click", ()=>{
    mainNav.classList.add("displayNone");
});

let avatarMenuBtn = document.querySelector("#avatar-btn");
let userNav = document.querySelector("#user-nav");
let crossUserNavBtn=document.querySelector("#crossUserNav-btn");
avatarMenuBtn.addEventListener("click", () => {
    console.log("entre");
    userNav.classList.remove("displayNone");
}); 

crossUserNavBtn.addEventListener("click", ()=>{
    userNav.classList.add("displayNone")
})


/*cart */
let cartBtn=document.querySelector("#cart-btn");
let crossCart=document.querySelector("#userNavCross")
cartBtn.addEventListener("click", ()=>{
    document.querySelector("#cartDiv").classList.remove("displayNone");
})
crossCart.addEventListener("click", ()=>{
    document.querySelector("#cartDiv").classList.add("displayNone");
})