document.addEventListener("DOMContentLoaded", function () {
    let sectionBigCards = document.querySelector("#bigCards");
    let divBC = document.querySelectorAll(".divBC");
    const divBCArray = Array.from(divBC);
    let imgBC = document.querySelectorAll(".imgBG");
    const imgBCArray = Array.from(imgBC);
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target.id)
               
                imgBCArray.forEach(img => (img.style.opacity = 0));
               
                divBCArray.forEach(title => (title.style.opacity = 0));

                entry.target.style.opacity = 1;

                const classTarget = entry.target.className;
              
                const arrayClass = classTarget.split(' ');

                const secondClass = arrayClass[1];
              
                const indexClass = (Number)(secondClass.substring(secondClass.length - 1));
       
                imgBCArray[indexClass].style.opacity = 1;
                
            }
        });
    });

    divBCArray.forEach(div => {
        observer.observe(div);
    });
});
