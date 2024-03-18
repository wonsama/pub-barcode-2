# install

## 프로젝트 생성

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

## shadcn-ui 초기화

- style : new york 으로 선택 (default : 두꺼움, new york : 얇음)
- color : base color 는 `slate` 를 선택, 맨 위에 있는 색상

```bash
npx shadcn-ui@latest init
```

## 폰트 초기화

기본 폰트는 [Inter](https://rsms.me/inter/) 이다. 하지만 다른 폰트를 사용하고자 한다면 아래를 참조하여 폰트를 변경할 수 있다.

```tsx
// => /src/app/layout.tsx
import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '../@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        ...
      </body>
    </html>
  );
}
```

```tsx
// => /tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
};
```

## APP 구조

```tree
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

- UI 컴포넌트는 components/ui 폴더에 배치합니다.
- `<PageHeader  />` 및 `<MainNav  />` 과 같은 나머지 구성 요소는 구성 요소 폴더에 배치합니다.
- lib 폴더에는 모든 유틸리티 함수가 들어 있습니다. 여기에는 cn 헬퍼를 정의하는 utils.ts가 있습니다.
- 스타일 폴더에는 전역 CSS가 포함되어 있습니다.

## 컴포넌트 추가 및 사용 방법

컴포넌트 추가

```tsx
npx shadcn-ui@latest add button
```

컴포넌트 사용하기

```tsx
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## 참조

- `bun` 은 windows 의 경우 wsl 로 설치해야 한다.

## 참조링크

- [shadcn: next](https://ui.shadcn.com/docs/installation/next)
