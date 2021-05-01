import Drink from './Drink';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const orderBtn = document.querySelector('.order-btn');
const drinkList = document.querySelector('.drinks-list');

let ordered = false;

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
// orderBtn.addEventListener('click', () => {
//   if (ordered) {
//     orderBtn.textContent = 'Zrušit';
//     drinkCup.classList.add('.drink__cup--selected');
//     ordered = true;
//   } else {
//     orderBtn.textContent = 'Objednat';
//     drinkCup.classList.remove('.drink__cup--selected');
//     ordered = false;
//   }
// });

drinkList.appendChild(
  Drink({
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
  }),
);
