// 프로젝트 추가·수정·삭제는 이 배열에서 합니다.
// 이 목록을 바꾸면 상단 타임라인과 프로젝트 카드가 함께 갱신됩니다.
const projects = [
  {
    id: "pop-tree",
    year: "2025",
    number: "PROJECT 01",
    title: "POP TREE",
    type: "FULL-STACK · AI",
    label: "FEATURED TEAM PROJECT",
    description:
      "사용자의 기록을 바탕으로 성장하는 나무를 설계하고, 일상의 작은 성취를 시각적인 경험으로 연결한 팀 프로젝트입니다.",
    tags: ["React", "Spring Boot", "AI"],
    color: "#a9eee4",
    icon: "♣",
    visual: "tree",
    featured: true,
    repo: "https://github.com/the2en/poptree",
  },
  {
    id: "pothole-detection",
    year: "2025",
    number: "PROJECT 02",
    title: "POTHOLE DETECTION",
    type: "COMPUTER VISION",
    label: "AI CHALLENGE",
    description:
      "도로 이미지에서 포트홀을 탐지하는 컴퓨터 비전 모델을 실험하고, 데이터 전처리부터 결과 분석까지 기록했습니다.",
    tags: ["Python", "YOLO", "Data"],
    color: "#bde9ff",
    icon: "◎",
    featured: false,
    repo: "https://github.com/the2en/ssafy_ai_challenge",
  },
  {
    id: "esg-prediction",
    year: "2024",
    number: "PROJECT 03",
    title: "ESG PREDICTION",
    type: "DATA · MACHINE LEARNING",
    label: "DATA PROJECT",
    description:
      "기업 데이터를 정리하고 ESG 지표 예측 가능성을 살펴본 머신러닝 프로젝트입니다.",
    tags: ["Python", "Pandas", "ML"],
    color: "#ffe66f",
    icon: "▥",
    featured: false,
    repo: "https://github.com/the2en/ESG_Prediction",
  },
  {
    id: "the2en-log",
    year: "2026",
    number: "PROJECT 04",
    title: "THE2EN.LOG",
    type: "WEB · ARCHIVE",
    label: "PERSONAL PROJECT",
    description:
      "글, 취향, 프로젝트를 한곳에 모으기 위해 만든 레트로 도트 스타일의 개인 블로그이자 포트폴리오입니다.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#ffd4e6",
    icon: "✦",
    featured: false,
    repo: "https://github.com/the2en/the2en.github.io",
    live: "https://the2en.github.io/",
  },
];

const menuButton = document.querySelector("#menu-button");
const siteNav = document.querySelector("#site-nav");
const clock = document.querySelector("#live-clock");
const projectGrid = document.querySelector("#portfolio-project-grid");
const projectTimeline = document.querySelector("#project-timeline");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectLinks(project) {
  const links = [
    `<a class="project-link" href="${escapeHTML(project.repo)}" target="_blank" rel="noreferrer">VIEW GITHUB <span aria-hidden="true">↗</span></a>`,
  ];

  if (project.live) {
    links.push(
      `<a class="project-link secondary" href="${escapeHTML(project.live)}" target="_blank" rel="noreferrer">VIEW LIVE <span aria-hidden="true">↗</span></a>`,
    );
  }

  return links.join("");
}

function projectVisual(project) {
  if (project.visual === "tree") {
    return `
      <div class="project-visual project-visual-tree" aria-hidden="true">
        <span class="tree-crown"></span>
        <span class="tree-trunk"></span>
        <span class="tree-pot"></span>
      </div>
    `;
  }

  return `<div class="project-icon" aria-hidden="true">${escapeHTML(project.icon)}</div>`;
}

function projectCard(project) {
  const featuredClass = project.featured ? " featured-project" : "";
  const tags = project.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("");

  return `
    <article
      class="portfolio-project-card${featuredClass}"
      id="project-${escapeHTML(project.id)}"
      style="--project-color: ${escapeHTML(project.color)}"
    >
      <div class="project-card-top">
        <span>${escapeHTML(project.number)}</span>
        <span>${escapeHTML(project.type)}</span>
      </div>
      ${projectVisual(project)}
      <div class="project-card-copy">
        <p class="project-label">${escapeHTML(project.label)} · ${escapeHTML(project.year)}</p>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <ul class="project-tags" aria-label="사용 기술">${tags}</ul>
        <div class="project-link-row">${projectLinks(project)}</div>
      </div>
    </article>
  `;
}

function renderProjects() {
  projectGrid.innerHTML = projects.map(projectCard).join("");
}

function renderTimeline() {
  const chronological = [...projects].sort(
    (a, b) => Number(a.year) - Number(b.year) || a.number.localeCompare(b.number),
  );

  projectTimeline.innerHTML = chronological
    .map(
      (project) => `
        <li>
          <time datetime="${escapeHTML(project.year)}">${escapeHTML(project.year)}</time>
          <a href="#project-${escapeHTML(project.id)}">
            <strong>${escapeHTML(project.title)}</strong>
            <span>${escapeHTML(project.type)}</span>
          </a>
        </li>
      `,
    )
    .join("");
}

function updateClock() {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  clock.textContent = `${time} KST`;
}

menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector("span").textContent = open ? "−" : "＋";
});

siteNav.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector("span").textContent = "＋";
});

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderProjects();
renderTimeline();
updateClock();
window.setInterval(updateClock, 30_000);
