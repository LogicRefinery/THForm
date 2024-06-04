import React from "react";

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
    <div>
      <label htmlFor="longAnswer">장문형 답변 (1000자 이내)</label>
      <textarea
        id="longAnswer"
        value={answer}
        onChange={(e) => {
          answerChange(e, id);
        }}
        maxLength={1000}
        placeholder="1000자 이내로 입력하세요."
      />
    </div>
  );
}

export default LongSubjective;
