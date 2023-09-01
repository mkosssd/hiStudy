let brands = ["HiStudy", "NoStudy", "LoStudy", "OkStudy"];
setInterval(() => {
  let i = Math.floor(Math.random() * brands.length);
  document.getElementById("brandName").innerText = brands[i];
}, 900);

const swiper = document.querySelector(".scroll");
const width = document.querySelector(".card").offsetWidth;

function scroller(direction) {
  if (direction === "right") {
    swiper.scrollLeft += width + 40;
  } else {
    swiper.scrollLeft -= width + 40;
  }
  console.log(swiper.scrollLeft);
}
let nav = document.getElementById("navBar");
const toggle = () => {
  if (nav.classList.contains("menu")) {
    nav.classList.add("navs");
    nav.classList.remove("menu");
  } else {
    nav.classList.add("menu");
    nav.classList.remove("navs");
  }
};
