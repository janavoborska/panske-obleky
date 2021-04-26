'use strict';

console.log('funguju');

const oblekElm = document.querySelector('.product__colors');

oblekElm.innerHTML = `<p>Vyberte si barvu produktu</p>
<div class="choose-colors">
  <div class="color-option">
    <div class="color-option__box"></div>
    <p class="color-option__name">bílá</p>
  </div>
</div>`;
