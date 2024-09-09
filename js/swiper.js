const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20, // 슬라이드 간의 간격을 적절히 설정
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
