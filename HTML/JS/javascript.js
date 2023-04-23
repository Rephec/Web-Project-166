// Get the required elements from the DOM
const carouselSlides = document.querySelector(".carousel-slides");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");

// Set the initial slide to display and slide width
let currentSlide = 0;
const slideWidth = 100 / carouselSlides.children.length;

// Function to move the carousel to the current slide
function slideCarousel() {
  carouselSlides.style.transform = `translateX(-${slideWidth * currentSlide}%)`;
}

// Function to show the previous slide
function showPrevSlide() {
  if (currentSlide === 0) {
    // If the first slide is currently displayed, move to the last slide
    currentSlide = carouselSlides.children.length - 1;
  } else {
    // Otherwise, move to the previous slide
    currentSlide--;
  }
  slideCarousel();
}

// Function to show the next slide
function showNextSlide() {
  if (currentSlide === carouselSlides.children.length - 1) {
    // If the last slide is currently displayed, move to the first slide
    currentSlide = 0;
  } else {
    // Otherwise, move to the next slide
    currentSlide++;
  }
  slideCarousel();
}

// Add event listeners for the previous and next buttons
carouselPrev.addEventListener("click", showPrevSlide);
carouselNext.addEventListener("click", showNextSlide);

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);