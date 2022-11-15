document.getElementsByClassName("hamburger")[0].addEventListener("click", fn);
function fn() {
  document
    .getElementsByClassName("nav-mobile-page")[0]
    .classList.toggle("nav-second-mobile");
}
