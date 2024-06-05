import React from "react";
import { styled } from "styled-components";

function LongSubjective({
  id,
  answer,
  answerChange,
}: {
  id: string;
  answer: any;
  answerChange: (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => void;
}) {
  return (
    <LongSubjectiveWrap>
      <label htmlFor="longAnswer" className="sr-only">
        장문형 답변 (1000자 이내)
      </label>
      <textarea
        id="longAnswer"
        value={answer}
        onChange={(e) => {
          answerChange(e, id);
        }}
        maxLength={1000}
        placeholder="1000자 이내로 입력하세요."
        disabled
      />
    </LongSubjectiveWrap>
  );
}

export default LongSubjective;

const LongSubjectiveWrap = styled.div`
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    resize: none;
  }
`;
