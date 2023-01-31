let slider = document.querySelector('.slider');
let btnClickScroll = document.querySelector('.page-header__button');

function scrollDown() {
  slider.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

btnClickScroll.addEventListener('click', scrollDown);
