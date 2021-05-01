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
      <div class="drink__info"></div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  `;

  element.querySelector('.drink__info').innerHTML = `
    <h3>${name}</h3>
    ${layersHTML}
  `;

  return element;
};

export default Drink;
