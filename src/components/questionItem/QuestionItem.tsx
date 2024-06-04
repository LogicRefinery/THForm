import React, { useState } from "react";
import styled from "styled-components";
import QuestionBody from "./QuestionBody";
import QuestionHeader from "./QuestionHeader";

function QuestionItem({
  index,
  id,
  onRemove,
  onClone,
  type,
  onSelectedChange,
  answer,
  answerChange,
}: {
  index: number;
  id: string;
  onRemove: (id: string) => void;
  onClone: (id: string) => void;
  type: string;
  onSelectedChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => void;
  answer: any;
  answerChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => void;
}) {
  return (
    <QuestionItemWrap>
      <img src="/drag-icon.svg" alt="드래그 아이콘" />
      <QuestionHeader
        index={index}
        id={id}
        type={type}
        onSelectedChange={onSelectedChange}
        onRemove={onRemove}
        onClone={onClone}
      ></QuestionHeader>
      <QuestionBody
        id={id}
        type={type}
        answer={answer}
        answerChange={answerChange}
      />
    </QuestionItemWrap>
  );
}

const QuestionItemWrap = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  padding: 24px;
  & > img {
    display: block;
    margin: 0 auto 20px auto;
  }
`;
export default QuestionItem;
