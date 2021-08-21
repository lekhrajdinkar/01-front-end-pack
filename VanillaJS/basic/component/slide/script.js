'use strict';
console.log('Slide Demo');

let current_left = 0;
const right_slides = document.querySelectorAll('.slide--right');
right_slides.forEach((rs,i) => rs.style.transform = `translateY(${i * "100vh"})`)






