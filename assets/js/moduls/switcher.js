const switcherButtonFirst = document.querySelector('.switcher-button-first');
const switcherButtonSecond = document.querySelector('.switcher-button-second');

switcherButtonFirst.addEventListener('click', function () {
  switcherButtonFirst.classList.add('active');
  switcherButtonSecond.classList.remove('active');
});

switcherButtonSecond.addEventListener('click', function () {
  switcherButtonSecond.classList.add('active');
  switcherButtonFirst.classList.remove('active');
});