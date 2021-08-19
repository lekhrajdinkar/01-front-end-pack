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
//div.style.backgroundColor = '#ff58602d';

// PART-2 : Smooth scrolling
// section_1.scrollIntoView({behavior: 'smooth'})

// PART-3 Events
// event tracking and bubbling
// god practice to add event at parent rather than adding on 100 child then use e.target

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
function child_event_handler(e) {
  console.log('Event handle at child', e.target);
  //e.stopPropagation
}
document.querySelector('#section--1').addEventListener('click', parent_event_handler);
document.querySelector('#section--1--title').addEventListener('click', child_event_handler);

const nav_links = document.querySelector('.nav__links');
//nav_links.children.forEach(l => l.addEventListener())

// C. Add smooth scroll on nav links 
nav_links.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const id = e.target.getAttribute('href')
  const section = document.querySelector(id);
  console.log("nav_links.addEventListener::", id, section, e.target)
  if(section) section.scrollIntoView({behavior: 'smooth'});
})


// D. Sticky Nav
const scroll_cb = () => {
  const nav = document.querySelector('.nav');
  const section_1 = document.querySelector('#section--1');
  const rect = section_1.getBoundingClientRect();
  nav.classList.add('sticky');

  if(window.scrollY == 0)
  {  nav.classList.toggle('sticky');  nav.style.color = 'white'}

  if(window.scrollY > rect.top/3)
    {  nav.style.backGround = 'red' }

  if(window.scrollY > rect.top/2)
  {  nav.style.color = 'green' }

  if(window.scrollY > rect.top)
  {  nav.style.color = 'yellow' }
}
window.addEventListener('scroll', scroll_cb);
window.removeEventListener('scroll', scroll_cb)

//=========== better way, above solution has performance issue on older smart phone.
// ======= IntersectionObserver ======

const cb = (entries, obsvr) => {
  console.log(entries);
  const [entry] = entries; // [entry] = entries[0]
  const nav = document.querySelector('.nav');
  entry.isIntersecting ? nav.classList.remove('sticky') :  nav.classList.add('sticky')
}
const options = {root: null, thresold: 0.1, rootMargin: '-90px'} //interset 0. % of root element /vp
const obsvr = new IntersectionObserver(cb, options)

// subscribe
obsvr.observe(document.querySelector('.header'));

// ============ section showup effect ==========

const section_options = {root: null, thresold: 0.15}

const revealSection_cb = (entries, obsvr) => {
  const [entry] = entries; 
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('section--hidden')
  //obsvr.unobserve(entry.target);
}

const section_obsvr = new IntersectionObserver(revealSection_cb, section_options);

// subscribe
const sections = document.querySelectorAll('.section');
sections.forEach(s=>{
  section_obsvr.observe(s);
  s.classList.add('section--hidden');
});

