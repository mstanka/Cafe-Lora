import './style.css';

const drinkInfo = document.querySelector('.drink__info');

const Layer = ({ color, label }) => {
  const layer = document.createElement('div');
  layer.classList.add('layer');

  layer.innerHTML = `
    <div
      class="layer__color"
      style="background-color: ${color}
      ></div>
    <div class="layer__label">${label}</div>
  `;

  return drinkInfo.appendChild(layer);
};

export default Layer;