const track = document.querySelector("#projects-track");
const prevButton = document.querySelector("#project-prev");
const nextButton = document.querySelector("#project-next");
const dots = document.querySelectorAll(".project-dot");

let currentSlide = 0;

const slideWidth = 608;
const slidesPerPage = 2;

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide / slidesPerPage);
  });
}

nextButton.addEventListener("click", () => {
  const maxSlide = track.children.length - slidesPerPage;

  if (currentSlide < maxSlide) {
    currentSlide += slidesPerPage;
  } else {
    currentSlide = 0;
  }

  updateSlider();
});

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= slidesPerPage;
  } else {
    currentSlide = track.children.length - slidesPerPage;
  }

  updateSlider();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const page = Number(dot.dataset.slide);

    currentSlide = page * slidesPerPage;

    updateSlider();
  });
});
