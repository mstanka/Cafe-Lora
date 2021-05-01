import Drink from './Drink';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const drinkList = document.querySelector('.drinks-list');

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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

drinks.forEach((drink) => drinkList.appendChild(Drink(drink)));
