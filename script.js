const programs = [
  {
    label: "영상",
    title: "포스터에서 멈춘 홍보물을,<br>30초 영상까지",
    target: "공공기관·협회 홍보담당자 · 소상공인 · 마케터",
    description: "이미지에서 숏폼 영상으로. 구글 플로우·옴니와 캡컷을 연결해 한 편의 홍보 콘텐츠를 완성합니다."
  },
  {
    label: "리서치·기획",
    title: "팩트체크 기술 &amp;<br>NotebookLM 마스터",
    target: "기획자 · 홍보담당자 · 연구원 · 작가 지망생",
    description: "할루시네이션 판별법과 문서 기반 정밀 리서치를 익히고, 근거 있는 기획안을 도출합니다."
  },
  {
    label: "오디오",
    title: "Suno와 캡컷으로 만드는<br>음원·뮤직비디오",
    target: "문화센터 · 예비 강사 · 1인 기업가",
    description: "맞춤형 BGM과 음원을 제작하고 숏폼 영상과 결합해 나만의 오디오 콘텐츠를 완성합니다."
  },
  {
    label: "소상공인",
    title: "AI로 만드는<br>우리 가게 홍보물",
    target: "지역 소상공인 · 자영업자 · 창업 준비생",
    description: "가게의 강점을 찾아 포스터와 SNS 배너로 구현하는 실습 중심 프로그램입니다."
  }
];

const panel = document.querySelector(".program-panel");
document.querySelectorAll("[data-program]").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = programs[Number(button.dataset.program)];
    document.querySelectorAll("[data-program]").forEach((tab) => tab.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    panel.innerHTML = `<p class="program-label">${selected.label}</p><h3>${selected.title}</h3><p class="program-target">${selected.target}</p><p class="program-description">${selected.description}</p>`;
  });
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

