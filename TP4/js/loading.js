"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    function preloader() {
        let percentage = 0;
        const textPercentage = document.querySelector("#load-percentage");
        if (textPercentage) {
            const loadContainer = document.querySelector("#load-container");
            const interval = setInterval(() => {
                if (percentage < 100) {
                    percentage = percentage + 1;
                    textPercentage.innerHTML = `${percentage}%`;
                }
            }, 50);
            setTimeout(() => {
                clearInterval(interval);
                loadContainer.classList.toggle("load-container-hidden");
            }, 5000);
        }
    }


    preloader();


})