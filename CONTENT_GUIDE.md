# 콘텐츠 관리 가이드

이 사이트는 별도의 관리자 화면이나 빌드 과정 없이 두 개의 JavaScript 배열로 콘텐츠를 관리합니다.

- 프로젝트: `portfolio/portfolio.js` 맨 위의 `projects`
- 카테고리와 글: `app.js` 맨 위의 `categories`, `posts`

파일을 수정한 뒤 저장하고 GitHub에 push하면 GitHub Pages에도 반영됩니다.

## 프로젝트 추가하기

`portfolio/portfolio.js`의 `projects` 배열 안에 아래 형식의 객체를 하나 추가합니다. 한 번 추가하면 **Things I made. 옆 타임라인과 프로젝트 카드가 동시에 생성**됩니다.

```js
{
  id: "my-new-project",
  year: "2026",
  number: "PROJECT 05",
  title: "MY NEW PROJECT",
  type: "WEB · DESIGN",
  label: "PERSONAL PROJECT",
  description: "프로젝트를 한두 문장으로 소개합니다.",
  tags: ["HTML", "CSS", "JavaScript"],
  color: "#e6d8ff",
  icon: "★",
  featured: false,
  repo: "https://github.com/the2en/저장소이름",
  live: "https://배포주소.example.com/",
},
```

- `id`: 영문 소문자와 하이픈으로 만든 고유값입니다. 타임라인의 이동 주소로 사용됩니다.
- `year`: 타임라인 정렬에 사용됩니다.
- `number`: 프로젝트 카드 상단의 번호입니다.
- `type`, `label`: 카드의 작은 분류 문구입니다.
- `tags`: 기술 태그 목록입니다.
- `color`: 카드 이미지 영역의 배경색입니다.
- `icon`: 일반 카드에 표시할 문자나 이모지입니다.
- `featured: true`: 넓은 대표 카드로 표시합니다. 대표 프로젝트 하나에만 사용하는 것을 권장합니다.
- `visual: "tree"`: POP TREE처럼 나무 그림을 사용하고 싶을 때만 넣습니다. 없으면 `icon`이 표시됩니다.
- `repo`: GitHub 저장소 주소입니다.
- `live`: 배포된 프로젝트가 있을 때만 넣습니다. 없으면 이 줄을 생략합니다.

### 프로젝트 수정·삭제

- 수정: 해당 객체의 `title`, `description`, `tags`, 링크 등을 바꾸고 저장합니다.
- 삭제: `{`부터 닫는 `},`까지 프로젝트 객체 전체를 삭제합니다.
- 삭제 후 `number`를 다시 정리하면 카드 번호가 자연스럽게 이어집니다.

## 글 작성하기

`app.js`의 `posts` 배열 안에 아래 형식의 객체를 추가합니다. 새 글은 블로그 홈, 검색, 카테고리 필터, 글 상세 화면에 자동으로 연결됩니다.

```js
{
  slug: "my-first-post",
  title: "새 글 제목",
  category: "journal",
  date: "2026.09.18",
  readTime: "5 MIN READ",
  excerpt: "목록 카드와 검색 결과에 보일 짧은 소개입니다.",
  tags: ["기록", "생각"],
  icon: "✦",
  color: "#ffd4e6",
  tilt: "-2deg",
  content: `
    <p class="lead">첫 문단은 이렇게 강조할 수 있습니다.</p>
    <h2>소제목</h2>
    <p>본문을 작성합니다.</p>
    <blockquote>강조하고 싶은 문장입니다.</blockquote>
  `,
},
```

- `slug`: 글마다 다른 영문 소문자·숫자·하이픈 값이어야 합니다. 글 주소 `?post=slug`에 사용됩니다.
- `category`: `categories` 배열에 존재하는 `id`를 입력합니다.
- `date`: 목록에 표시할 날짜입니다.
- `excerpt`: 글 카드와 검색 제안에 사용되는 요약입니다.
- `tags`: 검색 대상이 되는 태그입니다.
- `color`, `icon`, `tilt`: 글 카드의 색, 아이콘, 기울기입니다.
- `content`: 상세 본문 HTML입니다. 백틱 `` ` `` 사이에 작성합니다.

### 글 수정·삭제

- 수정: `posts`에서 해당 `slug`를 찾아 필요한 내용을 바꿉니다.
- 삭제: `{`부터 닫는 `},`까지 글 객체 전체를 삭제합니다.
- 이미 공유한 글의 `slug`를 바꾸면 예전 링크가 열리지 않으므로, 가능하면 유지합니다.

## 카테고리 추가하기

`app.js`의 `categories` 배열에 한 줄을 추가합니다.

```js
{ id: "review", label: "REVIEW", aliases: "리뷰 후기 사용기" },
```

- `id`: 주소와 글 데이터에서 사용하는 영문 소문자 고유값입니다.
- `label`: 움직이는 카테고리 줄과 필터 버튼에 표시됩니다.
- `aliases`: 검색할 때 같은 카테고리로 찾을 한국어·영어 유사어입니다. 띄어쓰기로 구분합니다.

추가 후 글의 `category`에 새 `id`를 입력하면 해당 카테고리에 글이 나타납니다. 움직이는 카테고리 줄과 필터 버튼은 자동으로 생성됩니다.

### 카테고리 수정·삭제

- 이름만 바꾸려면 `label`을 수정합니다. `id`는 그대로 두면 기존 링크가 유지됩니다.
- 삭제 전, 그 카테고리를 사용하는 글의 `category`를 다른 값으로 바꾸거나 해당 글을 삭제합니다.
- 그다음 `categories`에서 카테고리 객체 한 줄을 삭제합니다.

## 로컬에서 확인하기

저장소 폴더에서 아래 명령을 실행합니다.

```powershell
python -m http.server 8000
```

브라우저에서 다음 주소를 확인합니다.

- 블로그 홈: `http://localhost:8000/`
- 포트폴리오: `http://localhost:8000/portfolio/`
- 카테고리 링크 예시: `http://localhost:8000/?category=design`
- 글 링크 예시: `http://localhost:8000/?post=kind-interface-notes`

JavaScript 객체 사이의 쉼표나 `content`의 백틱을 빠뜨리면 화면이 표시되지 않을 수 있습니다. 수정 후 브라우저를 새로고침해 목록과 링크를 확인하세요.
