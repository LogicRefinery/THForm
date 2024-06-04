import React from "react";

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
    <div>
      <label htmlFor="shortAnswer">단문형 답변 (200자 이내)</label>
      <input
        type="text"
        id="shortAnswer"
        value={answer}
        onChange={(e) => {
          answerChange(e, id);
        }}
        maxLength={200}
        placeholder="200자 이내로 입력하세요."
      />
    </div>
  );
}

export default ShortSubjective;
