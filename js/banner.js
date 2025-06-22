window.addEventListener("load", function () {
  const bannerApiData = [
    { id: 1, link: "images/b1.png" },
    { id: 2, link: "images/b2.png" },
    { id: 3, link: "images/b3.png" },
    { id: 4, link: "images/b4.png" },
    { id: 5, link: "images/b5.png" },
  ];

  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  let htmlTag = "";
  for (let i = 0; i < bannerApiData.length; i++) {
    htmlTag += `
      <div class="swiper-slide">
        <a href="#" class="banner_slide_item">
          <img src="${bannerApiData[i].link}" alt="배너${bannerApiData[i].id}" />
        </a>
      </div>
    `;
  }

  console.log(htmlTag);

  bannerPos.innerHTML = htmlTag;

  const swiper = new Swiper(".sw_banner", {
    slidesPerView: "auto", // 슬라이드 너비 자동
    centeredSlides: true, // 가운데 정렬
    spaceBetween: 80, // 슬라이드 간 간격
    loop: true,
    speed: 500,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner_pagnation",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
  });

  const banner = document.querySelector(".sw_banner");

  banner.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

  banner.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
});
