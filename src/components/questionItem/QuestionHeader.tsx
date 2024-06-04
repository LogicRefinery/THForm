import React, { useState } from "react";
import { styled } from "styled-components";

type Props = {
  index: number;
  id: string;
  type: string;
  onSelectedChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => void;
  onRemove: (id: string) => void;
  onClone: (id: string) => void;
};

function QuestionHeader({
  index,
  id,
  type,
  onSelectedChange,
  onRemove,
  onClone,
}: Props) {
  const [checked, setChecked] = useState<boolean>(true);
  const onCheckedChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <QuestionHeaderWrap>
      <QuestionHeaderLeftContent>
        <div>Q{index}</div>
        <input
          type="checkbox"
          id="required"
          checked={checked}
          onChange={onCheckedChange}
        ></input>
        <label htmlFor="required">필수항목</label>
      </QuestionHeaderLeftContent>
      <QuestionHeaderRightContent>
        <input
          type="button"
          id={`clone_${id}`}
          value="복사"
          onClick={() => {
            onClone(id);
          }}
        />
        <label className="sr-only" htmlFor={`clone_${id}`}>
          복사버튼
        </label>

        <input
          type="button"
          id={`remove_${id}`}
          value="삭제"
          onClick={() => {
            onRemove(id);
          }}
        />
        <label className="sr-only" htmlFor={`remove_${id}`}>
          삭제버튼
        </label>

        <select
          name="answer_type"
          id="answer_type"
          value={type}
          onChange={(e) => {
            onSelectedChange(e, id);
          }}
        >
          <option value="shortSubjective">단문형 답변</option>
          <option value="longSubjective">장문형 답변</option>
          <option value="multiple">객관식 답변( 복수선택 )</option>
          <option value="single">객관식 답변( 단수선택 )</option>
        </select>

        <label className="sr-only" htmlFor="answer_type">
          답변유형 선택
        </label>
      </QuestionHeaderRightContent>
    </QuestionHeaderWrap>
  );
}

const QuestionHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const QuestionHeaderLeftContent = styled.div``;
const QuestionHeaderRightContent = styled.div``;

export default QuestionHeader;
