document.getElementsByClassName("hamburger")[0].addEventListener("click", fn);
function fn() {
  document
    .getElementsByClassName("nav-mobile-page")[0]
    .classList.toggle("nav-second-mobile");
}
document
  .getElementsByClassName("outer-flex-1")[0]
  .addEventListener("click", fn1);
document
  .getElementsByClassName("outer-flex-1")[1]
  .addEventListener("click", fn2);
document
  .getElementsByClassName("outer-flex-1")[2]
  .addEventListener("click", fn3);
document
  .getElementsByClassName("outer-flex-1")[3]
  .addEventListener("click", fn4);

function fn1() {
  for (let j = 0; j < 10; j++) {
    document
      .getElementsByClassName("toggle1")
      [j].classList.toggle("footer-flex1-item");
  }
}
function fn2() {
  for (let j = 0; j < 10; j++) {
    document
      .getElementsByClassName("toggle2")
      [j].classList.toggle("footer-flex1-item");
  }
}
function fn3() {
  for (let j = 0; j < 10; j++) {
    document
      .getElementsByClassName("toggle3")
      [j].classList.toggle("footer-flex1-item");
  }
}
function fn4() {
  for (let j = 0; j < 10; j++) {
    document
      .getElementsByClassName("toggle4")
      [j].classList.toggle("footer-flex1-item");
  }
}
