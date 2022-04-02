import anime from "animejs";
var path = anime.path(".motion-path-demo path");

const items = document.querySelectorAll(".item");
const devOps = document.querySelector(".devOps");
const linux = document.querySelector(".linux");
const up = devOps.getBoundingClientRect();
const down = linux.getBoundingClientRect();

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
