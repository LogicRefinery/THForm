# 설문조사 양식 생성 및 관리 웹 애플리케이션

## 프로젝트 개요
이 프로젝트는 React를 사용하여 설문조사 양식을 생성하고 관리할 수 있는 웹 애플리케이션을 구현합니다. 사용자는 다양한 유형의 질문(단문형, 장문형, 객관식 단수 선택, 객관식 복수 선택)을 추가하고, 질문의 순서를 변경하며, 필수 여부를 설정할 수 있습니다.

## 주요 기능
- **질문 생성 및 수정:** 사용자는 새로운 질문을 추가하거나 기존 질문을 수정할 수 있습니다.
- **질문 유형 선택:** 단문형, 장문형, 객관식 단수 선택, 객관식 복수 선택 중에서 선택할 수 있습니다.
- **질문 순서 조정:** 드래그 앤 드롭으로 질문의 순서를 조정할 수 있습니다.
- **필수 질문 설정:** 각 질문에 대해 필수 여부를 설정할 수 있습니다.

## 기술 스택
- **React:** 사용자 인터페이스 구축
- **TypeScript:** 정적 타입 지원을 통한 안정적인 코드 작성
- **Styled-components:** 컴포넌트 스타일링
- **React Router:** 페이지 라우팅
- **Redux:** 상태 관리
- **Axios:** Axios를 이용한 API 요청
- **Msw:** Msw를 이용한 API 목킹

## 구성 요소
- **QuestionContainer:** 질문 목록을 관리하고, 질문 추가 및 수정 기능을 제공합니다.
- **QuestionItem:** 개별 질문을 표시하고, 질문 유형에 따라 적절한 입력 필드를 제공합니다.
- **Header 및 Nav:** 네비게이션 및 페이지 제목을 표시합니다.
- **SurveyContainer:** 리덕스에 저장한 목록을 출력 합니다.

## 시작하기
1. 프로젝트를 다운받고 npm i 를 터미널에 입력해주세요.
2. 프로젝트를 다운받고 npm start 를 터미널에 입력해주세요.
