"use strict";
const questions = document.querySelector(".accordian-questions");
const sliders = document.querySelectorAll(`.question-box`);

questions.addEventListener("click", function (el) {
  el.preventDefault();
  const sliders = document.querySelectorAll(`.question-box`);
  sliders.forEach((slide) => {
    if (el.target.closest(".question-box") === slide) {
      slide.classList.toggle("active");
    } else {
      slide.classList.remove("active");
    }
  });
});

document.addEventListener("click", function (el) {
  sliders.forEach((slide) => {
    if (el.target.closest(".question-box") !== slide) {
      slide.classList.remove("active");
    }
  });
});
