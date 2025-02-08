'use strict';

const backToTop = document.querySelector('.back-to-top');
const triggerPoint = 2000;

window.addEventListener('scroll', function () {
  if (this.window.scrollY > triggerPoint) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});
