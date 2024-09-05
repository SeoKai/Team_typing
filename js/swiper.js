const swiper_01 = new Swiper(".swiper", {
  //방향
  direction: "horizontal",
  //자동전환
  // autoplay: {
  //   delay: 10000,
  //   pauseOnMouseEnter: true,
  // },
  //무한동작
  loop: true,
  //페이징처리
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets", //fraction, progressbar, bullets
  },
  //next,prev
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousewheel: false,
  effect: "scroll",
});
