import React from "react";
import { styled } from "styled-components";

function ShortSubjective({
  id,
  answer,
  answerChange,
}: {
  id: string;
  answer: any;
  answerChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}) {
  return (
    <ShortSubjectiveWrap>
      <label htmlFor="shortAnswer" className="sr-only">
        단문형 답변 (200자 이내)
      </label>
      <InputText
        type="text"
        id="shortAnswer"
        value={answer}
        onChange={(e) => {
          answerChange(e, id);
        }}
        maxLength={200}
        placeholder="200자 이내로 입력하세요."
        disabled
      />
    </ShortSubjectiveWrap>
  );
}

export default ShortSubjective;

const ShortSubjectiveWrap = styled.div`
  display: flex;
`;

const InputText = styled.input.attrs({ type: "text" })`
  flex: 1;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  margin: 0 0 20px 0;
`;
