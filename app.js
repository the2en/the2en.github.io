// 카테고리는 이 배열에서 한 번만 관리합니다.
const categories = [
  { id: "design", label: "DESIGN", aliases: "디자인 설계 화면 인터페이스" },
  { id: "code", label: "CODE", aliases: "코드 개발 프로그래밍 웹" },
  { id: "journal", label: "JOURNAL", aliases: "일상 기록 저널 생각" },
  { id: "culture", label: "CULTURE", aliases: "문화 컬처 감상 취향" },
];

// 글 추가·수정·삭제는 이 배열에서 합니다.
const posts = [
  {
    slug: "kind-interface-notes",
    title: "작고 다정한 인터페이스를 만드는 법",
    category: "design",
    date: "2026.09.14",
    readTime: "6 MIN READ",
    excerpt: "눈에 띄는 화면보다 다시 찾고 싶은 화면을 만들기 위해 적어둔 여섯 가지 기준.",
    tags: ["UX", "UI", "관찰"],
    icon: "♥",
    color: "#ffd4e6",
    tilt: "-4deg",
    content: `
      <p class="lead">좋은 인터페이스는 사용자를 재촉하지 않는다. 무엇을 할 수 있는지 분명히 보여주고, 다음 행동을 고를 작은 여백을 건넨다.</p>
      <h2>친절함은 장식이 아니라 구조다</h2>
      <p>버튼의 색이나 귀여운 문구만으로 화면이 다정해지지는 않는다. 현재 위치, 가능한 행동, 행동의 결과를 사용자가 짐작할 수 있어야 한다. 그래서 작업을 시작할 때 가장 먼저 화면의 상태를 세 문장으로 적어본다.</p>
      <blockquote>지금 어디에 있는가? 여기서 무엇을 할 수 있는가? 다음에는 무슨 일이 일어나는가?</blockquote>
      <h2>작은 반응이 신뢰를 만든다</h2>
      <p>클릭한 버튼이 살짝 눌리고, 검색 결과가 몇 개인지 알려주고, 링크가 복사됐다는 메시지가 나타나는 일. 이런 작은 반응은 화면이 내 행동을 제대로 받았다는 증거가 된다.</p>
      <p>이번 블로그의 입장 화면도 같은 원리로 만들었다. 낯선 첫 화면이지만 선택지는 하나로 분명하고, YES를 누르면 화면 전체가 반응하며 다음 장면을 보여준다.</p>
    `,
  },
  {
    slug: "github-pages-archive",
    title: "GitHub Pages에 개인 아카이브 세우기",
    category: "code",
    date: "2026.09.08",
    readTime: "8 MIN READ",
    excerpt: "프레임워크 없이도 빠르고 오래 가는 개인 웹사이트를 만드는 과정과 선택의 기록.",
    tags: ["GitHub Pages", "HTML", "CSS"],
    icon: "</>",
    color: "#bde9ff",
    tilt: "3deg",
    content: `
      <p class="lead">개인 아카이브의 첫 번째 조건은 오래 남는 것이다. 유행하는 도구보다 내가 다시 열어 고칠 수 있는 구조를 택했다.</p>
      <h2>작게 시작하기</h2>
      <p>이 사이트는 별도의 빌드 과정 없이 <code>index.html</code>, <code>styles.css</code>, <code>app.js</code>로 움직인다. 저장소에 파일을 올리면 GitHub Pages가 그대로 배포한다.</p>
      <p>글 데이터는 배열로 모아두고 검색, 카테고리 필터, 상세 보기를 자바스크립트로 연결했다. 규모가 커지면 Markdown 기반 생성기로 옮길 수 있지만, 지금은 쓰고 고치는 흐름이 가장 짧은 쪽이 맞다.</p>
      <h2>주소 자체를 기능으로 쓰기</h2>
      <p><code>?q=디자인</code>은 검색 결과를, <code>?post=github-pages-archive</code>는 이 글을 바로 연다. 공유 가능한 주소이면서, 검색이나 글 링크로 온 사람에게는 입장 화면을 생략하는 신호이기도 하다.</p>
    `,
  },
  {
    slug: "small-units-of-taste",
    title: "취향을 기록하는 가장 작은 단위",
    category: "journal",
    date: "2026.08.29",
    readTime: "4 MIN READ",
    excerpt: "좋아한다는 감각이 사라지기 전에 색, 문장, 장면을 붙잡아 두는 나만의 방식.",
    tags: ["기록", "취향", "일상"],
    icon: "✦",
    color: "#ffe66f",
    tilt: "-2deg",
    content: `
      <p class="lead">취향은 거창한 선언보다 자주 멈춰 보게 되는 작은 장면에 가깝다.</p>
      <h2>왜 좋았는지를 한 줄만</h2>
      <p>사진을 저장하는 데서 멈추면 나중에는 무엇이 좋았는지 잊는다. 그래서 색 때문인지, 모양 때문인지, 그날의 기분 때문인지 한 줄을 덧붙인다.</p>
      <blockquote>기록의 목적은 완벽한 분류가 아니라 다시 발견하는 기쁨이다.</blockquote>
      <p>이 블로그의 CULTURE와 JOURNAL 카테고리는 그런 작은 단위들을 위한 서랍이다. 서로 상관없어 보이는 조각도 오래 모이면 한 사람의 선명한 지도처럼 보일 거라 믿는다.</p>
    `,
  },
  {
    slug: "dots-and-whitespace",
    title: "도트와 여백 사이에서 균형 잡기",
    category: "design",
    date: "2026.08.17",
    readTime: "5 MIN READ",
    excerpt: "레트로한 픽셀 그래픽을 지금의 화면에서 답답하지 않게 사용하는 방법.",
    tags: ["Retro", "Typography", "Visual"],
    icon: "::",
    color: "#a9eee4",
    tilt: "4deg",
    content: `
      <p class="lead">레트로 스타일은 요소를 많이 놓는 일이 아니라, 제한을 일관되게 지키는 일에 가깝다.</p>
      <h2>선명한 규칙 세 가지</h2>
      <p>진한 파란색 외곽선, 어긋난 그림자, 일정한 도트 간격. 이 세 가지를 공통 언어로 정하고 나머지는 넉넉한 여백에 맡겼다.</p>
      <p>모든 글자를 픽셀 폰트로 쓰면 한국어 본문은 금세 읽기 어려워진다. 작은 영문 라벨과 버튼에만 모노스페이스를 쓰고, 긴 문장은 익숙한 시스템 글꼴을 사용했다.</p>
      <h2>분위기와 사용성은 함께 간다</h2>
      <p>강한 스타일일수록 포커스 표시, 대비, 모바일 크기를 더 꼼꼼히 살펴야 한다. 장식이 정보보다 먼저 보이지 않게 하는 것이 마지막 기준이다.</p>
    `,
  },
  {
    slug: "weekly-learning-log",
    title: "일주일 동안 새로 배운 것들",
    category: "journal",
    date: "2026.08.03",
    readTime: "3 MIN READ",
    excerpt: "작은 CSS 속성부터 기록 습관까지, 이번 주의 짧은 배움 다섯 가지.",
    tags: ["Weekly", "Learning", "Memo"],
    icon: "01",
    color: "#e6d8ff",
    tilt: "-5deg",
    content: `
      <p class="lead">한 주의 끝에서 ‘무엇을 끝냈나’ 대신 ‘무엇을 알게 됐나’를 묻기로 했다.</p>
      <h2>이번 주의 다섯 줄</h2>
      <ul>
        <li>큰 목표는 오늘 열 수 있는 파일 하나로 줄여야 시작된다.</li>
        <li>CSS의 <code>clamp()</code>는 반응형 타이포그래피를 단정하게 만든다.</li>
        <li>읽은 글은 요약보다 내 생각 한 줄이 더 오래 남는다.</li>
        <li>검색창은 결과가 없을 때 더 친절해야 한다.</li>
        <li>완성한 뒤의 작은 정리가 다음 시작을 쉽게 만든다.</li>
      </ul>
      <p>이 형식은 앞으로도 가볍게 이어갈 생각이다. 대단한 결론이 없어도 배운 흔적은 충분히 기록할 가치가 있다.</p>
    `,
  },
  {
    slug: "old-web-new-eyes",
    title: "오래된 웹을 다시 보며 발견한 것",
    category: "culture",
    date: "2026.07.22",
    readTime: "7 MIN READ",
    excerpt: "정돈되지 않았지만 분명히 누군가의 것이었던 초기 개인 홈페이지에 관하여.",
    tags: ["Web", "Internet", "Archive"],
    icon: "@",
    color: "#ffc5a9",
    tilt: "2deg",
    content: `
      <p class="lead">오래된 개인 홈페이지에는 만든 사람의 선택이 숨김없이 보인다.</p>
      <h2>효율적이지 않아서 기억나는 것</h2>
      <p>각자 다른 배경색과 커서, 방문자 카운터, 공사 중인 페이지. 지금의 기준으로는 불필요한 요소도 많지만 그래서 더 분명한 얼굴을 가졌다.</p>
      <p>모든 화면이 비슷해지는 시대에 그 솔직함은 다시 새롭게 느껴진다. 이 블로그도 잘 정돈된 틀 안에서 조금은 사적인 농담과 예상 밖의 움직임을 남기고 싶었다.</p>
      <blockquote>웹사이트는 정보의 용기이면서 동시에 한 사람이 머무는 방이다.</blockquote>
    `,
  },
];

const dom = {
  body: document.body,
  gate: document.querySelector("#entry-gate"),
  enterButton: document.querySelector("#enter-button"),
  gateResponse: document.querySelector("#gate-response"),
  homeView: document.querySelector("#home-view"),
  articleView: document.querySelector("#article-view"),
  articleContent: document.querySelector("#article-content"),
  postGrid: document.querySelector("#post-grid"),
  tickerTrack: document.querySelector("#ticker-track"),
  filterRow: document.querySelector("#category-filters"),
  emptyState: document.querySelector("#empty-state"),
  searchForm: document.querySelector("#header-search"),
  searchInput: document.querySelector("#search-input"),
  suggestions: document.querySelector("#search-suggestions"),
  searchHeading: document.querySelector("#search-result-heading"),
  resultQuery: document.querySelector("#result-query"),
  clearSearch: document.querySelector("#clear-search"),
  showAllButton: document.querySelector("#show-all-button"),
  backButton: document.querySelector("#back-button"),
  shareButton: document.querySelector("#share-button"),
  menuButton: document.querySelector("#menu-button"),
  siteNav: document.querySelector("#site-nav"),
  toast: document.querySelector("#toast"),
  clock: document.querySelector("#live-clock"),
};

const defaultTitle = "the2en.log — write, make, collect";
let activeCategory = "all";
let toastTimer;

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalized(value) {
  return String(value).trim().toLocaleLowerCase("ko-KR");
}

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId) || {
    id: categoryId,
    label: String(categoryId).toUpperCase(),
    aliases: "",
  };
}

function renderCategories() {
  const tickerLinks = categories.map((category) => `
    <a href="?category=${encodeURIComponent(category.id)}#stories" data-category-link="${escapeHTML(category.id)}">${escapeHTML(category.label)}</a><i>✦</i>
  `).join("");

  dom.tickerTrack.innerHTML = `
    <div class="ticker-group">${tickerLinks}</div>
    <div class="ticker-group" aria-hidden="true">
      ${categories.map((category) => `
        <a href="?category=${encodeURIComponent(category.id)}#stories" data-category-link="${escapeHTML(category.id)}" tabindex="-1">${escapeHTML(category.label)}</a><i>✦</i>
      `).join("")}
    </div>
  `;

  dom.filterRow.innerHTML = `
    <button class="filter-chip active" type="button" data-category="all">ALL <span id="all-count">${String(posts.length).padStart(2, "0")}</span></button>
    ${categories.map((category) => `
      <button class="filter-chip" type="button" data-category="${escapeHTML(category.id)}">${escapeHTML(category.label)}</button>
    `).join("")}
  `;
}

function getMatchingPosts(query = "", category = "all") {
  const keyword = normalized(query);
  return posts.filter((post) => {
    const categoryMeta = getCategory(post.category);
    const inCategory = category === "all" || post.category === category;
    const haystack = normalized([
      post.title,
      post.excerpt,
      categoryMeta.label,
      categoryMeta.aliases,
      ...post.tags,
    ].join(" "));
    return inCategory && (!keyword || haystack.includes(keyword));
  });
}

function postCardTemplate(post, index) {
  const href = `?post=${encodeURIComponent(post.slug)}`;
  const category = getCategory(post.category);
  return `
    <article class="post-card">
      <div class="post-card-visual" style="--card-color:${post.color}; --card-tilt:${post.tilt}">
        <span class="post-index">NO.${String(index + 1).padStart(2, "0")}</span>
        <div class="visual-shape" aria-hidden="true"><span>${escapeHTML(post.icon)}</span></div>
      </div>
      <div class="post-card-body">
        <div class="post-meta">
          <span class="post-category">${escapeHTML(category.label)}</span>
          <time datetime="${post.date.replaceAll(".", "-")}">${post.date}</time>
        </div>
        <h3>${escapeHTML(post.title)}</h3>
        <p>${escapeHTML(post.excerpt)}</p>
        <div class="post-tags">${post.tags.map((tag) => `<span>#${escapeHTML(tag)}</span>`).join("")}</div>
        <a class="post-card-link" href="${href}" data-post-link="${post.slug}">
          READ STORY <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `;
}

function renderPosts(query = "") {
  const matched = getMatchingPosts(query, activeCategory);
  dom.postGrid.innerHTML = matched.map(postCardTemplate).join("");
  dom.postGrid.hidden = matched.length === 0;
  dom.emptyState.hidden = matched.length !== 0;
  document.querySelector("#all-count").textContent = String(posts.length).padStart(2, "0");

  if (query) {
    dom.searchHeading.hidden = false;
    dom.resultQuery.textContent = `“${query}”`;
  } else {
    dom.searchHeading.hidden = true;
  }
}

function renderArticle(post) {
  const category = getCategory(post.category);
  dom.articleContent.innerHTML = `
    <header class="article-header" style="--article-color:${post.color}">
      <span class="post-category">${escapeHTML(category.label)}</span>
      <h1>${escapeHTML(post.title)}</h1>
      <p class="article-dek">${escapeHTML(post.excerpt)}</p>
      <div class="article-info">
        <time datetime="${post.date.replaceAll(".", "-")}">${post.date}</time>
        <span>${post.readTime}</span>
        <span>${post.tags.map((tag) => `#${escapeHTML(tag)}`).join(" ")}</span>
      </div>
    </header>
    <div class="article-body">
      ${post.content}
      <div class="article-end">END OF FILE · THANKS FOR READING ♥</div>
    </div>
  `;
  dom.homeView.hidden = true;
  dom.articleView.hidden = false;
  document.title = `${post.title} — the2en.log`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showHome(query = "", shouldScroll = false) {
  dom.homeView.hidden = false;
  dom.articleView.hidden = true;
  document.title = query ? `${query} 검색 — the2en.log` : defaultTitle;
  dom.searchInput.value = query;
  renderPosts(query);

  if (shouldScroll || query) {
    requestAnimationFrame(() => {
      document.querySelector("#stories").scrollIntoView({ behavior: shouldScroll ? "smooth" : "auto" });
    });
  }
}

function renderRoute(options = {}) {
  const params = new URLSearchParams(window.location.search);
  const postSlug = params.get("post");
  const query = params.get("q")?.trim() || "";
  const requestedCategory = params.get("category") || "all";
  activeCategory = categories.some((category) => category.id === requestedCategory)
    ? requestedCategory
    : "all";
  updateActiveFilter();

  if (postSlug) {
    const post = posts.find((item) => item.slug === postSlug);
    if (post) {
      renderArticle(post);
      return;
    }
  }

  showHome(query, options.scrollToResults === true);
}

function navigateToSearch(query) {
  const value = query.trim();
  const url = new URL(window.location.href);
  url.search = "";
  if (value) url.searchParams.set("q", value);
  window.history.pushState({}, "", `${url.pathname}${url.search}`);
  activeCategory = "all";
  updateActiveFilter();
  closeSuggestions();
  renderRoute({ scrollToResults: true });
}

function navigateToCategory(category) {
  const url = new URL(window.location.href);
  url.search = "";
  if (category !== "all") url.searchParams.set("category", category);
  window.history.pushState({}, "", `${url.pathname}${url.search}#stories`);
  activeCategory = category;
  updateActiveFilter();
  closeSuggestions();
  showHome("", true);
}

function updateActiveFilter() {
  document.querySelectorAll(".filter-chip").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function closeSuggestions() {
  dom.suggestions.hidden = true;
  dom.suggestions.innerHTML = "";
}

function showSuggestions(query) {
  if (!query.trim()) {
    closeSuggestions();
    return;
  }

  const matched = getMatchingPosts(query).slice(0, 3);
  if (!matched.length) {
    closeSuggestions();
    return;
  }

  dom.suggestions.innerHTML = matched.map((post) => `
    <button class="suggestion-item" type="button" role="option" data-suggestion="${post.slug}">
      <strong>${escapeHTML(post.title)}</strong>
      <small>${escapeHTML(getCategory(post.category).label)} · ${post.date}</small>
    </button>
  `).join("");
  dom.suggestions.hidden = false;
}

function openGateIfNeeded() {
  const params = new URLSearchParams(window.location.search);
  const cameForContent = Boolean(params.get("q")?.trim() || params.get("post") || params.get("category"));
  const alreadyEntered = sessionStorage.getItem("the2en-entered") === "yes";

  if (!cameForContent && !alreadyEntered) {
    dom.gate.hidden = false;
    dom.body.classList.add("gate-open");
    requestAnimationFrame(() => dom.enterButton.focus());
  }
}

function enterSite() {
  sessionStorage.setItem("the2en-entered", "yes");
  dom.gateResponse.textContent = "OPENING THE ARCHIVE...";
  dom.gate.classList.add("is-leaving");
  window.setTimeout(() => {
    dom.gate.hidden = true;
    dom.gate.classList.remove("is-leaving");
    dom.body.classList.remove("gate-open");
    document.querySelector("#main-content").focus({ preventScroll: true });
  }, 520);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  toastTimer = window.setTimeout(() => dom.toast.classList.remove("show"), 2200);
}

function updateClock() {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  dom.clock.textContent = `${time} KST`;
}

dom.enterButton.addEventListener("click", enterSite);

document.addEventListener("keydown", (event) => {
  if (!dom.gate.hidden && event.key === "Enter") enterSite();
  if (event.key === "Escape") closeSuggestions();
});

dom.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  navigateToSearch(dom.searchInput.value);
});

dom.searchInput.addEventListener("input", () => showSuggestions(dom.searchInput.value));
dom.searchInput.addEventListener("focus", () => showSuggestions(dom.searchInput.value));

dom.suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-suggestion]");
  if (!button) return;
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("post", button.dataset.suggestion);
  window.history.pushState({}, "", `${url.pathname}${url.search}`);
  closeSuggestions();
  renderRoute();
});

document.addEventListener("click", (event) => {
  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    event.preventDefault();
    navigateToCategory(categoryLink.dataset.categoryLink);
    return;
  }

  const postLink = event.target.closest("[data-post-link]");
  if (postLink) {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("post", postLink.dataset.postLink);
    window.history.pushState({}, "", `${url.pathname}${url.search}`);
    renderRoute();
    return;
  }

  if (!event.target.closest("#header-search")) closeSuggestions();
});

dom.filterRow.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-chip");
  if (!button) return;
  navigateToCategory(button.dataset.category);
});

dom.clearSearch.addEventListener("click", () => navigateToSearch(""));
dom.showAllButton.addEventListener("click", () => navigateToSearch(""));

dom.backButton.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.search = "";
  window.history.pushState({}, "", url.pathname);
  showHome();
  document.querySelector("#stories").scrollIntoView({ behavior: "auto" });
});

dom.shareButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("링크를 복사했어요! ♥");
  } catch {
    showToast("주소창의 링크를 복사해 주세요.");
  }
});

dom.menuButton.addEventListener("click", () => {
  const open = dom.siteNav.classList.toggle("open");
  dom.menuButton.setAttribute("aria-expanded", String(open));
  dom.menuButton.querySelector("span").textContent = open ? "−" : "＋";
});

dom.siteNav.addEventListener("click", () => {
  dom.siteNav.classList.remove("open");
  dom.menuButton.setAttribute("aria-expanded", "false");
  dom.menuButton.querySelector("span").textContent = "＋";
});

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("popstate", () => renderRoute());

renderCategories();
updateActiveFilter();
renderRoute();
openGateIfNeeded();
updateClock();
window.setInterval(updateClock, 30_000);
