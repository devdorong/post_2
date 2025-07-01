window.addEventListener("load", function () {
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");

  let currentIsMobile = window.innerWidth <= 768;
  let swiper;

  const bannerData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  // 이미지 경로 생성 함수
  function getImagePath(id, isMobile) {
    return isMobile ? `images/mb${id}.png` : `images/b${id}.png`;
  }

  // 이미지와 슬라이드 렌더링 함수
  function renderSlides(isMobile) {
    let htmlTag = "";
    for (let i = 0; i < bannerData.length; i++) {
      const imgSrc = getImagePath(bannerData[i].id, isMobile);
      htmlTag += `
        <div class="swiper-slide">
          <a href="#" class="banner_slide_item">
            <img src="${imgSrc}" alt="배너${bannerData[i].id}" />
          </a>
        </div>
      `;
    }
    bannerPos.innerHTML = htmlTag;
  }

  // Swiper 초기화 함수
  function initSwiper() {
    return new Swiper(".sw_banner", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 5000,
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
      breakpoints: {
        768: {
          spaceBetween: 80,
        },
        0: {
          spaceBetween: 12,
        },
      },
      observer: true,
      observeParents: true,
    });
  }

  // 초기 세팅
  renderSlides(currentIsMobile);
  swiper = initSwiper();

  banner.addEventListener("mouseenter", () => swiper.autoplay.stop());
  banner.addEventListener("mouseleave", () => swiper.autoplay.start());

  // 리사이즈 이벤트 대응
  window.addEventListener("resize", () => {
    const newIsMobile = window.innerWidth <= 768;

    if (newIsMobile !== currentIsMobile) {
      // 모바일 ↔ PC 전환 시
      currentIsMobile = newIsMobile;

      // Swiper 제거
      swiper.destroy(true, true);

      // 이미지 다시 렌더링 + swiper 재생성
      renderSlides(currentIsMobile);
      swiper = initSwiper();

      // 마우스 인터랙션 재등록
      banner.addEventListener("mouseenter", () => swiper.autoplay.stop());
      banner.addEventListener("mouseleave", () => swiper.autoplay.start());
    } else {
      // 크기만 바뀌었으면 swiper 레이아웃만 업데이트
      swiper.update();
    }
  });
});
// window.addEventListener("load", function () {
//   const isMobile = window.innerWidth <= 768;
//   const bannerApiData = [
//     { id: 1, link: isMobile ? "images/mb1.png" : "images/b1.png" },
//     { id: 2, link: isMobile ? "images/mb2.png" : "images/b2.png" },
//     { id: 3, link: isMobile ? "images/mb3.png" : "images/b3.png" },
//     { id: 4, link: isMobile ? "images/mb4.png" : "images/b4.png" },
//     // { id: 5, link: "images/b5.png" },
//   ];

//   const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
//   let htmlTag = "";
//   for (let i = 0; i < bannerApiData.length; i++) {
//     htmlTag += `
//       <div class="swiper-slide">
//         <a href="#" class="banner_slide_item">
//           <img src="${bannerApiData[i].link}" alt="배너${bannerApiData[i].id}" />
//         </a>
//       </div>
//     `;
//   }

//   console.log(htmlTag);

//   bannerPos.innerHTML = htmlTag;

//   const swiper = new Swiper(".sw_banner", {
//     slidesPerView: "auto", // 슬라이드 너비 자동
//     centeredSlides: true, // 가운데 정렬
//     // spaceBetween: 80, // 슬라이드 간 간격
//     loop: true,
//     speed: 500,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".banner_pagnation",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".banner_slide_next",
//       prevEl: ".banner_slide_prev",
//     },
//     breakpoints: {
//       768: {
//         spaceBetween: 80, // 768px 이상에서 적용
//       },
//       0: {
//         spaceBetween: 12, // 0 ~ 767px 구간에서 적용
//       },

//       768: {
//         spaceBetween: 80, // 768px 이상에서 적용
//       },
//     },
//     observer: true,
//     observeParents: true,
//   });

//   const banner = document.querySelector(".sw_banner");

//   banner.addEventListener("mouseenter", function () {
//     swiper.autoplay.stop();
//   });

//   banner.addEventListener("mouseleave", function () {
//     swiper.autoplay.start();
//   });
//   window.addEventListener("resize", () => {
//     swiper.update();
//   });
// });
