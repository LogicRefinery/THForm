import React from "react";

function Multiple() {
  // 항목 추가 버튼 누르면 questions 에 기본 항목을추가.
  // 옵션들 받아와서 렌더링.
  //
  return (
    <>
      {/* 여기서 맵 돌리기 ㅋㅋ */}
      <div>
        <label>객관식 답변 (복수 선택 가능)</label>
        <div>
          <input type="checkbox" id="option" />
          <label htmlFor="option" className="sr-only">
            선택사항 1
          </label>
          <input type="text" id="option" />
          <label htmlFor="option" className="sr-only">
            객관식 질문
          </label>
        </div>
      </div>
      {/* 이 버튼 누르면 QuestionContainer 에 questions 에 기본 객체추가 ㅋㅋ */}
      <button>옵션 추가</button>
    </>
  );
}

export default Multiple;
