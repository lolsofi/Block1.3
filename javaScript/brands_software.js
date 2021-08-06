// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1.2,
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// });


const swiper = {
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
};

// function Swiper1 (swiper) {
//   mySwiper = swiper;
// }


const swiperContainer = document.querySelector('.swiper-container');
// const swiperWrapper = document.querySelector('.swiper-wrapper');
const brandList = document.querySelector('.brands__list');
const swiperPagination = document.querySelector('.swiper-pagination');
let mySwiper;

let mobile = window.matchMedia('(min-width: 0px) and (max-width: 720px)');
let tablet = window.matchMedia('(min-width: 768px)');
let desktop = window.matchMedia('(min-width: 1024px)');


window.addEventListener('resize', function () {
  resize();
});

function resize() {
  if (tablet.matches) {
    mySwiper = new Swiper1('.swiper-container', swiper);
  } else{
    mySwiper.destroy();

  }
}





// let createSwiper = function () {
//   if (!swiperWrapper.classList.contains('swiper-wrapper')) {
//     swiperWrapper.classList.add('swiper-wrapper');
//   }
//   if (swiperWrapper.classList.contains('brands__list')) {
//     swiperWrapper.classList.remove('brands__list');
//   }
//   // if (typeof (mySwiper) == 'undefined') {
//   //   mySwiper = new Swiper('.swiper-container', swiperOptions);
//   //   console.log(`initialized + ${mySwiper}`);
//   // }
// }

// let destroySwiper = function () {
//   if (mySwiper) {
//     mySwiper.destroy();
//     mySwiper = undefined;
//   }
//   if (swiperWrapper.classList.contains('swiper-wrapper')) {
//     swiperWrapper.classList.remove('swiper-wrapper');
//   }
//   if (!swiperWrapper.classList.contains('brands__list')) {
//     swiperWrapper.classList.add('brands__list');
//   }
//   if (!swiperPagination.classList.contains('swiper-pagination')) {
//     swiperPagination.classList.remove('swiper-pagination');
//   }
// }

// let maxSwiperWindow = 768;
// if (document.body.clientWidth < maxSwiperWindow) {
//   createSwiper();
// } else {
//   destroySwiper();
// }




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