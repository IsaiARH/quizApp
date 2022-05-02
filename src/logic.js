import anime from "animejs";

const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();
const head = document.querySelector(".header");
const sectionChoose = document.querySelector(".choose");
const topic = document.querySelector(".topic");
import giftCongratulations from "./imgs/72582-congratulations.gif";
import giftNervous from "./imgs/74787-nervous-laughter (1).gif";
import giftSad from "./imgs/96537-sad-emoji (1).gif";
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
      getAnswer(".answers-1");
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

//gettin the answer
const getAnswer = (answersClass) => {
  const answers = document.querySelectorAll(answersClass);
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      const containerAnswers = answer.parentElement;
      for (let i = 0; i < containerAnswers.children.length; i++) {
        if (
          containerAnswers.children[i].classList.contains(
            "question-button-active"
          )
        ) {
          containerAnswers.children[i].classList.remove(
            "question-button-active"
          );
        }
      }
      answer.classList.add("question-button-active");
    });
  });
};

//animation of the button next
const containerGift = document.querySelector(".result-gift");
const resultGift = document.createElement("img");
const questionContainer = document.querySelector(".question");
const result = document.querySelector(".result");
const correctAnswers = document.querySelector(".result-answers");
const amoungAnswers = document.querySelector(".amoung-result");
const answerButtons = document.querySelectorAll(".result_questions-button");
const buttonNext = document.querySelector(".next");
buttonNext.addEventListener("click", () => {
  let variance = Math.floor(amoungAnswers.textContent / 2);
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

  //changing the color of the hypens
  let $identifyG = identify.slice(10);
  for (let i = 0; i < $identifyG; i++) {
    bodyQuestionS.children[1].children[i].classList.add("hypen");
  }

  //hiding the element previous to the actually
  $bodyQuestionS.classList.add("answered");

  //changing the href to pass to the other element in the carrousel
  setTimeout(() => {
    try {
      buttonNext.setAttribute(
        "href",
        `#${bodyQuestionS.nextElementSibling.getAttribute("id")}`
      );
    } catch (error) {
      /*this error happens when there are no other elements in the carrousel giving us 
      the oportunity to show the result of our answers*/
      if (questionContainer.classList.contains("active")) {
        questionContainer.classList.add("d-none");
        result.classList.remove("d-none");
        if (correctAnswers.textContent > variance) {
          result.style.backgroundColor = "#3c424a";
          resultGift.src = giftCongratulations;
          containerGift.appendChild(resultGift);
          answerButtons.forEach(
            (button) => (button.style.backgroundColor = "#3c424a")
          );
        } else if (correctAnswers.textContent == variance) {
          result.style.backgroundColor = "#fff";
          resultGift.src = giftNervous;
          containerGift.appendChild(resultGift);
          answerButtons.forEach(
            (button) => (button.style.backgroundColor = "#fff")
          );
        } else {
          result.style.backgroundColor = "#fff";
          resultGift.src = giftSad;
          containerGift.appendChild(resultGift);
          answerButtons.forEach(
            (button) => (button.style.backgroundColor = "#fff")
          );
        }
      } else {
        questionContainer.classList.add("active");
      }
    }
  }, 500);

  getAnswer(`.answers-${$identifyG}`);
});
