import React from "react";

function Single() {
  return (
    <div>
      <label>객관식 답변 (단수 선택)</label>
      <div>
        <input type="radio" name="singleChoice" id="option1" />
        <label htmlFor="option1">선택사항 1</label>
      </div>
    </div>
  );
}

export default Single;
