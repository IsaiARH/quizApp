import anime from "animejs";

const containerQuestions = document.querySelectorAll(".question-container");
const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();
const head = document.querySelector(".header");

items.forEach((item) => {
  item.addEventListener("click", () => {
    anime({
      targets: ".devOps, .random",
      translateY: -up.top * 3,
      translateX: -up.top * 3,
      duration: 3000,
    });
    anime({
      targets: ".netWOrking, .Programming",
      translateY: -up.top * 3,
      translateX: up.top * 3,
      duration: 3000,
    });
    anime({
      targets: ".cloud, .doker",
      translateY: down.bottom * 3,
      translateX: -down.bottom * 3,
      duration: 3000,
    });
    anime({
      targets: ".kubernetes, .linux",
      translateY: down.bottom * 3,
      translateX: down.bottom * 3,
      duration: 3000,
    });
  });
});

containerQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < containerQuestions.length; i++) {
      if (containerQuestions[i].classList.contains("active")) {
        containerQuestions[i].classList.remove("active");
        containerQuestions[i].classList.remove("question-container-active");
      }
    }
    item.classList.add("active");
    item.classList.add("question-container-active");
  });
});

const iconQuestion = document.querySelector(".icon-question");
const bodyQuestion = document.querySelector(".body-question");
const $bodyQuestion = bodyQuestion.getBoundingClientRect();

iconQuestion.style.top = `${$bodyQuestion.top - 40}px`;
iconQuestion.style.right = `${$bodyQuestion.left - 40}px`;
