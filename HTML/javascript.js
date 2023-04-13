const carouselSlides = document.querySelector(".carousel-slides");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");
const slideWidth = 100 / carouselSlides.children.length;
let currentSlide = 0;

function slideCarousel() {
  carouselSlides.style.transform = translateX(-${slideWidth * currentSlide}%);
}

function showPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = carouselSlides.children.length - 1;
  } else {
    currentSlide--;
  }
  slideCarousel();
}

function showNextSlide() {
  if (currentSlide === carouselSlides.children.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideCarousel();
}

carouselPrev.addEventListener("click", showPrevSlide);
carouselNext.addEventListener("click", showNextSlide);

setInterval(showNextSlide, 3000);