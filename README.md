# IDly 2.0 Landing

라우팅·서버 없는 한 장짜리 정적 랜딩 페이지 (React + TypeScript + Vite + Tailwind CSS).

## 명령어

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 타입 체크 + 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint
npm run format   # Prettier (Tailwind 클래스 순서 자동 정렬 포함)
```

`dist/` 폴더를 그대로 정적 호스팅(Vercel, Netlify, GitHub Pages, S3 등)에 올리면 됩니다.
`base: './'`로 빌드하므로 서브 경로에 배포해도 동작합니다.

## 구조

```
src/
├── App.tsx                  # 섹션을 위→아래 순서로 배치
├── main.tsx
├── constants.ts             # 외부 링크 URL (EXTERNAL_URL)
├── components/
│   ├── CtaButton.tsx        # 외부 링크로 나가는 버튼 (새 탭)
│   ├── Section.tsx          # 섹션 공통 여백/컨테이너
│   └── sections/            # Hero, Features, Cta, Footer …
└── styles/global.css        # Tailwind import + @theme 디자인 토큰
public/                      # favicon, OG 이미지 등 그대로 복사되는 파일
```

- 색상·폰트 등 디자인 토큰은 `global.css`의 `@theme`에 추가하면 `bg-primary`, `text-sub` 같은 유틸리티로 바로 쓸 수 있습니다.
- 섹션을 추가하려면 `components/sections/`에 컴포넌트를 만들고 `App.tsx`에 순서대로 넣으면 됩니다.
