let brands = ["HiStudy", "NoStudy", "LoStudy", "OkStudy","GoStudy"];
let i = 0;
setInterval(() => {
  document.getElementById("brandName").innerText = brands[i];
  i++;
  if (i > brands.length-1 ) {
    i = 0;
  }
}, 900);

const swiper = document.querySelector(".scroll");
function scroller(direction) {
  const width = document.querySelector(".cardBox").offsetWidth;
  if (direction === "right") {
    swiper.scrollLeft += width;
  } else {
    swiper.scrollLeft -= width;
  }
  console.log(width);
}

let nav = document.getElementById("navBar");
let main = document.body;
const toggle = () => {
  if (nav.classList.contains("menu")) {
    nav.classList.add("navs");
    nav.classList.remove("menu");
    main.classList.remove("blurBg");
  } else {
    main.classList.add("blurBg");
    nav.classList.add("menu");
    nav.classList.remove("navs");
  }
};

const counter = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
const counter4 = document.getElementById("counter4");
let count = counter.innerText;
let count2 = counter2.innerText;
let count3 = counter3.innerText;
let count4 = counter4.innerText;
let scrolling = false;
window.addEventListener("scroll", isScroll);
function Counter() {
  const interval = setInterval(() => {
    if (count < 500) {
      count++;
      count2++;
      count3++;
      count4++;
      update();
    } else {
      clearInterval(interval);
    }

  }, 40);
}
function update() {
  counter.textContent = count;
  counter2.textContent = count2;
  counter3.textContent = count3;
  counter4.textContent = count4;
}

function isScroll() {
  if (!scrolling && window.scrollY >= 200) {
    scrolling = true;
    Counter();
  }
}
window.addEventListener("resize", function () {
  if (window.innerWidth > 1350) {
    nav.classList.add("navs");
    nav.classList.remove("menu");
    main.classList.remove("blurBg");
  }
});