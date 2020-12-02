/**
 * Choose element function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
const selectElement = element => document.querySelector(element);

document.addEventListener('DOMContentLoaded', () => {
  // Click event for mobile-menu
  selectElement('.menu-btn').addEventListener('click', () => {
    selectElement('.header').classList.toggle('is-active'); // console.log('click');
  });
});