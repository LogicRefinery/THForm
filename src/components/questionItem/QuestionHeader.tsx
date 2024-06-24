import React from "react";
import { styled } from "styled-components";
import { QuestionMethodType } from "../../model/survey";

type Props = {
  index: number;
  id: string;
  type: string;
  isRequired: boolean;
  questionMethod: QuestionMethodType;
};

function QuestionHeader({
  index,
  id,
  type,
  isRequired,
  questionMethod,
}: Props) {
  return (
    <QuestionHeaderWrap>
      <QuestionHeaderLeftContent>
        <div>Q{index}</div>
        <div>
          <input
            type="checkbox"
            id={`required${id}`}
            checked={isRequired}
            onChange={() => {
              questionMethod.onRequiredChange(id, !isRequired);
            }}
          ></input>
          <label htmlFor={`required${id}`}>필수항목</label>
        </div>
      </QuestionHeaderLeftContent>
      <QuestionHeaderRightContent>
        <Button
          type="button"
          id={`clone_${id}`}
          value="복제"
          onClick={() => {
            questionMethod.onClone(id);
          }}
        />
        <label className="sr-only" htmlFor={`clone_${id}`}>
          복사버튼
        </label>

        <Button
          type="button"
          id={`remove_${id}`}
          value="삭제"
          onClick={() => {
            questionMethod.onRemove(id);
          }}
        />
        <label className="sr-only" htmlFor={`remove_${id}`}>
          삭제버튼
        </label>
        <Select
          name="answer_type"
          id="answer_type"
          value={type}
          onChange={(e) => {
            questionMethod.onSelectedChange(e, id);
          }}
        >
          <option value="shortSubjective">단문형 답변</option>
          <option value="longSubjective">장문형 답변</option>
          <option value="multiple">객관식 답변( 복수선택 )</option>
          <option value="single">객관식 답변( 단수선택 )</option>
        </Select>

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
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const QuestionHeaderLeftContent = styled.div`
  display: flex;
  & > div {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;
const QuestionHeaderRightContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
  }
`;

const Button = styled.input.attrs({ type: "button" })`
  padding: 8px 16px;
  margin-right: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }

  &[id^="clone"] {
    background-color: #666;
    color: white;
    border: none;

    &:hover {
      background-color: #007bff;
    }
  }

  &[id^="remove"] {
    background-color: #666;
    color: white;
    border: none;

    &:hover {
      background-color: #007bff;
    }
  }
`;

const Select = styled.select`
  height: 32px;
  border-radius: 4px;
`;

export default QuestionHeader;
