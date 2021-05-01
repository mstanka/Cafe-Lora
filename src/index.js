import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
  console.log(nav.classList);
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
}
