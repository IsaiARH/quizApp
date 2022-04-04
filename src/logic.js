import anime from "animejs";

const containerQuestions = document.querySelectorAll(".question-container");
const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();
const head = document.querySelector(".header");
const sectionChoose = document.querySelector(".choose");
const difficultOption = document.querySelectorAll(".dropdown-item");

//getting the difficult
let difficult = "easy";
difficultOption.forEach((option) => {
  option.addEventListener("click", () => {
    difficult = option.textContent;
    return difficult;
  });
});

//getting the number of questions
let numbers = 10;
const optionNumber = document.querySelectorAll(".number-question");
optionNumber.forEach((option) => {
  option.addEventListener("click", () => {
    numbers = option.textContent;
    return numbers;
  });
});

//animation of the section choose
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
    setTimeout(() => {
      head.classList.add("d-none");
      sectionChoose.classList.add("d-none");
    }, 1000);
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
      category=${item.children[1].textContent}&difficulty=${difficult}&limit=${numbers}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
});

//effect when we choose an answer
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

//dinamic position of the icon
const iconQuestion = document.querySelector(".icon-question");
const bodyQuestion = document.querySelector(".body-question");
const $bodyQuestion = bodyQuestion.getBoundingClientRect();
iconQuestion.style.top = `${$bodyQuestion.top - 50}px`;
iconQuestion.style.right = `${$bodyQuestion.left}px`;
