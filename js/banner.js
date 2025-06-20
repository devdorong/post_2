window.addEventListener("load", function () {
  new Swiper(".sw_banner", {
    slidesPerView: "auto",         // 슬라이드 너비 자동
    centeredSlides: true,          // 가운데 정렬
    spaceBetween: 80,              // 슬라이드 간 간격
    loop: true,
    pagination: {
      el: ".banner_pagnation",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
  });
});