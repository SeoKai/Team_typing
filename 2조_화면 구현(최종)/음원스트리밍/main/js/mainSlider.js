function SliderFunctionality() {
  document.querySelectorAll(".section-main").forEach((main) => {
    const sliderContent = main.querySelector(".slider-container");
    const leftButton = main.querySelector(".slider-btn.left");
    const rightButton = main.querySelector(".slider-btn.right");

    let scrollAmount = 0;
    let slideWidth = sliderContent.clientWidth; // 화면 너비에 맞추기
    if (window.innerWidth > 1400) {
      // 1400px 이상
      rightButton.addEventListener("click", () => {
        const maxScroll = sliderContent.scrollWidth - sliderContent.clientWidth;
        scrollAmount = maxScroll;
        sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
      });

      leftButton.addEventListener("click", () => {
        scrollAmount = 0;
        sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
      });
    } else {
      // 1400px 이하
      rightButton.addEventListener("click", () => {
        const maxScroll = sliderContent.scrollWidth - sliderContent.clientWidth;
        slideWidth = sliderContent.clientWidth; // 슬라이드 너비 재계산

        // 한 페이지 단위로 이동
        scrollAmount += slideWidth + 15;

        // 최대 스크롤을 넘지 않도록 체크
        if (scrollAmount > maxScroll) {
          scrollAmount = maxScroll;
        }

        sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
      });

      leftButton.addEventListener("click", () => {
        slideWidth = sliderContent.clientWidth; // 슬라이드 너비 다시 계산

        // 이전 슬라이드로 한 페이지만큼 이동
        scrollAmount -= slideWidth + 15;

        // 최소 스크롤(시작점)보다 작아지지 않도록 체크
        if (scrollAmount < 0) {
          scrollAmount = 0;
        }

        sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
      });
    }

    // 화면 크기 변경 시 슬라이드 너비 재설정
    window.addEventListener("resize", () => {
      slideWidth = sliderContent.clientWidth; // 리사이즈될 때 슬라이드 너비 재설정
      scrollAmount = 0; // 리사이즈될 때 슬라이드 위치 초기화
      sliderContent.style.transform = `translateX(-${scrollAmount}px)`;
    });
  });
}

// 초기 실행
SliderFunctionality();

// 이미지 드래그 방지
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("draggable", "false");
});
document.querySelectorAll("a").forEach((a) => {
  a.setAttribute("draggable", "false");
});

// 화면 크기 변경 시마다 슬라이드 기능 재적용
window.addEventListener("resize", () => {
  SliderFunctionality();
});

const search = document.querySelector(".sidebar>.search-box>input");

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("확인");
    window.location.href = "../../search/html/search.html";
  }
});

// 검색 실행 함수 정의
function performSearch(url) {
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput) {
    window.location.href = url + "?q=" + encodeURIComponent(searchInput);
  }
}

// 아이콘 클릭 시 검색 실행
document.getElementById("searchIcon").addEventListener("click", function () {
  performSearch("../../search/html/search.html");
});
