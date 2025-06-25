window.addEventListener("load", function () {
  const nowApiData = [
    {
      id: 1,
      up: false,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-4",
    },
    {
      id: 2,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "서울 강남구" },
      ],
      title: "[PTKOREA/인턴] 데이터 분석",
      day: "D-13",
    },
    {
      id: 3,
      up: false,
      option: [{ 스타일: "blue", 텍스트: "공모전" }],
      title: "[BMW 코리아 미래재단] Young Innovator Dream Project 2025",
      day: "D-18",
    },
    {
      id: 4,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "서울 서초구" },
      ],
      title:
        "[당근마켓] Software Engineer Intern, Backend - Local Business(운영)",
      day: "D-7",
    },
    {
      id: 5,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "서울 서초" },
      ],
      title:
        "[당근마켓] Software Engineer Intern, Frontend - Local Business(운영)",
      day: "D-7",
    },
    {
      id: 6,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "경남 사천시" },
      ],
      title: "[한국항공우주산업] HR 체험형 인턴 모집(~6/29(일))",
      day: "D-4",
    },
    {
      id: 7,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "경기 성남시 분당구" },
      ],
      title: "[카카오뱅크] 콘텐츠 제작 어시스턴트 (체험형 인턴)",
      day: "D-6",
    },
    {
      id: 8,
      up: false,
      option: [
        { 스타일: "red", 텍스트: "인턴십" },
        { 스타일: "gray", 텍스트: "경기 성남시 분당구" },
      ],
      title: "[카카오뱅크] 제휴사업 지원 어시스턴트 (체험형 인턴)",
      day: "D-5",
    },
  ];

  const nowPos = document.querySelector(".now_list");
  let html = ``;

  for (let i = 0; i < nowApiData.length; i++) {
    let leftBadge = "";
    let rightBadge = "";

    for (let j = 0; j < nowApiData[i].option.length; j++) {
      if (nowApiData[i].option[j].스타일 === "ad") {
        rightBadge += `<span class="now_top_${nowApiData[i].option[j].스타일}">${nowApiData[i].option[j].텍스트}</span>`;
      } else {
        leftBadge += `<span class="now_top_${nowApiData[i].option[j].스타일}">${nowApiData[i].option[j].텍스트}</span>`;
      }
    }

    html += `
      <li class="now_item">
        <a href="#">
          <div class="now_image">
            <img src="images/n${nowApiData[i].id}.png" alt="이미지${
      nowApiData[i].id
    }" />
          </div>
          <div class="now_title">
            <div class="now_title_top">
              <span>${leftBadge}</span>
              ${rightBadge}
            </div>
            <div class="now_title_middle">
              ${nowApiData[i].up ? `<span class="now_up">UP</span>` : ""}
              ${nowApiData[i].title}
            </div>
            <div class="now_title_bottom">${nowApiData[i].day}</div>
          </div>
        </a>
      </li>
    `;
  }
  nowPos.innerHTML = html;

  const nowItems = document.querySelectorAll(".now_item");

  nowItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.classList.add("now_item_focus");
    });

    item.addEventListener("mouseleave", function () {
      item.classList.remove("now_item_focus");
    });
  });
});
