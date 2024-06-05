import React from "react";
import { styled } from "styled-components";
import LongSubjective from "./anwerItem/LongSubjective";
import Multiple from "./anwerItem/Multiple";
import ShortSubjective from "./anwerItem/ShortSubjective";
import Single from "./anwerItem/Single";
import { Option, QuestionMethodType } from "../../model/survey";

function QuestionBody({
  id,
  type,
  title,
  options,
  answer,
  questionMethod,
}: {
  id: string;
  type: string;
  title: string;
  options: Option[] | null;
  answer: any;
  questionMethod: QuestionMethodType;
}) {
  const renderAnswerType = () => {
    switch (type) {
      case "shortSubjective":
        return (
          <ShortSubjective
            answer={answer}
            answerChange={questionMethod.onAnswerChange}
            id={id}
          />
        );
      case "longSubjective":
        return (
          <LongSubjective
            id={id}
            answer={answer}
            answerChange={questionMethod.onAnswerChange}
          />
        );
      case "multiple":
        return (
          <Multiple
            id={id}
            options={options}
            onChangeOption={questionMethod.onChangeOption}
            onAddOption={questionMethod.onAddOption}
            onRemoveOption={questionMethod.onRemoveOption}
            optionDragStart={questionMethod.optionDragStart}
            optionDragEnter={questionMethod.optionDragEnter}
            drop={questionMethod.drop}
          />
        );
      case "single":
        return (
          <Single
            id={id}
            options={options}
            onAddOption={questionMethod.onAddOption}
            onRemoveOption={questionMethod.onRemoveOption}
            onChangeOption={questionMethod.onChangeOption}
            optionDragStart={questionMethod.optionDragStart}
            optionDragEnter={questionMethod.optionDragEnter}
            drop={questionMethod.drop}
          />
        );
      default:
        return null;
    }
  };

  return (
    <QuestionBodyWrap>
      <QuestionBodyHeader>
        <label className="sr-only" htmlFor="question">
          질문제목
        </label>
        {/* 추후에 리덕스에 값 저장해야됨. */}
        <InputText
          type="text"
          placeholder="질문 내용을 200자 이하로 입력해주세요."
          id="question"
          value={title}
          onChange={(e) => {
            questionMethod.onQuestionChange(id, e);
          }}
        />
      </QuestionBodyHeader>
      {renderAnswerType()}
    </QuestionBodyWrap>
  );
}

export default QuestionBody;

const QuestionBodyWrap = styled.div``;

const QuestionBodyHeader = styled.div`
  display: flex;
  flex-direction: column;
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
