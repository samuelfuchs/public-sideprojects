'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // we don't put a '.' before hidden. This is only to select things. We already made our selection
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

/* ==========
Handling an "Esc" Keypress Event
========== */
// here we listen to events everywhere, like key pressing
//there are 3 types of keypresses (fired continiously as we keep our finger on a key), key down (usually used), key press and key up
// we need to give the func an parameter to check specific details ('e')
document.addEventListener('keydown', function (e) {
  // to see how to access specific details, log the 'e' parameter to the console
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // here we have to call the func. As we reach this line, something needs to happen
    closeModal();
  }
});
