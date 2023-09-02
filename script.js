let brands = ['HiStudy', 'NoStudy', 'LoStudy', 'OkStudy']
setInterval(() => {
  let i = Math.floor(Math.random() * brands.length)
  document.getElementById('brandName').innerText = brands[i]
}, 900)

const swiper = document.querySelector('.scroll')
const width = document.querySelector('.card').offsetWidth

function scroller (direction) {
  if (direction === 'right') {
    swiper.scrollLeft += width + 40
  } else {
    swiper.scrollLeft -= width + 40
  }
  console.log(swiper.scrollLeft)
}
let nav = document.getElementById('navBar')
const toggle = () => {
  if (nav.classList.contains('menu')) {
    nav.classList.add('navs')
    nav.classList.remove('menu')
  } else {
    nav.classList.add('menu')
    nav.classList.remove('navs')
  }
}

const counter = document.getElementById('counter')

let count = 475
let scrolling = false

function update () {
  counter.textContent = count
}

function isScroll () {
  if (!scrolling && window.scrollY >= 200) {
    scrolling = true
    Counter()
  }
}

function Counter () {
  const interval = setInterval(() => {
    if (count < 500) {
      count++
      update()
    } else {
      clearInterval(interval)
    }
  }, 40)
}

window.addEventListener('scroll', isScroll)
