import React from "react";
import LongSubjective from "./anwerItem/LongSubjective";
import Multiple from "./anwerItem/Multiple";
import ShortSubjective from "./anwerItem/ShortSubjective";
import Single from "./anwerItem/Single";

function QuestionBody({
  id,
  type,
  answer,
  answerChange,
}: {
  id: string;
  type: string;
  answer: any;
  answerChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => void;
}) {
  const renderAnswerComponent = () => {
    switch (type) {
      case "shortSubjective":
        return (
          <ShortSubjective
            answer={answer}
            answerChange={answerChange}
            id={id}
          />
        );
      case "longSubjective":
        return (
          <LongSubjective id={id} answer={answer} answerChange={answerChange} />
        );
      case "multiple":
        return <Multiple />;
      case "single":
        return <Single />;
      default:
        return null;
    }
  };

  return (
    <>
      <label className="sr-only" htmlFor="question">
        질문제목
      </label>
      <input
        type="text"
        placeholder="질문 내용을 200자 이하로 입력해주세요."
        id="question"
      />
      {renderAnswerComponent()}
    </>
  );
}

export default QuestionBody;
