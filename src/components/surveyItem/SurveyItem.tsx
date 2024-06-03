import React, { useState } from "react";
import styled from "styled-components";
import SurveyBody from "./SurveyBody";

function Survey({ index }: { index: number }) {
  // const Test = styled.div`
  //   width: 100px;
  //   height: 100px;
  //   background: red;
  // `;

  const [checked, setChecked] = useState<boolean>(true);
  const onCheckedChange = () => {
    setChecked((prev) => !prev);
  };
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const onSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(parseInt(e.target.value));
  };

  return (
    <div className="survey_warp">
      <div className="survey_header">
        {/* 헤더도 컴포넌트로 만들어서 레벨 맞춰주면 좋음 */}
        <div>Q{index}</div>

        <input
          type="checkbox"
          id="required"
          checked={checked}
          onChange={onCheckedChange}
        ></input>
        <label htmlFor="required">필수여부</label>

        <label htmlFor="answer_type">답변유형 선택</label>

        <select
          name="answer_type"
          id="answer_type"
          value={selectedValue}
          onChange={onSelectedChange}
        >
          <option value="1">단문형 답변</option>
          <option value="2">장문형 답변</option>
          <option value="3">객관식 답변( 복수선택 )</option>
          <option value="4">객관식 답변( 단수선택 )</option>
          {/* <option value="단문형">단문형 답변</option>
          <option value="장문형">장문형 답변</option>
          <option value="체크박스">객관식 답변( 복수선택 )</option>
          <option value="라디오">객관식 답변( 단수선택 )</option> */}
        </select>

        <input type="button" id="clone" value="복사" />
        <label htmlFor="clone">복사버튼</label>

        <input type="button" id="remove" value="삭제" />
        <label htmlFor="clone">삭제버튼</label>

        <label htmlFor="question">질문제목</label>
        <input
          type="text"
          placeholder="질문 내용을 200자 이하로 입력해주세요."
          id="question"
        ></input>
      </div>
      <div className="survey_body">
        <SurveyBody selectedValue={selectedValue} />
        {/* <Test></Test> */}
      </div>
    </div>
  );
}

export default Survey;
