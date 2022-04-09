import anime from "animejs";
import linuxIcon from "./imgs/icons/linux.png";

const containerQuestions = document.querySelectorAll(".question-container");
const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();
const head = document.querySelector(".header");
const sectionChoose = document.querySelector(".choose");
const difficultOption = document.querySelectorAll(".dropdown-item");
const topic = document.querySelector(".topic");

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
  let number = 10;
  option.addEventListener("click", () => {
    numbers = option.textContent;
    return numbers;
  });
});

//dinamic position of the icon
const bodyQuestion = document.querySelector(".body-question");
const $bodyQuestion = bodyQuestion.getBoundingClientRect();
const iconQuestion = document.createElement("img");

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
    console.log(typeof numbers);
    if (item.children[1].textContent == "Random") {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
         &difficulty=${difficult}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
        category=${item.children[1].textContent}&difficulty=${difficult}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
    //    carrousel(numbers - 1);
    topic.textContent = item.children[1].textContent;
    iconQuestion.src = item.children[0].src;
    const iconQuestionContainer = document.querySelector(
      ".icon_question-container"
    );
    iconQuestionContainer.appendChild(iconQuestion);
    iconQuestion.style.top = `${$bodyQuestion.top - 50}px`;
    iconQuestion.style.right = `${$bodyQuestion.left}px`;
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

//creating the carrousel
//import { sectionQuestion } from "./index.js";
const containerSectionQuestion = document.querySelector(".container");
const carrousel = (n) => {
  for (let i = 0; i < n; i++) {
    containerSectionQuestion.innerHTML += sectionQuestion;
  }
  for (let i = 0; i <= n; i++) {
    containerSectionQuestion.children[i].setAttribute(
      "id",
      `question-${i + 1}`
    );
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[0].textContent = `${i + 1}/`;
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[1].textContent = numbers;
  }
};

//animation of the button next
const buttonNext = document.querySelector(".next");
buttonNext.addEventListener("click", () => {
  topic.classList.add("mb-5");
  containerSectionQuestion.classList.add("container-active");
  let identify = buttonNext.getAttribute("href");
  let $identify = identify.slice(1);
  let bodyQuestionS = document.getElementById(`${$identify}`);
  setTimeout(() => {
    let $questionNumber = bodyQuestionS.getAttribute("id").split("");
    let number = $questionNumber[$questionNumber.length - 1];
    buttonNext.setAttribute(
      "href",
      `#${bodyQuestionS.nextElementSibling.getAttribute("id")}`
    );
  }, 500);
});
