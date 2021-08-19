'use strict'; const p = (...t) => console.log(...t); let tmp;

// Tabbed components
// operations__tab-container > (B1 > s1) +  (B2 > s2) + (B3 > s3) 
const operation_tab_container = document.querySelector('.operations__tab-container');

// A. Add Click event
operation_tab_container.addEventListener('click',  (e) => {
    console.log("\n\nclicked", e.target) // button or span.
    // cant use e.target.parent

    // parent of btn : operations__tab-container (cantainer of all 3 btn)
    // parent of span : operations__tab (btn)
    console.log("its parent:", e.target.parentElement); 
    
    // How to always get operations__tab, irrspective what we clicked: span od btn itself
    console.log("button / .operations__tab >> ", e.target.closest('.operations__tab')) //this is perfect

  const btn_clicked = e.target.closest('.operations__tab');
  if(!btn_clicked) return;

  const tab_num = btn_clicked.getAttribute('data-tab');

  const nodelist_btns = document.querySelectorAll('.operations__content');
  nodelist_btns.forEach(e => e.classList.remove('operations__content--active'));

  document.querySelector(`.operations__content--${tab_num}`).classList.add('operations__content--active');

})

// B. Add mouse event
// IMP : CN for event handler takes one argument, how to pass more arg. 
// use bind and this combinition, check below.
function mouse_cb(e) {
  const btn = e.target.closest('.operations__tab');
  const con = e.target.closest('.operations__tab-container');
  console.log(this.other) ; //), con, con.children)
  Array.from(con.children).forEach(c=> {if(btn !== c) {c.style.opacity = this.opacity}})
}

// Mouseover and mouseout bubble the event
operation_tab_container.addEventListener('mouseover', mouse_cb.bind({opacity: 0.5, other: 'calling mouseover cb ....'}));
operation_tab_container.addEventListener('mouseout',  mouse_cb.bind({opacity: 1, other: 'calling mouseout cb ....'}));




