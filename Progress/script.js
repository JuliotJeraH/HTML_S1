const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2 ");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2 ");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");

btn1.addEventListener("click", ()=> {
    btn1.style.backgroundColor ="black";
    img1.style.opacity = 1;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
    img4.style.opacity = 0;
    
});

btn2.addEventListener("click", ()=> {
    btn1.style.backgroundColor ="white";
    img1.style.opacity = 0;
    img2.style.opacity = 1;
    img3.style.opacity = 0;
    img4.style.opacity = 0;
    
});

btn3.addEventListener("click", ()=> {
    btn1.style.backgroundColor ="white";
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 1;
    img4.style.opacity = 0;
    
});

btn4.addEventListener("click", ()=> {
    btn1.style.backgroundColor ="white";
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
    img1.style.opacity = 1;
    
});






 



