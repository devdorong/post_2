window.addEventListener("load", function () {
    
  const bts = document.querySelectorAll(".banner_under ul li .bt_image");
  // 태그 등의 DOM 들을 모아둔 배열을 다룰때 추천 반복 문법
  bts.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add("bt_focus");
    });
    item.addEventListener("mouseleave", function () {
      item.classList.remove("bt_focus");
    });
  });
});
