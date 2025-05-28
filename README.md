# 찜지기 (Zzimjigi)

찜지기는 관심 있는 아이템(찜 목록)을 관리할 수 있는 웹 애플리케이션입니다. Node.js 기반의 백엔드와 React(React Router v7) 기반의 프론트엔드로 구성되어 있습니다.

---

## 기술 스택

- **Frontend**: React, React Router v7, TypeScript, Zustand, TanStack Query, TailwindCSS
- **Backend**: Node.js, Express (예정)
- **패키지 매니저**: npm

---

## 폴더 구조

```
zzimjigi/
├── client/           # 프론트엔드(React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── server/           # 백엔드(Node.js, Express)
│   ├── src/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

---

## 주요 기능 (예정)

- 사용자가 사고 싶은 아이템을 사진/설명과 함께 게시글로 등록
- 다른 사용자들이 해당 아이템에 대해 댓글로 "살까/말까" 투표 또는 자유롭게 의견 남기기
- 게시글별 투표 결과 및 댓글 커뮤니티 기능
- 카테고리별로 아이템 게시글 탐색 및 관리
- 반응형 UI로 모바일/PC 모두 지원
