let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};

const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", (e) => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
});

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

document.addEventListener("DOMContentLoaded", init(currentSlide));

// Button controls

// let playing = true;
// let slideInterval = setInterval(next, 5000);
// const pauseButton = document.getElementById("pause");

// const pauseSlides = () => {
//   pauseButton.innerHTML = "▶️";
//   playing = false;
//   clearInterval(slideInterval);
// };

// const playSlides = () => {
//   pauseButton.innerHTML = "⏸";
//   playing = true;
//   slideInterval = setInterval(nextSlide, 5000);
// };

// pauseButton.onclick = function () {
//   if (playing) {
//     pauseSlides();
//   } else {
//     playSlides();
//   }
// };
