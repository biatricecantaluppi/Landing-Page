document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  });
});
