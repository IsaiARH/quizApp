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
          <i class="mx-1 hypen">-</i>       
        </div>
        <h4 class="text-center question-about">what is</h4>
        <div class="questions d-flex flex-column align-items-center">
          <button class="question-button answer_a_correct mb-2  py-1">test</button>

          <button class="question-button answer_b_correct mb-2  py-1">test</button>

          <button class="question-button answer_c_correct mb-2  py-1">test</button>
          
          <button class="question-button answer_d_correct  py-1">test</button>
        </div>
      </div>`;

const hypenQuestion = `<i class="mx-1">-</i>`;
//carrousel
const containerSectionQuestion = document.querySelector(".container");
containerSectionQuestion.innerHTML = sectionQuestion;
const amoungAnswers = document.querySelector(".amoung-result");
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

    //adding a clas to the answers
    for (let j = 0; j < 4; j++) {
      containerSectionQuestion.children[i].children[3].children[
        j
      ].classList.add(`answers-${i + 1}`);
    }

    //adding icon to the elements in the carrousel
    containerSectionQuestion.children[
      i
    ].children[0].children[2].children[0].src = icon;

    //the first icon is dinamically positioned
    const bodyQuestionId = document.getElementById("question-1");
    const $bodyQuestionId = bodyQuestionId.getBoundingClientRect();
    containerSectionQuestion.children[0].children[0].children[2].children[0].style.top = `${
      $bodyQuestionId.top - 60
    }px`;
    containerSectionQuestion.children[0].children[0].children[2].children[0].style.right = `${$bodyQuestionId.left}px`;
    //adding the hypens dinamically in the DOM
    for (let j = 0; j < n; j++) {
      containerSectionQuestion.children[i].children[1].innerHTML +=
        hypenQuestion;
    }

    //adding the number of question and the total of questions
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[0].textContent = `${i + 1}/`;
    containerSectionQuestion.children[
      i
    ].children[0].children[1].children[1].textContent = n + 1;

    amoungAnswers.textContent = n + 1;
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

//here we see if the answer is correct or incorrect
const buttonNext = document.querySelector(".next");
const questionContainer = document.querySelector(".question");
const correctAnswers = document.querySelector(".result-answers");
let correctAnswersArray = [];
let incorrectAnswersArray = [];
let skipArray = [];
let counter = 0;
const testAnswer = (res) => {
  buttonNext.addEventListener("click", () => {
    console.log(res);
    let identify = buttonNext.getAttribute("href");
    let $identify = identify.slice(10);
    let thisIdentify = document.getElementById(identify.slice(1));
    let previousIdentify = thisIdentify.previousElementSibling;
    let claves = Object.keys(res[$identify - 1].correct_answers);
    if (questionContainer.classList.contains("active")) {
      //this is a complete procces for the last question
      for (let i = 0; i < 4; i++) {
        let clave = claves[i];
        if (res[$identify - 1].correct_answers[clave] == "true") {
          for (let j = 0; j < thisIdentify.children[3].children.length; j++) {
            if (
              thisIdentify.children[3].children[j].classList.contains(clave)
            ) {
              if (
                thisIdentify.children[3].children[j].classList.contains(
                  "question-button-active"
                )
              ) {
                counter = counter + 1;
                correctAnswers.innerHTML = counter;
                //adding the correct answers in an array to show after we  make click on the correct answers button
                correctAnswersArray.push([
                  thisIdentify.getAttribute("id").slice(9),
                  thisIdentify.children[2].textContent,
                  thisIdentify.children[3].children[j].textContent,
                ]);
                return counter, correctAnswersArray;
              } else {
                for (
                  let j = 0;
                  j < thisIdentify.children[3].children.length;
                  j++
                ) {
                  if (
                    thisIdentify.children[3].children[j].classList.contains(
                      "question-button-active"
                    )
                  ) {
                    //adding the incorrect dates in a array to show when we make a click on the wrong answers button
                    incorrectAnswersArray.push([
                      thisIdentify.getAttribute("id").slice(9),
                      thisIdentify.children[2].textContent,
                      thisIdentify.children[3].children[j].textContent,
                    ]);
                    return incorrectAnswersArray;
                  } else {
                    if (j == thisIdentify.children[3].children.length - 1) {
                      //ading the skip dates in a array to show when we make a click on the skip answers button
                      skipArray.push([
                        thisIdentify.getAttribute("id").slice(9),
                        thisIdentify.children[2].textContent,
                      ]);
                      return skipArray;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    //Over here we get the score from the all of the questions except the last one
    else {
      for (let i = 0; i < 4; i++) {
        let clave = claves[i];
        if (res[$identify - 2].correct_answers[clave] == "true") {
          for (
            let j = 0;
            j < previousIdentify.children[3].children.length;
            j++
          ) {
            if (
              previousIdentify.children[3].children[j].classList.contains(clave)
            ) {
              if (
                previousIdentify.children[3].children[j].classList.contains(
                  "question-button-active"
                )
              ) {
                counter = counter + 1;
                correctAnswers.innerHTML = counter;
                correctAnswersArray.push([
                  previousIdentify.getAttribute("id").slice(9),
                  previousIdentify.children[2].textContent,
                  previousIdentify.children[3].children[j].textContent,
                ]);
                return counter, correctAnswersArray;
              } else {
                for (
                  let j = 0;
                  j < previousIdentify.children[3].children.length;
                  j++
                ) {
                  if (
                    previousIdentify.children[3].children[j].classList.contains(
                      "question-button-active"
                    )
                  ) {
                    //adding the incorrect dates in a array to show when we make a click in the wrong answers button
                    incorrectAnswersArray.push([
                      previousIdentify.getAttribute("id").slice(9),
                      previousIdentify.children[2].textContent,
                      previousIdentify.children[3].children[j].textContent,
                    ]);
                    return incorrectAnswersArray;
                  } else {
                    if (j == previousIdentify.children[3].children.length - 1) {
                      //ading the skip dates in a array to show when we make a click in the skip answers button
                      skipArray.push([
                        previousIdentify.getAttribute("id").slice(9),
                        previousIdentify.children[2].textContent,
                      ]);
                      return skipArray;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
};

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
          testAnswer(res);
        });
    } else if (item.children[1].textContent == "Bash") {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
        category=${item.children[1].textContent}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => {
          carrousel(res.length - 1, res, item.children[0].src);
          testAnswer(res);
        });
    } else {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&
        category=${item.children[1].textContent}&difficulty=${difficult}&limit=${numbers}`
      )
        .then((res) => res.json())
        .then((res) => {
          carrousel(res.length - 1, res, item.children[0].src);
          testAnswer(res);
        });
    }
  });
});

//showing the correct, incorrect and skip answers
const buttonsContainer = document.querySelector(".result-questions");
buttonsContainer.children[0].addEventListener("click", () => {
  console.log(correctAnswersArray);
});

buttonsContainer.children[1].addEventListener("click", () => {
  console.log(incorrectAnswersArray);
});

buttonsContainer.children[2].addEventListener("click", () => {
  console.log(skipArray);
});
