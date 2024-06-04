import React, { useRef, useState } from "react";
import QuestionItem from "../components/questionItem/QuestionItem";
import { Questions, QuestionType } from "../model/survey";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";

function QuestionContainer() {
  const [questions, setQuestions] = useState<Questions>([
    {
      id: uuidv4(),
      isRequired: true,
      question: "",
      type: "multiple",
      answer: [],
      options: [
        { id: "1dad", option: "첫번째냐 ?", checked: false },
        { id: "2dada", option: "두번째냐 ?", checked: false },
      ],
    },
  ]);

  const [title, setTitle] = useState<string>(""); //폼 제목
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const [description, setDescription] = useState<string>(""); //폼 설명
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onSelectedChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const clone = questions.map((question: QuestionType) =>
      question.id === id
        ? ({ ...question, type: e.target.value } as QuestionType)
        : question
    );

    if (clone) setQuestions(clone);
  };

  const answerChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => {
    const clone = questions.map((question: QuestionType) =>
      question.id === id
        ? ({ ...question, answer: e.target.value } as QuestionType)
        : question
    );
    setQuestions(clone);
  };

  const onClone = (id: string) => {
    const clone = questions.find((question) => question.id === id);
    if (clone) setQuestions([...questions, { ...clone, id: uuidv4() }]);
  };

  const onRemove = (id: string) => {
    setQuestions(
      questions.filter((question: QuestionType) => question.id !== id)
    );
  };

  const onAdd = () => {
    setQuestions([
      ...questions,
      {
        id: uuidv4(),
        isRequired: true,
        question: "",
        type: "shortSubjective",
        answer: "",
      },
    ]);
  };
  const [activeQuestion, setActiveQuestion] = useState<string>("");

  //--------------------- 드래그 이벤트
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  const dragStart = (idx: number, id: string) => {
    dragItem.current = idx;
    setActiveQuestion(id);
  };
  const dragEnter = (idx: number) => {
    dragOverItem.current = idx;
  };

  const drop = () => {
    const copyListItems = [...questions]; //배열 상태 복사
    const dragItemContent = copyListItems[dragItem.current]; //드래그 되고있는 listItem
    copyListItems.splice(dragItem.current, 1); //드래그 되고있는 요소를 배열에서 삭제
    copyListItems.splice(dragOverItem.current, 0, dragItemContent); //드래그 되고있는 요소를 내가 놓은 요소 다음에 추가
    dragItem.current = 0; //값 초기화
    dragOverItem.current = 0; //값 초기화
    setQuestions(copyListItems); // 새로운 리스트로 변경 : 리렌더링 일어남
  };

  //--------------------- 드래그 이벤트

  return (
    <FormWrap>
      <FormHeader>
        <FormHeaderContent>
          <label htmlFor="title">캐치폼 제목</label>
          <p>캐치폼의 상단과 링크 공유 시 노출됩니다.</p>
          <input
            type="text"
            id="title"
            onChange={onChangeTitle}
            value={title}
            placeholder="제목을 입력하세요"
          ></input>
        </FormHeaderContent>
        <FormHeaderContent>
          <label htmlFor="description">캐치폼 본문</label>
          <p>캐치폼의 본문 내용을 편집할 수 있습니다.</p>
          <input
            type="text"
            id="description"
            onChange={onChangeDescription}
            value={description}
          ></input>
        </FormHeaderContent>
      </FormHeader>
      <FormBody>
        <ul>
          {questions.map((item: QuestionType, index: number) => {
            return (
              <li
                key={item.id}
                draggable
                onDragStart={() => dragStart(index, item.id)}
                onDragEnter={() => dragEnter(index)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={drop}
                className={activeQuestion === item.id ? "active" : undefined}
                onClick={() => {
                  setActiveQuestion(item.id);
                }}
              >
                <QuestionItem
                  index={index + 1}
                  id={item.id}
                  onRemove={onRemove}
                  onClone={onClone}
                  type={item.type}
                  onSelectedChange={onSelectedChange}
                  answer={item.answer}
                  answerChange={answerChange}
                ></QuestionItem>
              </li>
            );
          })}
        </ul>
      </FormBody>
      <FormFooter>
        <button onClick={onAdd}>항목추가</button>
      </FormFooter>
    </FormWrap>
  );
}

const FormWrap = styled.div`
  width: 50%;
`;
const FormHeader = styled.div``;
const FormHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  padding: 24px;
  label {
    font-size: 16px; // 라벨에 대한 스타일
    color: #333;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px; // 문단에 대한 스타일
    color: #666;
    margin-bottom: 12px;
  }

  input {
    font-size: 14px; // 입력 필드에 대한 스타일
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  margin-bottom: 30px;
`;

const FormBody = styled.div`
  ul {
    li {
      margin-bottom: 30px;
    }
  }
`;
const FormFooter = styled.div``;
export default QuestionContainer;
