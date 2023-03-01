let slider = document.querySelector('.slider');
let btnClickScroll = document.querySelector('.page-header__button');

function scrollDown() {
  slider.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

btnClickScroll.addEventListener('click', scrollDown);








let sliderHeader = document.querySelectorAll('.slider__header');
let sliderNote = document.querySelectorAll('.slider__note');

console.log(sliderHeader);


setInterval(() => {
  sliderHeader.forEach((el, index, arr) => {
    return arr[index].classList.toggle('-active')
  })
}, 2000)
// setInterval(() => {
//   for (let i = 0; i < sliderHeader.length; i++) {
//     sliderHeader[i].classList.toggle('-active')
//   }
// }, 4000)





// sliderHeader.forEach((el, index, arr) => {
//   arr[index].addEventListener('click', function () {
//     el.classList.toggle('-active')

//   })
// })



// sliderNote.forEach((el, index, arr) => {
//   sliderHeader[index].addEventListener('click', function () {
//     el.classList.toggle('-active')
//   })
// })

// for (let i = 0; i < sliderHeader.length; i++) {
//   if (sliderHeader[i].classList.add('-active')) {
//     // sliderHeader[i++] = null;
//     sliderHeader[i++].addEventListener('click', function () {
//       sliderHeader[i].classList.add('')
//     })
//   }
// }
