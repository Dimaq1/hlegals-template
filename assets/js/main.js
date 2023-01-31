let menuButton = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu__list');
let mobileMenuBackground = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('active');
  menuList.classList.toggle('active');
  mobileMenuBackground.classList.toggle('active');
});









// // считали DOM элементы
// const headersList = document.querySelectorAll(".slider__header");
// const notesList = document.querySelectorAll(".slider__note");
// const descriptionsList = document.querySelectorAll(".slider__description");
// const indicatorsList = document.querySelectorAll(".slider__indicator");

// let index = 0;
// let interval = 4000;
// let heightsArr = [];
// let heightMax = null;

// setInterval(() => {
//   // снимаем классы active для первых элементов
//   headersList[index].classList.toggle("-active");
//   notesList[index].classList.toggle("-active");
//   indicatorsList[index].classList.toggle("-active");
//   // увеличиваем индекс, пока не превышено количество элементов
//   index = (index + 1) % headersList.length;
//   // ставим классы active следующим элементам
//   headersList[index].classList.toggle("-active");
//   notesList[index].classList.toggle("-active");
//   indicatorsList[index].classList.toggle("-active");
// }, interval);

// // вычисление и изменение высоты блока описания под максимальный текст
// descriptionsList.forEach(el => heightsArr.push(el.clientHeight));
// heightMax = Math.max(...heightsArr);
// descriptionsList.forEach(el => el.style.height = `${heightMax}px`);

// 'use strict';

// const switchButton = document.querySelector('.page-publications__switcher');
// const switchBtnRight = document.querySelector('.page-publications__switcher-button.right');
// const switchBtnLeft = document.querySelector('.page-publications__switcher-button.left');
// const activeSwitch = document.querySelector('.page-publications__switcher-active');

// function switchLeft() {
//   switchBtnRight.classList.remove('active-case');
//   switchBtnLeft.classList.add('active-case');
//   activeSwitch.style.left = '2px';
// }

// function switchRight() {
//   switchBtnRight.classList.add('active-case');
//   switchBtnLeft.classList.remove('active-case');
//   activeSwitch.style.left = '50%';
// }

// switchBtnLeft.addEventListener('click', function () {
//   switchLeft();
// }, false);

// switchBtnRight.addEventListener('click', function () {
//   switchRight();
// }, false);




