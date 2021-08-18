'use strict'; const p = (...t) => console.log(...t); let tmp;

// PART-1 useful
// A. Select
p(document.documentElement.clientHeight, document.documentElement.clientWidth); //html
p(document.querySelectorAll('.section'));
p(document.getElementById('section--1'));
p(document.getElementsByClassName('nav__item'));
p(document.getElementsByTagName('button'));

// getAttribute, setAttribute
// classList - add, remove, toggle, contains

//B. Create
const header = document.querySelector('.header');
const div = document.createElement('div');
div.innerHTML = `We have used cookies for better perfomance and analytics!
 <button class='btn btn-close-cookie'>Got it</button>`
header.append(div); // Add as last child
// prepend : add as first child
// before and after - Add as sibling element.
document.querySelector('.btn-close-cookie').addEventListener('click', ()=>div.remove())
div.style.backgroundColor = '#ff58602d';

// PART-2 : Smooth scrolling

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//===================PART-2 : Smooth scrolling =============
const section_1 = document.querySelector('#section--1')
const learn_more_btn = document.querySelector('.btn--scroll-to');
learn_more_btn.addEventListener('click', ()=>{
  //old way
  // const rect = section_1.getBoundingClientRect();
  // window.scrollTo({
  //   left: rect.left + window.pageXOffset, 
  //   top:  rect.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });
  // new way
  section_1.scrollIntoView({behavior: 'smooth'})
})

//===================PART-3 :Events =============
// A. Lsiyen to event once: pattern
// B. Propogation - bubble and capturing
function parent_event_handler(e){console.log('Event handle at parent', e.target)}
function child_event_handler(e) {console.log('Event handle at child', e.target)}
document.querySelector('#section--1').addEventListener('click', parent_event_handler);
document.querySelector('#section--1--title').addEventListener('click', child_event_handler);



