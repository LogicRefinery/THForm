import React, { useRef, useState } from "react";
import SurveyItem from "../components/surveyItem/SurveyItem";

function SurveyContainer() {
  const [surveyCount, setSurveyCount] = useState<number[]>([1]);

  // [{ 이 형태로 바꿀것.
  //   id:'ddd',

  // }]

  const [activeSurvey, setActiveSurvey] = useState<number>(0);

  const addSurvey = () => {
    setSurveyCount([...surveyCount, surveyCount.length + 1]);
  };

  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  const dragStart = (idx: number) => {
    dragItem.current = idx;
    setActiveSurvey(idx + 1);
  };
  const dragEnter = (idx: number) => {
    dragOverItem.current = idx;
  };
  const drop = () => {
    const copyListItems = [...surveyCount]; //배열 상태 복사

    const dragItemContent = copyListItems[dragItem.current]; //드래그 되고있는 listItem

    copyListItems.splice(dragItem.current, 1); //드래그 되고있는 요소를 배열에서 삭제

    copyListItems.splice(dragOverItem.current, 0, dragItemContent); //드래그 되고있는 요소를 내가 놓은 요소 다음에 추가

    dragItem.current = 0; //값 초기화
    dragOverItem.current = 0; //값 초기화

    setSurveyCount(copyListItems); // 새로운 리스트로 변경 : 리렌더링 일어남
  };

  return (
    <>
      <input type="text" id="title"></input>
      <label htmlFor="title">폼 제목</label>

      <input type="text" id="description"></input>
      <label htmlFor="description">폼 설명</label>

      <ul>
        {surveyCount.map((listNum: number, index: number) => (
          <li
            key={listNum}
            draggable
            onDragStart={() => dragStart(index)}
            onDragEnter={() => dragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={drop}
            className={activeSurvey === listNum ? "active" : undefined}
            onClick={() => {
              setActiveSurvey(listNum);
            }}
          >
            <SurveyItem index={index + 1}></SurveyItem>
          </li>
        ))}
      </ul>

      <button onClick={addSurvey}>항목추가</button>
    </>
  );
}

export default SurveyContainer;
