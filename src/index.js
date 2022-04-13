//calls
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import style from "./style.css";
import anime from "animejs";

//images
import icon from "./imgs/icons/404-error (2).png";
import random from "./imgs/icons/transfer.png";
import devOps from "./imgs/icons/gears.png";
import cms from "./imgs/icons/cms.png";
import programing from "./imgs/icons/code-listing.png";
import bash from "./imgs/icons/gnu-bash.png";
import doker from "./imgs/icons/whale.png";
import sql from "./imgs/icons/sql.png";
import linux from "./imgs/icons/linux.png";

const head = document.querySelector(".header-div");
const codeHead = `
</div>
<div class="d-flex me-auto">
  <h1 class="me-2">QuizDev</h1>
  <div>
    <img src=${icon} alt="">
  </div>
`;
head.innerHTML = codeHead;

const choose = document.querySelector(".choose");
const contChoose = `
<div class="d-flex justify-content-center my-5 items">
  <div class="random d-flex flex-column align-items-center item">
    <img src=${random} alt="">
    <p class="">Random</p>
  </div>
  <div class="devOps mx-5 d-flex flex-column align-items-center item">
    <img src=${devOps} alt="">
    <p class="">Devops</p>
  </div>
  <div class="netWOrking me-5 d-flex flex-column align-items-center item">
    <img src=${cms} alt="">
    <p class="">Cms</p>
  </div>
  <div class="Programming d-flex flex-column align-items-center item">
    <img src=${programing} alt="">
    <p class="">Code</p>
  </div>
</div>
<div class="d-flex justify-content-center items">
  <div class="cloud d-flex flex-column align-items-centerc item">
    <img src=${bash} alt="">
    <p class="">Bash</p>
  </div>
  <div class="doker mx-5 d-flex flex-column align-items-center item">
    <img src=${doker} alt="">
    <p class="">Docker</p>
  </div>
  <div class="kubernetes me-5 d-flex flex-column align-items-center item">
    <img src=${sql} alt="">
    <p class="">SQL</p>
  </div>
  <div class="linux d-flex flex-column align-items-center item">
    <img src=${linux} alt="">
    <p class="">Linux</p>
  </div>
</div>`;
choose.innerHTML = contChoose;

//section questions
const sectionQuestion = `
<div class="body-question p-3 mb-3">
        <div class="d-flex">
            <h3 class="">Question</h3>
            <div class="d-flex h3 ms-auto me-5">
              <p class="">1/</p>
              <p class="question-amoung">19</p>
            </div>
          <div class="icon_question-container">
          <img src="" alt="" class="icon-question ms-2 mb-2">
          </div>
        </div>
        <div class="h3 text-center">
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
          <i>-</i>
        </div>
        <h4 class="text-center question-about">what is</h4>
        <div class="questions d-flex flex-column align-items-center">
          <div
            class="d-flex justify-content-between question-container py-1 px-3"
          >
            <p class="my-auto">test1</p>
            <div class="question_container-input">
              <input type="radio" class="d-none" id="checkbox" />
              <label for="checkbox" class="question_container-label"
                ><ion-icon name="stop-circle-outline" class="mt-1"></ion-icon
              ></label>
            </div>
          </div>
          <div
            class="d-flex justify-content-between question-container py-1 px-3 mt-2"
          >
            <p class="my-auto">test2</p>
            <div class="question_container-input">
              <input type="radio" class="d-none" id="checkbox" />
              <label for="checkbox" class="question_container-label"
                ><ion-icon name="stop-circle-outline" class="mt-1"></ion-icon
              ></label>
            </div>
          </div>
          <div
            class="d-flex justify-content-between question-container py-1 px-3 mt-2"
          >
            <p class="my-auto">test3</p>
            <div class="question_container-input">
              <input type="radio" class="d-none" id="checkbox" />
              <label for="checkbox" class="question_container-label"
                ><ion-icon name="stop-circle-outline" class="mt-1"></ion-icon
              ></label>
            </div>
          </div>
          <div
            class="d-flex justify-content-between question-container py-1 px-3 mt-2 mb-5"
          >
            <p class="my-auto">test</p>
            <div class="question_container-input">
              <input type="radio" class="d-none" id="checkbox" />
              <label for="checkbox" class="question_container-label"
                ><ion-icon name="stop-circle-outline" class="mt-1"></ion-icon
              ></label>
            </div>
          </div>
        </div>
      </div>`;

//carrousel
const containerSectionQuestion = document.querySelector(".container");
containerSectionQuestion.innerHTML = sectionQuestion;
const carrousel = (n, obj, icon) => {
  //adding the elements to the carrousel
  for (let i = 0; i < n; i++) {
    containerSectionQuestion.innerHTML += sectionQuestion;
    if (i + 1 == n) {
      containerSectionQuestion.children[n].classList.add("mb-4", "d-none");
    }
    if (i >= 1) {
      containerSectionQuestion.children[i].classList.add("mb-4", "d-none");
    }
  }
  for (let i = 0; i <= n; i++) {
    //adding a id to the elements in the carrousel
    containerSectionQuestion.children[i].setAttribute(
      "id",
      `question-${i + 1}`
    );

    //adding icon to the elements in the carrousel
    containerSectionQuestion.children[
      i
    ].children[0].children[2].children[0].src = icon;

    const bodyQuestion = containerSectionQuestion.children[i];
    console.log(bodyQuestion);
    const $bodyQuestion = bodyQuestion.getBoundingClientRect();

    //adding the number of question and the total of questions
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[0].textContent = `${i + 1}/`;
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[1].textContent = n + 1;
    //adding the question
    containerSectionQuestion.children[i].children[2].textContent =
      obj[i].question;

    //adding the answers to the DOM and deletin the elements if there are 3 answer or fewer
    for (let j = 0; j < 4; j++) {
      if (j == 0) {
        containerSectionQuestion.children[i].children[3].children[j].innerHTML =
          obj[i].answers.answer_a;
      } else if (j == 1) {
        containerSectionQuestion.children[i].children[3].children[j].innerHTML =
          obj[i].answers.answer_b;
      } else if (j == 2) {
        if (obj[i].answers.answer_c == null) {
          containerSectionQuestion.children[i].children[3].removeChild(
            containerSectionQuestion.children[i].children[3].children[j]
          );
        } else {
          containerSectionQuestion.children[i].children[3].children[
            j
          ].innerHTML = obj[i].answers.answer_c;
        }
      } else if (j == 3) {
        if (obj[i].answers.answer_d == null) {
          containerSectionQuestion.children[i].children[3].removeChild(
            containerSectionQuestion.children[i].children[3].lastElementChild
          );
        } else {
          containerSectionQuestion.children[i].children[3].children[
            j
          ].innerHTML = obj[i].answers.answer_d;
        }
      }
    }
  }
};

//dropdown difficult
const difficultOption = document.querySelectorAll(".difficult-item");
let difficult = "easy";
difficultOption.forEach((option) => {
  option.addEventListener("click", () => {
    difficult = option.textContent;
    return difficult;
  });
});

//dropdown number of questions
let numbers = 10;
const optionNumber = document.querySelectorAll(".number-question");
optionNumber.forEach((option) => {
  option.addEventListener("click", () => {
    numbers = option.textContent;
  });
});

//calling to the API
const question = document.querySelector(".question");
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    question.classList.remove("d-none");
    if (item.children[1].textContent == "Random") {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
         &difficulty=${difficult}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => {
          carrousel(res.length - 1, res, item.children[0].src);
        });
    } else if (item.children[1].textContent == "Bash") {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
        category=${item.children[1].textContent}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => {
          carrousel(res.length - 1, res, item.children[0].src);
        });
    } else {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
        category=${item.children[1].textContent}&difficulty=${difficult}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => {
          carrousel(res.length - 1, res);
          console.log(res);
        });
    }
  });
});
