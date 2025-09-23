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

function animateCount(id, end) {
  let el = document.getElementById(id);
  let count = 0;
  let interval = setInterval(() => {
    count++;
    el.textContent = count + '+';
    if (count >= end) clearInterval(interval);
  }, 10);
}