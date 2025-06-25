window.addEventListener("load", function () {
  
  const cockApiData = [
    {
      id: 1,
      up: true,
      option: [
        { 스타일: "blue", 텍스트: "공모전" },
        { 스타일: "ad", 텍스트: "AD" },
      ],
      title: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-5",
    },
    {
      id: 2,
      up: false,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[대홍기획] 제42회 DCA 대홍 크리에이티브 어워드(~7/17)",
      day: "D-23",
    },
    {
      id: 3,
      up: false,
      option: [{ 스타일: "purple", 텍스트: "대외활동" }],
      title: "[LG유플러스] 대학생 엠버서더 유쓰피릿 16기 모집 (~7/6자정)",
      day: "D-12",
    },
    {
      id: 4,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "경기 성남시 분당구" },
      ],
      title: "[카카오뱅크] 콘텐츠 제작 어시스턴트 (체험형 인턴)",
      day: "D-7",
    },
    
  ];

  const cockPos = document.querySelector(".cock_list");
  let html = ``;

  
  for (let i = 0; i < cockApiData.length; i++) {
    let leftBadge = "";
    let rightBadge = "";

    
    for (let j = 0; j < cockApiData[i].option.length; j++) {
      if (cockApiData[i].option[j].스타일 === "ad") {
        rightBadge += `<span class="cock_top_${cockApiData[i].option[j].스타일}">${cockApiData[i].option[j].텍스트}</span>`;
      } else {
        leftBadge += `<span class="cock_top_${cockApiData[i].option[j].스타일}">${cockApiData[i].option[j].텍스트}</span>`;
      }
    }

    html += `
      <li class="cock_item">
        <a href="#">
          <div class="cock_image">
            <img src="images/c${cockApiData[i].id}.png" alt="이미지${cockApiData[i].id}" />
          </div>
          <div class="cock_title">
            <div class="cock_title_top">
              <span>${leftBadge}</span>
              ${rightBadge}
            </div>
            <div class="cock_title_middle">
              ${cockApiData[i].up ? `<span class="cock_up">UP</span>` : ""}
              ${cockApiData[i].title}
            </div>
            <div class="cock_title_bottom">${cockApiData[i].day}</div>
          </div>
        </a>
      </li>
    `;
  }
  cockPos.innerHTML = html;

  const cockItems = document.querySelectorAll(".cock_item");

  cockItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.classList.add("cock_item_focus");
    });

    item.addEventListener("mouseleave", function () {
      item.classList.remove("cock_item_focus");
    });
  });
});
