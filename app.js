document.addEventListener("DOMContentLoaded", () => {
  console.log("Innovision 2025 Page Loaded");
});

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;

function moveToSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateIndicators();
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides;
  moveToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  moveToSlide(prevIndex);
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    stopAutoSlide();
    moveToSlide(index);
    startAutoSlide();
  });
});

carousel.addEventListener("mouseenter", stopAutoSlide);

carousel.addEventListener("mouseleave", startAutoSlide);

moveToSlide(currentIndex);
startAutoSlide();

const starContainer = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 1 + 1;
  const positionX = Math.random() * window.innerWidth;
  const positionY = Math.random() * window.innerHeight;
  const animationDuration = Math.random() * 2 + 2;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${positionX}px`;
  star.style.top = `${positionY}px`;
  star.style.animationDuration = `${animationDuration}s`;

  starContainer.appendChild(star);
}

for (let i = 0; i < 80; i++) {
  createStar();
}
