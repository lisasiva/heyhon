/* jslint esnext:true */

///////////////////////////////////////
// GETTING ELEMENTS FROM DOM
///////////////////////////////////////
let nav = document.getElementById("main-nav");
let header = document.querySelector('#header');
let navIcon = document.querySelector('.mobile-nav-icon');
let closeIcon = document.querySelector('.mobile-close-icon');
let mobileNav = document.getElementById('mobileNav');

///////////////////////////////////////
// STICKY NAV BAR 
///////////////////////////////////////

window.onscroll = function() {
    makeSticky();
}

function makeSticky() {
  if (window.pageYOffset >= header.offsetHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

///////////////////////////////////////
// MOBILE NAV
///////////////////////////////////////


/* Open when someone clicks on the span element */

navIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);

function openNav() {
  mobileNav.style.height = "100%";
}

function closeNav() {
  mobileNav.style.height = "0%";
}