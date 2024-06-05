import React from "react";
import styled from "styled-components";
import { Option, QuestionMethodType } from "../../model/survey";
import QuestionBody from "./QuestionBody";
import QuestionHeader from "./QuestionHeader";

type Props = {
  index: number;
  id: string;
  isRequired: boolean;
  type: string;
  title: string;
  options: Option[] | null;
  answer: string;
  questionMethod: QuestionMethodType;
};

function QuestionItem({
  index,
  id,
  isRequired,
  type,
  title,
  options,
  answer,
  questionMethod,
}: Props) {
  return (
    <QuestionItemWrap>
      <img src="/drag-icon.svg" alt="드래그 아이콘" />
      <QuestionHeader
        index={index}
        id={id}
        type={type}
        isRequired={isRequired}
        questionMethod={questionMethod}
      ></QuestionHeader>
      <QuestionBody
        id={id}
        type={type}
        title={title}
        options={options}
        answer={answer}
        questionMethod={questionMethod}
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
