import './style.css';
import Layer from './Layer';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');

// toggle navigation
navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
  console.log(nav.classList);
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
}

// order
orderBtn.addEventListener('click', () => {
  orderBtn.textContent === 'Objednat'
    ? (orderBtn.textContent = 'Zrušit')
    : (orderBtn.textContent = 'Objednat');
  drinkCup.classList.toggle('.drink__cup--selected');
});

// ingredients
const ingredients = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

Layer(ingredients[0]);
Layer(ingredients[1]);
Layer(ingredients[2]);
