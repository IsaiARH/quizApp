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

const head = document.querySelector(".header");
const codeHead = `
<div class="d-flex me-auto">
  <div class="d-flex align-items-center mx-4">
    <p class="me-1 dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Difficulty</p>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Easy</a></li>
    <li><a class="dropdown-item" href="#">Medium</a></li>
    <li><a class="dropdown-item" href="#">Hard</a></li>
  </ul>
  </div>
  <div class="d-flex align-items-center">
    <p class="me-1 dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Number of questions</p>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item number-question" href="#">1</a></li>
    <li><a class="dropdown-item number-question" href="#">2</a></li>
    <li><a class="dropdown-item number-question" href="#">3</a></li>
    <li><a class="dropdown-item number-question" href="#">4</a></li>
    <li><a class="dropdown-item number-question" href="#">5</a></li>
    <li><a class="dropdown-item number-question" href="#">6</a></li>
    <li><a class="dropdown-item number-question" href="#">7</a></li>
    <li><a class="dropdown-item number-question" href="#">8</a></li>
    <li><a class="dropdown-item number-question" href="#">9</a></li>
    <li><a class="dropdown-item number-question" href="#">10</a></li>
    <li><a class="dropdown-item number-question" href="#">11</a></li>
    <li><a class="dropdown-item number-question" href="#">12</a></li>
    <li><a class="dropdown-item number-question" href="#">13</a></li>
    <li><a class="dropdown-item number-question" href="#">14</a></li>
    <li><a class="dropdown-item number-question" href="#">15</a></li>
    <li><a class="dropdown-item number-question" href="#">16</a></li>
    <li><a class="dropdown-item number-question" href="#">17</a></li>
    <li><a class="dropdown-item number-question" href="#">18</a></li>
    <li><a class="dropdown-item number-question" href="#">19</a></li>
  </ul>
  </div>
</div>
<div class="d-flex me-auto">
  <h1 class="me-2">QuizDev</h1>
  <div>
    <img src=${icon} alt="">
  </div>
</div>
`;
head.innerHTML = codeHead;

const choose = document.querySelector(".choose");

const contChoose = `
<div class="d-flex justify-content-center my-5 items">
  <div class="random d-flex flex-column align-items-center item">
    <img src=${random} alt="">
    <p class="">Uncategorized</p>
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
    <p class="">Doker</p>
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

//add img to the section question
const iconQuestionContainer = document.querySelector(
  ".icon_question-container"
);
const iconQuestion = document.createElement("img");
iconQuestion.classList.add("icon-question");
iconQuestion.src = linux;
iconQuestionContainer.appendChild(iconQuestion);
