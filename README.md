# Hello MCP Next.js

깔끔한 아키텍처로 구성된 Next.js 프로젝트입니다.

## 🏗️ 아키텍처 구조

```
src/
├── app/                 # Next.js 13+ App Router
│   ├── (auth)/         # 인증 관련 라우트 그룹
│   ├── (dashboard)/    # 대시보드 라우트 그룹
│   ├── api/            # API 라우트
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 홈페이지
├── components/         # 재사용 가능한 컴포넌트
│   ├── ui/            # 기본 UI 컴포넌트
│   ├── forms/         # 폼 컴포넌트
│   └── layout/        # 레이아웃 컴포넌트
├── lib/               # 유틸리티 라이브러리
│   ├── utils.ts       # 공통 유틸리티
│   ├── validations.ts # Zod 스키마
│   └── constants.ts   # 상수
├── hooks/             # 커스텀 훅
├── types/             # TypeScript 타입 정의
└── constants/         # 상수 정의
```

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 린트
```bash
npm run lint
```

### 타입 체크
```bash
npm run type-check
```

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with clsx & class-variance-authority
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Linting**: ESLint + Prettier

## 📁 폴더 구조 설명

### `/src/app`
Next.js 13+ App Router를 사용한 페이지 구조

### `/src/components`
재사용 가능한 컴포넌트들
- `ui/`: 기본 UI 컴포넌트 (Button, Input, Card 등)
- `forms/`: 폼 관련 컴포넌트
- `layout/`: 레이아웃 관련 컴포넌트

### `/src/lib`
유틸리티 함수들과 설정
- `utils.ts`: 공통 유틸리티 함수
- `validations.ts`: Zod 스키마 정의
- `constants.ts`: 상수 정의

### `/src/hooks`
커스텀 React 훅들

### `/src/types`
TypeScript 타입 정의

### `/src/constants`
애플리케이션에서 사용하는 상수들

## 🎨 디자인 시스템

- **Colors**: Tailwind CSS 기본 색상 + 커스텀 primary 색상
- **Typography**: Inter 폰트
- **Spacing**: Tailwind CSS 기본 스페이싱
- **Components**: 일관된 디자인 시스템을 위한 컴포넌트 라이브러리

## 🔧 개발 가이드라인

1. **컴포넌트**: 재사용 가능하고 테스트하기 쉬운 컴포넌트 작성
2. **타입**: TypeScript를 적극 활용하여 타입 안정성 확보
3. **스타일**: Tailwind CSS 클래스를 사용하여 일관된 스타일링
4. **폼**: React Hook Form + Zod를 사용하여 폼 검증
5. **상태 관리**: 필요에 따라 React Context 또는 외부 상태 관리 라이브러리 사용

## 📝 커밋 컨벤션

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 스타일 수정
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경