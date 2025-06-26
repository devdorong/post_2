window.addEventListener("load", function () {
  const recentlyApiData = [
    {
      id: 1,
      option: [{ 스타일: "purple", 텍스트: "대외활동" }],
      title: "[고용노동부]2025 미래내일 일경험 인턴십 참여자 모집",
      day: "D-188",
    },
    {
      id: 2,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title:
        "[한국언론진흥재단]제6회 뉴스읽기 뉴스일기 공모전 뉴스일기장 배포(~25/7)",
      day: "D-4",
    },
    {
      id: 3,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[한국언론진흥재단]제6회 뉴스읽기 뉴스일기 공모전",
      day: "D-35",
    },
    {
      id: 4,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title:
        "[제임스 다이슨 재단국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      day: "D-20",
    },
    {
      id: 5,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[(주)패스프리]패스프리 로고 디자인 공모전",
      day: "D-35",
    },
    {
      id: 6,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[YTN]YTN서울타워 숏폼 공모전",
      day: "D-4",
    },
    {
      id: 7,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title:
        "[TWC스튜디오]'내 동네의 숨은 스팟:로컬 인사이더'전국 대학생 슬로건 공모전",
      day: "D-4",
    },
    {
      id: 8,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[문화체육관광부X경기도]2025 경기도 공공디자인 공모전",
      day: "D-1",
    },
  ];

  const recentlyPos = document.querySelector(".recently_list");
  let html = ``;

  for (let i = 0; i < recentlyApiData.length; i++) {
    html += `
      <li class="recently_item">
                  <a href="#">
                    <div class="recently_image">
                      <img src="images/r${recentlyApiData[i].id}.png" alt="이미지${recentlyApiData[i].id}" />
                    </div>
                    <div class="recently_title">
                      <div class="recently_title_top">
                        <span class="recently_top_${recentlyApiData[i].option[0].스타일}">${recentlyApiData[i].option[0].텍스트}</span>
                        <div class="recently_title_middle">
                          ${recentlyApiData[i].title}
                        </div>
                      </div>

                      <div class="recently_title_bottom">${recentlyApiData[i].day}</div>
                    </div>
                  </a>
                </li>
    `;
  }
  recentlyPos.innerHTML = html;

  const recentlyItems = document.querySelectorAll(".recently_item");

  recentlyItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.classList.add("recently_item_focus");
    });

    item.addEventListener("mouseleave", function () {
      item.classList.remove("recently_item_focus");
    });
  });
});
