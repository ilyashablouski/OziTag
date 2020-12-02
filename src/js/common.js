"use strict";

/* eslint-disable indent */

/**
 * Choose element function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
var selectElement = function selectElement(element) {
  return document.querySelector(element);
};

document.addEventListener('DOMContentLoaded', function () {
  /**
   * Mouse up events for mobile-menu
   *
  */
  selectElement('.menu-btn').addEventListener('mouseup', function () {
    selectElement('.header').classList.toggle('is-active');
    document.body.classList.toggle('is-no-scrollbar');
  });
  selectElement('.menu').addEventListener('mouseup', function (event) {
    var target = event.target;

    if (target.matches('.arrow-btn') && !target.nextElementSibling.matches('.is-open')) {
      // Add all menu elements into array
      var menuElements = target.closest('.js-parent-level').querySelectorAll('.menu__group'); // Reset opened menu elements and rerotated arrows

      menuElements.forEach(function (element) {
        element.classList.remove('is-open');
        element.previousElementSibling.classList.remove('is-rotate');
      }); // Open clicked menu item

      target.parentElement.querySelector('.menu__group').classList.add('is-open'); // Rotate arrow

      target.classList.add('is-rotate'); // Scroll into view

      var menuElement = target.closest('.menu__item');
      menuElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      }); // ----------------------------------------------------------------
    } else if (target.matches('.arrow-btn') && target.nextElementSibling.matches('.is-open')) {
      // Open clicked menu item
      target.parentElement.querySelector('.menu__group').classList.remove('is-open'); // Rotate arrow

      target.classList.remove('is-rotate');
    }
  });
  /**
   * Mouseenter/Mouseleave events for menu
   *
   */

  if (document.documentElement.clientWidth >= 768) {
    selectElement('.menu').addEventListener('mouseenter', function () {
      document.body.classList.add('is-no-scrollbar');
    });
    selectElement('.menu__list-mobile').addEventListener('mouseleave', function () {
      document.body.classList.remove('is-no-scrollbar');
    });
  }
});