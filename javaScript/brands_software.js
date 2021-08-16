const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

// const swiper = {
//   slidesPerView: 1.2,
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// };


const swiperContainer = document.querySelector('.swiper-container');
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
    mySwiper = new Swiper(swiper);
  } else{
    mySwiper.destroy();

  }
}
// function resize() {
//   if (tablet.matches) {
//     mySwiper = new Swiper1('.swiper-container', swiper);
//   } else{
//     mySwiper.destroy();

//   }
// }


const btnMore = document.querySelector('.brands__btn-more');
const brandsItem = [...document.querySelectorAll('.brands__item')];

document.addEventListener('click', function () {

  if (mobile) {
    brandList.classList.remove('brands__item--hide')
  };
  
  if (tablet) {
    for (let i = 6; i < brandsItem.length; i++) {
      brandsItem[i].classList.toggle('brands__item--hide')
    }
    if (btnMore.classList.toggle('brands__btn-more--hide')) {
      btnMore.textContent = 'Показать все';
    } else {
      btnMore.textContent = 'Скрыть';
    };

    // if (btnMore.classList.contains('brands__btn-more--hide')){
    //   btnMore.classList.remove('brands__btn-more--hide');
    //   btnMore.textContent = 'Показать все';
      
    // } else {
    //   btnMore.classList.add('brands__btn-more--hide');
    //   btnMore.textContent = 'Скрыть';
  
    // }
  }

  if (desktop) {
    for (let i = 8; i < brandsItem.length; i++) {
      brandsItem[i].classList.toggle('brands__item--hide')
    }
    if (btnMore.classList.toggle('brands__btn-more--hide')) {
      btnMore.textContent = 'Показать все';
    } else {
      btnMore.textContent = 'Скрыть';
    };
  }
 

  
})