module.exports = {
    // 1. 환경 설정 (Browser 및 Node 환경에서 전역 변수 인식)
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // 2. 확장 설정 (규칙 세트 불러오기)
    // 'plugin:react/recommended' - React 기본 규칙
    // 'airbnb' - Airbnb JavaScript 스타일 가이드
    // 'airbnb-typescript' - TypeScript 환경에서 Airbnb 규칙 적용
    // 'plugin:prettier/recommended' - Prettier 규칙을 ESLint에 통합
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ],
    // 3. 파서 및 설정
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // TypeScript 버전 지정
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // JSX 구문 허용
        },
        // TypeScript 프로젝트 설정을 ESLint에 전달 (필수)
        project: './tsconfig.json',
    },
    // 4. 플러그인 설정
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier', // Prettier 플러그인 활성화
    ],
    // 5. 사용자 정의 규칙 (Airbnb/Prettier 규칙 덮어쓰기)
    rules: {
        // Prettier 관련 규칙: Prettier 오류 발생 시 ESLint 오류로 표시
        'prettier/prettier': 'error',

        // React/JSX 관련 설정
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }], // TSX 파일 허용
        'react/react-in-jsx-scope': 'off', // React 17+ JSX 변환을 위한 설정
        'react/prop-types': 'off', // TypeScript 사용 시 PropTypes 검사 비활성화
        'react/require-default-props': 'off', // 기본 PropType 요구사항 비활성화

        // Import/모듈 관련 설정
        'import/prefer-default-export': 'off', // 단일 내보내기 시 default export 강제 방지
        'import/extensions': [ // Import 시 파일 확장자 누락 허용
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        // TypeScript 관련 설정
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 모듈 경계 타입 명시 강제 비활성화 (편의성)
        '@typescript-eslint/naming-convention': 'off', // 복잡한 네이밍 규칙 비활성화

        // 일반 설정
        'no-console': 'warn', // console.log 사용 시 경고만 표시
        'no-param-reassign': [2, { 'props': false }], // 함수 매개변수 재할당 허용 (props는 제외)
    },
    // 6. 특정 파일 무시 설정
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'build/',
        '*.js', // JS 파일을 무시하고 TS 파일에 집중
    ],
    // 7. settings
    settings: {
        react: {
            version: 'detect', // 설치된 React 버전을 자동으로 감지
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};