//calls
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import style from "./style.css";
import anime from "animejs";

//images
import icon from "./imgs/icons/404-error (2).png";
import random from "./imgs/icons/transfer.png";
import devOps from "./imgs/icons/gears.png";
import netWOrking from "./imgs/icons/teamwork.png";
import programing from "./imgs/icons/code-listing.png";
import cloud from "./imgs/icons/cloud.png";
import doker from "./imgs/icons/whale.png";
import kubernetes from "./imgs/icons/helm.png";
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
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
    <li><a class="dropdown-item" href="#">4</a></li>
    <li><a class="dropdown-item" href="#">5</a></li>
    <li><a class="dropdown-item" href="#">6</a></li>
    <li><a class="dropdown-item" href="#">7</a></li>
    <li><a class="dropdown-item" href="#">8</a></li>
    <li><a class="dropdown-item" href="#">9</a></li>
    <li><a class="dropdown-item" href="#">10</a></li>
    <li><a class="dropdown-item" href="#">11</a></li>
    <li><a class="dropdown-item" href="#">12</a></li>
    <li><a class="dropdown-item" href="#">13</a></li>
    <li><a class="dropdown-item" href="#">14</a></li>
    <li><a class="dropdown-item" href="#">15</a></li>
    <li><a class="dropdown-item" href="#">16</a></li>
    <li><a class="dropdown-item" href="#">17</a></li>
    <li><a class="dropdown-item" href="#">18</a></li>
    <li><a class="dropdown-item" href="#">19</a></li>
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
  <div class="random d-flex flex-column align-items-center">
    <img src=${random} alt="">
    <p class="">Random</p>
  </div>
  <div class="devOps mx-5 d-flex flex-column align-items-center">
    <img src=${devOps} alt="">
    <p class="">Devops</p>
  </div>
  <div class="netWOrking me-5 d-flex flex-column align-items-center">
    <img src=${netWOrking} alt="">
    <p class="">Networking</p>
  </div>
  <div class="Programming d-flex flex-column align-items-center">
    <img src=${programing} alt="">
    <p class="">Programming</p>
  </div>
</div>
<div class="d-flex justify-content-center items">
  <div class="cloud d-flex flex-column align-items-center">
    <img src=${cloud} alt="">
    <p class="">Cloud</p>
  </div>
  <div class="doker mx-5 d-flex flex-column align-items-center">
    <img src=${doker} alt="">
    <p class="">Doker</p>
  </div>
  <div class="kubernetes me-5 d-flex flex-column align-items-center">
    <img src=${kubernetes} alt="">
    <p class="">Kubernetes</p>
  </div>
  <div class="linux d-flex flex-column align-items-center">
    <img src=${linux} alt="">
    <p class="">Linux</p>
  </div>
</div>`;

choose.innerHTML = contChoose;

fetch(
  "https://quizapi.io/api/v1/questions?apiKey=tykn9PoZShBttsb4necadNc6S6LQgfwdQzgHZ3B8&category=linux&limit=10"
)
  .then((res) => res.json())
  .then((res) => console.log(res));
