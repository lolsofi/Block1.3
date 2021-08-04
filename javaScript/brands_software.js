const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // on: {
  //   init: function () {
  //     console.log('swiper initialized');
  //   },
  // },
});

const swiperContainer = document.querySelector('.swiper-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const brandList = document.querySelector('.brands__list');
const swiperPagination = document.querySelector('.swiper-pagination');
let mySwiper;


// let swiperOptions = {
//   // Optional parameters
//   slidesPerView: 1.2,
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   on: {
//     init: function () {
//       console.log('swiper initialized');
//     },
//   },
// };

// let swiperOptions = new Swiper ('.swiper-container', {
//   // Optional parameters
//   slidesPerView: 1.2,
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


let createSwiper = function () {
  if (!swiperWrapper.classList.contains('swiper-wrapper')) {
    swiperWrapper.classList.add('swiper-wrapper');
  }
  if (swiperWrapper.classList.contains('brands__list')) {
    swiperWrapper.classList.remove('brands__list');
  }
  // if (typeof (mySwiper) == 'undefined') {
  //   mySwiper = new Swiper('.swiper-container', swiperOptions);
  //   console.log(`initialized + ${mySwiper}`);
  // }
}

let destroySwiper = function () {
  if (typeof (mySwiper) != 'undefined') {
    mySwiper.destroy();
    mySwiper = undefined;
  }
  if (swiperWrapper.classList.contains('swiper-wrapper')) {
    swiperWrapper.classList.remove('swiper-wrapper');
  }
  if (!swiperWrapper.classList.contains('brands__list')) {
    swiperWrapper.classList.add('brands__list');
  }
  if (!swiperPagination.classList.contains('swiper-pagination')) {
    swiperPagination.classList.remove('swiper-pagination');
  }
}

let maxSwiperWindow = 768;
if (document.body.clientWidth < maxSwiperWindow) {
  createSwiper();
} else {
  destroySwiper();
}




const btnMore = document.querySelector('.brands__btn-more');
document.addEventListener('click', function () {
  
  // if (desktop){
    
  //   btnMore.classList.remove('brands__btn-more--hide');
  //   btnMore.textContent = 'Скрыть';
    
  // } else {
  //   btnMore.classList.add('brands__btn-more--hide');
  //   // btnMore.textContent = 'Скрыть';

  // }
  if (btnMore.classList.contains('brands__btn-more--hide')){
    btnMore.classList.remove('brands__btn-more--hide');
    btnMore.textContent = 'Показать все';
    
  } else {
    btnMore.classList.add('brands__btn-more--hide');
    // btnMore.textContent = 'Скрыть';

  }
  
})