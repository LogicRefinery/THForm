import React, { useState } from "react";

function SurveyBody({ selectedValue }: { selectedValue: any }) {
  // 각 유형에 대한 답변 값은 이 컴포넌트에서 관리한다.
  // const [shortAnswer, setShortAnswer] = useState<string>();
  // const [longAnswer, setLongAnswer] = useState<string>();
  // const onShortAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setShortAnswer(e.target.value);
  // };
  // const onLongAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLongAnswer(e.target.value);
  // };

  const renderContent = () => {
    switch (selectedValue) {
      case 1:
        return (
          <div>
            <label htmlFor="shortAnswer">단문형 답변 (200자 이내)</label>
            <input
              type="text"
              id="shortAnswer"
              // value={shortAnswer}
              // onChange={handleShortAnswerChange}
              maxLength={200}
              placeholder="200자 이내로 입력하세요."
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="longAnswer">장문형 답변 (1000자 이내)</label>
            <textarea
              id="longAnswer"
              // value={longAnswer}
              // onChange={handleLongAnswerChange}
              maxLength={1000}
              placeholder="1000자 이내로 입력하세요."
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label>객관식 답변 (복수 선택 가능)</label>
            <div>
              <input type="checkbox" id="option1" />
              <label htmlFor="option1">선택사항 1</label>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <label>객관식 답변 (단수 선택)</label>
            <div>
              <input type="radio" name="singleChoice" id="option1" />
              <label htmlFor="option1">선택사항 1</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

/*
        1. 단문형 : 200자 이내의 답변을 받을 수 있는 란 입니다. <br />
        2. 장문형 :1000자 이내의 답변을 받을 수 있는 란 입니다.
        <br />
        3. 객관식 단수 : ㅁ 선택사항 1 | ㅁ 선택사항 2 | ㅁ 선택사항 3 | ㅁ
        선택사항 4<br /> 4. 객관식 복수 : ㅇ 선택사항 1 | ㅇ 선택사항 2 | ㅇ
        선택사항 3 | ㅇ 선택사항 4 기타항목은 1개만 추가되고 항상 가장 아래에
        위치한다.
*/

export default SurveyBody;
