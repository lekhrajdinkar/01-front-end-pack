'use strict';
console.log('Slidder Demo');

const dots = document.querySelector('.dots');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

console.log(slides)

const goToSlide = (slide_num) => {
  console.log(curSlide)
  slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i - slide_num ) }%)`) //view slide-0
}
const next_slide = () => {
  curSlide++ ; curSlide= curSlide%maxSlide;
  goToSlide(curSlide); activateDot(curSlide);
}
const previous_slide = () => {
  if(curSlide === 0 ) curSlide = maxSlide; curSlide-- ; 
  goToSlide(curSlide);  activateDot(curSlide);
}

function activateDot(slide_num){
  const all_dot = document.querySelectorAll(`.dot`);
  all_dot.forEach(d => d.classList.remove('dot__active'));
  const active_dot = document.querySelector(`.dot--${slide_num}`);
  active_dot.classList.add('dot__active');
} 

function createDots(){
  slides.forEach((s,i) => {
    //slider.insertAdjacentHTML('beforeend', '<div class="dot"> </div>')
    const dot = document.createElement(`div`);
    dot.classList.add(`dot`); dot.classList.add(`dot--${i}`);
    dots.append(dot);
  })
} 

const init = function () {
  goToSlide(curSlide);
  createDots();
  activateDot(0);
  btnRight.addEventListener('click', next_slide)
  btnLeft.addEventListener('click', previous_slide)
};

init();



