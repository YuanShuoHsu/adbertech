var scrollPosition;

window.onload = function () {
  const root = document.querySelector("#root");
  const scroll = document.querySelector(".scroll");
  if (root) {
    scroll.classList.add("active");
    scrollPosition = scroll.offsetTop;
  }
};

window.addEventListener("scroll", () => {
  const scroll__fixedContainer = document.querySelector(
    ".scroll__stickyContainer"
  );

  const circle = document.querySelector(".circle");
  const scrollDistance = window.pageYOffset;
  const rotationAngle = scrollDistance * 0.1;

  if (window.pageYOffset >= scrollPosition) {
    scroll__fixedContainer.classList.add("active");
    circle.style.transform = `rotate(${rotationAngle}deg)`;
  } else {
    scroll__fixedContainer.classList.remove("active");
    circle.style.transform = `rotate(${-rotationAngle}deg)`;
  }
});
