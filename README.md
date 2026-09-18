# the2en.log

레트로 픽셀 그래픽과 도트 질감을 사용한 개인 블로그 겸 포트폴리오입니다. 별도 빌드 과정 없이 GitHub Pages에서 바로 동작합니다.

- `/` — 글 검색과 카테고리 탐색 중심의 블로그
- `/portfolio/` — 실제 GitHub 프로젝트와 소개를 모은 포트폴리오

## 로컬에서 보기

저장소 폴더에서 아래 명령을 실행한 뒤 `http://localhost:8000`을 엽니다.

```powershell
python -m http.server 8000
```

## 콘텐츠 수정

- 글과 본문: `app.js`의 `posts`
- 카테고리: `app.js`의 `categories`
- 포트폴리오 프로젝트: `portfolio/portfolio.js`의 `projects`
- 소개 문구와 프로필 정보: `portfolio/index.html`
- 색상과 레이아웃: `styles.css`

추가·수정·삭제 예시는 [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md)에 정리되어 있습니다.

## 진입 UX

- 주소만 입력해 방문하면 픽셀 스타일의 입장 화면이 나타납니다.
- 같은 탭에서는 한 번 YES를 누른 뒤 입장 화면이 다시 나타나지 않습니다.
- `?q=키워드`로 방문하면 해당 검색 결과를 바로 보여줍니다.
- `?category=design`으로 방문하면 해당 카테고리 글을 바로 보여줍니다.
- `?post=글-slug`로 방문하면 해당 글을 바로 보여줍니다.

예시:

```text
https://the2en.github.io/?q=디자인
https://the2en.github.io/?post=kind-interface-notes
```

## 배포

GitHub 저장소의 **Settings → Pages**에서 배포 소스를 현재 브랜치의 루트(`/`)로 설정합니다.
