const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
const mobileMenuBackground = document.querySelector('.menu');

export function menuEvent() {
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
    mobileMenuBackground.classList.toggle('active');
  })
}
