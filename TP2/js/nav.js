"use strict";
let menuBtn = document.querySelector("#menu-btn");
let vertNav = document.querySelector("#main-nav");
menuBtn.addEventListener("click", () => {
    console.log("entre");
    vertNav.classList.toggle("displayNone");
}); 

let avatarMenuBtn = document.querySelector("#avatar-btn");
let userNav = document.querySelector("#user-nav");
avatarMenuBtn.addEventListener("click", () => {
    console.log("entre");
    userNav.classList.toggle("displayNone");
}); 