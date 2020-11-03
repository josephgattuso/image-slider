const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const slideContainer = document.querySelector(".slide-container");
const slideSize = slider.offsetWidth;

let currentSlide = 0;
console.log(currentSlide);

// Dots controls

const init = (n) => {
  slides.forEach(() => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
  });
};

// Slide controls

const moveSlides = () => {
  slideContainer.style.transform = `translateX(-${currentSlide * slideSize}px)`;
};

const nextSlide = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
  moveSlides();
};

const prevSlide = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
  moveSlides();
};

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Button controls

let playing = true;
let slideInterval = setInterval(nextSlide, 5000);
const pauseButton = document.getElementById("pause");

const pauseSlides = () => {
  pauseButton.innerHTML = "▶️";
  playing = false;
  clearInterval(slideInterval);
};

const playSlides = () => {
  pauseButton.innerHTML = "⏸";
  playing = true;
  slideInterval = setInterval(nextSlide, 5000);
};

pauseButton.onclick = function () {
  if (playing) {
    pauseSlides();
  } else {
    playSlides();
  }
};

// Dot navigation

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});
