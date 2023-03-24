const slides = document.querySelectorAll(".slide");
const count = slides.length;
let current  = 0;

function changeslide(){
    slides[current].classList.remove("active");
    current = (current + 1) % count;
    slides[current].classList.add("active");


}
setInterval(changeslide, 4000);

