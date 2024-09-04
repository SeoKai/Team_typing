document.querySelectorAll(".section-main").forEach((main) => {
  const sliderContent = main.querySelector(".slider-container");
  const leftButton = main.querySelector(".slider-btn.left");
  const rightButton = main.querySelector(".slider-btn.right");

  let scrollAmount = 0;

  rightButton.addEventListener("click", () => {
    const maxScroll = sliderContent.scrollWidth - sliderContent.clientWidth;
    scrollAmount = maxScroll;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
  });

  leftButton.addEventListener("click", () => {
    scrollAmount = 0;
    if (scrollAmount < 0) scrollAmount = 0;
    sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
