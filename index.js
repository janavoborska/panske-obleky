'use strict';

console.log('funguju');

const oblekElm = document.querySelector('.product__colors');
oblekElm.innerHTML += `<p>Pomocí tlačítek vyberte barvu produktu</p>
<div class="colors">
  <div class="color">
    <div class="color-box"></div>
    <p class="color__name">bílá</p>
  </div>
</div>
`;
