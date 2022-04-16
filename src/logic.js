import anime from "animejs";

const containerQuestions = document.querySelectorAll(".question-container");
const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();
const head = document.querySelector(".header");
const sectionChoose = document.querySelector(".choose");
const topic = document.querySelector(".topic");

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

    topic.textContent = item.children[1].textContent;
    setTimeout(() => {
      chronometerF();
    }, 2000);
  });
});

//chronometer
const chronometer = document.querySelector(".chronometer");

let running = 0;
let stop = 0;
const chronometerF = () => {
  let start = Date.now() - running;
  stop = setInterval(() => {
    running = Date.now() - start;
    chronometer.textContent = calculateTheTime(running);
  }, 1000);
};

const calculateTheTime = (time) => {
  const total_seconds = Math.floor(time / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
};

//effect when we choose an answer
containerQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    question.classList.remove("d-none");
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

//animation of the button next
const buttonNext = document.querySelector(".next");
buttonNext.addEventListener("click", () => {
  topic.classList.add("mb-5");
  let identify = buttonNext.getAttribute("href");
  let $identify = identify.slice(1);
  let bodyQuestionS = document.getElementById(`${$identify}`);
  let $bodyQuestionS = bodyQuestionS.previousElementSibling;
  bodyQuestionS.classList.remove("d-none");

  //the icons are dinamically posicioned
  const sizeBodyQuestionS = bodyQuestionS.getBoundingClientRect();
  const $sizeBodyQuestionS = $bodyQuestionS.getBoundingClientRect();
  bodyQuestionS.children[0].children[2].children[0].style.top = `${
    $sizeBodyQuestionS.top - 60
  }px`;
  bodyQuestionS.children[0].children[2].children[0].style.right = `${sizeBodyQuestionS.left}px`;

  //changing the color of the guion
  let $identifyG = identify.slice(10);
  for (let i = 0; i < $identifyG; i++) {
    bodyQuestionS.children[1].children[i].classList.add("guion");
  }

  //hiding the element previous to the actually
  $bodyQuestionS.classList.add("d-none");

  //changing the href to pass to the other element in the carrousel
  setTimeout(() => {
    buttonNext.setAttribute(
      "href",
      `#${bodyQuestionS.nextElementSibling.getAttribute("id")}`
    );
  }, 500);
});
