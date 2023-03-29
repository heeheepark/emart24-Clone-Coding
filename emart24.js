let slides = document.querySelector('.product');
let slide = document.querySelectorAll('.product li');
let currentIndex = 0;
let slideCount = slide.length;
let slideBtn = document.querySelectorAll('#slideBtns a');
console.log(slideBtn)

let prevBtn = document.querySelector('.circle1');
let nextBtn = document.querySelector('.circle2');

let slideWidth = 220;
let slideMargin = 20;

slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

nextBtn.addEventListener("click", function() {
  moveSlide(currentIndex + 4);
})

prevBtn.addEventListener("click", function() {
  moveSlide(currentIndex - 4);
})

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIndex = num;
  console.log(currentIndex);
}


