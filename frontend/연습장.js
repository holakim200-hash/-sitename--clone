const btn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', function() {
  menu.classList.toggle('active');
});