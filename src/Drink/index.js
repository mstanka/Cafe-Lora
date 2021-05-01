import Layer from '../Layer';
import './style.css';

const Drink = ({ id, name, ordered, layers }) => {
  let layersHTML = '';
  for (let i = 0; i < layers.length; i++) {
    layersHTML += Layer(layers[i]);
  }

  const element = document.createElement('div');
  element.classList.add('drink');

  element.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${id}.png" />
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
        ${layersHTML}
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn" ordered=${ordered}>Objednat</button>
    </div>
  `;

  // order
  const orderBtn = element.querySelector('.order-btn');
  const drinkCup = element.querySelector('.drink__cup');

  orderBtn.addEventListener('click', () => {
    if (ordered) {
      orderBtn.textContent = 'Objednat';
      drinkCup.classList.toggle('drink__cup--selected');
      ordered = false;
    } else {
      orderBtn.textContent = 'Zrušit';
      drinkCup.classList.toggle('drink__cup--selected');
      ordered = true;
    }
  });

  return element;
};

export default Drink;
