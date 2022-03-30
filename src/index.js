//calls
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import style from "./style.css";
import anime from "animejs";

import icon from "./imgs/icons/404-error (2).png";

const head = document.querySelector(".header");
const codeHead = `
 <h1 class="me-2">QuizDev</h1>
<div>
  <img src=${icon} alt="">
</div>`;
head.innerHTML = codeHead;
