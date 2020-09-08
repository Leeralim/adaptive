"use strict";

var button = document.querySelector('#button'),
    modal = document.querySelector('#modal'),
    close = document.querySelector('#close');
button.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

function remove() {
  modal.classList.remove('modal_active');
}

setInterval(remove, 5000);