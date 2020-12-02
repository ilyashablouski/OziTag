/* eslint-disable indent */

/**
 * Choose element function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
const selectElement = element => document.querySelector(element);

document.addEventListener('DOMContentLoaded', () => {
  // Mouse up events for mobile-menu
  selectElement('.menu-btn').addEventListener('mouseup', () => {
    selectElement('.header').classList.toggle('is-active');
    document.body.classList.toggle('is-no-scrollbar');
  });
  selectElement('.menu').addEventListener('mouseup', event => {
    const target = event.target;

    if (target.classList.contains('arrow-btn')) {
      const menuElements = document.target.parentElement.querySelector('.menu__group').classList.toggle('is-open');
      target.classList.toggle('is-rotate'); // console.log('');
    }
  });
});