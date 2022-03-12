/*eslint-disable*/
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const slides = document.querySelectorAll('.slide');


let index = 0;

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}

function previousSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}



next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);