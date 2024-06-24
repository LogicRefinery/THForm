import React, { useEffect, useRef, useState } from "react";
import QuestionItem from "../components/questionItem/QuestionItem";
import { Questions, QuestionType } from "../model/survey";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";
import { Option } from "../model/survey";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { add, modify } from "../redux/slices/surveySlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSurvey } from "../redux/slices/surveySlice";

function QuestionContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const surveyId = searchParams.get("id");
  const surveys = useSelector(selectSurvey);
  const survey = surveys.find((item) => {
    return item.id === surveyId;
  });

  const [questions, setQuestions] = useState<Questions>([
    {
      id: uuidv4(),
      isRequired: true,
      title: "",
      type: "shortSubjective",
      answer: "",
      options: null,
    },
  ]);

  const [surveyTitle, setSurveyTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyTitle(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (mode === "modify" && survey) {
      setSurveyTitle(survey.surveyTitle);
      setDescription(survey.description);
      setQuestions(survey.questions);
    } else {
      setSurveyTitle("");
      setDescription("");
      setQuestions([
        {
          id: uuidv4(),
          isRequired: true,
          title: "",
          type: "shortSubjective",
          answer: "",
          options: null,
        },
      ]);
    }
  }, [mode, survey]);

  const [loading, setLoading] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<string>("");

  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const dragOptionItem = useRef<number>(0);
  const dragOptionOverItem = useRef<number>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onAdd = () => {
    setQuestions([
      ...questions,
      {
        id: uuidv4(),
        isRequired: true,
        title: "",
        type: "shortSubjective",
        answer: "",
        options: null,
      },
    ]);
  };
  const afterSuccess = () => {
    if (mode === "modify" && survey) {
      dispatch(
        modify({
          id: survey.id,
          surveyTitle,
          description,
          questions: questions,
        })
      );
      return null;
    }

    dispatch(
      add({ id: uuidv4(), surveyTitle, description, questions: questions })
    );
  };

  const onSubmit = async () => {
    if (!surveyTitle) {
      alert("제목을 입력하세요.");
      return;
    }

    if (!description) {
      alert("본문을 입력하세요.");
      return;
    }

    const isValidatePass = questions.every((item) => {
      const optionCase = ["multiple", "single"].includes(item.type);
      if (optionCase) {
        const hasAllTitle =
          item.options && optionCase
            ? item.options.every((item) => (item.option ? true : false))
            : false;
        if (!item.title) {
          alert("비어있는 질문 제목이 있습니다.");
          return false;
        }
        if (!hasAllTitle) {
          alert("비어있는 선택항목이 있습니다.");
          return false;
        }

        return true;
      } else {
        if (!item.title) alert("비어있는 제목이 있습니다.");
        return item.title ? true : false;
      }
    });

    if (isValidatePass) {
      setLoading(true);
      try {
        const response = await axios.post("/api/survey");
        if (response) {
          afterSuccess();
          alert("폼 작성이 완료되었습니다.");
          navigate("./surveylist");
        } else {
          throw new Error(" 폼 생성중 에러가 발생했습니다.");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const onModify = async () => {
    setLoading(true);
    try {
      const response = await axios.patch("/api/survey");
      if (response) {
        afterSuccess();
        alert(" 폼 수정이 완료되었습니다.");
        navigate("./surveylist");
      } else {
        throw new Error(" 폼 수정중 에러가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const questionMethod = {
    onRequiredChange: (id: string, checked: boolean) => {
      const clone = questions.map((question: QuestionType) =>
        question.id === id
          ? ({ ...question, isRequired: checked } as QuestionType)
          : question
      );
      setQuestions(clone);
    },

    onClone: (id: string) => {
      const clone = questions.find((question) => question.id === id);
      if (clone) setQuestions([...questions, { ...clone, id: uuidv4() }]);
    },
    onRemove: (id: string) => {
      setQuestions(
        questions.filter((question: QuestionType) => question.id !== id)
      );
    },

    onSelectedChange: (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
      const clone = questions.map((question: QuestionType) =>
        question.id === id
          ? ({
              ...question,
              type: e.target.value,
              options:
                e.target.value === "multiple" || e.target.value === "single"
                  ? [{ id: uuidv4(), option: "", checked: false }]
                  : null,
            } as QuestionType)
          : question
      );

      if (clone) setQuestions(clone);
    },

    onQuestionChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const clone = questions.map((question: QuestionType) =>
        question.id === id ? { ...question, title: e.target.value } : question
      );
      setQuestions(clone);
    },
    onAnswerChange: (
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
    },

    onChangeOption: (
      e: React.ChangeEvent<HTMLInputElement>,
      id: string,
      optionId: string
    ) => {
      const clone = questions.map((question: QuestionType) =>
        question.id === id
          ? ({
              ...question,
              options:
                question.options &&
                question.options.map((option) =>
                  option.id === optionId
                    ? { ...option, option: e.target.value }
                    : option
                ),
            } as QuestionType)
          : question
      );

      if (clone) setQuestions(clone);
    },
    onAddOption: (id: string, other?: boolean) => {
      const questionIndex = questions.findIndex(
        (question) => question.id === id
      );
      const hasOtherOption = questions[questionIndex]?.options?.some(
        (option) => option.other
      );

      if (hasOtherOption && other) {
        alert("기타 항목은 하나만 추가할 수 있습니다.");
        return;
      }

      const newOption: Option = {
        id: uuidv4(),
        option: "",
        checked: false,
        ...(other && { other: true }),
      };

      if (hasOtherOption) {
        const clone = [...questions];
        clone[questionIndex].options?.splice(-1, 0, newOption);
        setQuestions(clone);
      } else {
        const clone = questions.map((question: QuestionType) =>
          question.id === id
            ? ({
                ...question,
                options: [...(question.options as Option[]), newOption],
              } as QuestionType)
            : question
        );
        setQuestions(clone);
      }
    },

    onRemoveOption: (id: string, optionId: string) => {
      const clone = questions.map((question: QuestionType) =>
        question.id === id
          ? ({
              ...question,
              options:
                question.options &&
                question.options.filter((option) => option.id !== optionId),
            } as QuestionType)
          : question
      );

      if (clone) setQuestions(clone);
    },
    dragStart: (idx: number, id: string) => {
      dragItem.current = idx;
      setActiveQuestion(id);
    },
    dragEnter: (idx: number) => {
      dragOverItem.current = idx;
    },
    optionDragStart: (idx: number, id: string) => {
      dragOptionItem.current = idx;
      setActiveQuestion(id);
    },
    optionDragEnter: (idx: number) => {
      dragOptionOverItem.current = idx;
    },
    drop: (isOptions?: boolean) => {
      const CopyQuestionListItems = [...questions];

      if (isOptions) {
        const options = CopyQuestionListItems[dragItem.current].options;
        const optionItem = options && options[dragOptionItem.current];
        options && options.splice(dragOptionItem.current, 1);
        options &&
          options.splice(dragOptionOverItem.current, 0, optionItem as Option);
        const hasOther =
          options &&
          options.find((option) => {
            return option.hasOwnProperty("other");
          });

        if (hasOther) {
          const otherIndex = options.findIndex((option) => {
            return option.hasOwnProperty("other");
          });
          options.splice(otherIndex, 1);
          options.splice(options.length, 0, hasOther);
        }
        dragOptionItem.current = 0;
        dragOptionOverItem.current = 0;
      } else {
        const dragItemContent = CopyQuestionListItems[dragItem.current];
        CopyQuestionListItems.splice(dragItem.current, 1);
        CopyQuestionListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = 0;
        dragOverItem.current = 0;
      }

      setQuestions(CopyQuestionListItems);
    },
  };

  return (
    <FormWrap>
      <FormHeader>
        <FormHeaderContent>
          <label htmlFor="surveyTitle"> 폼 제목</label>
          <p> 폼의 상단과 링크 공유 시 노출됩니다.</p>
          <input
            type="text"
            id="surveyTitle"
            onChange={onChangeTitle}
            value={surveyTitle}
            placeholder="제목을 입력하세요"
          ></input>
        </FormHeaderContent>
        <FormHeaderContent>
          <label htmlFor="description"> 폼 본문</label>
          <p> 폼의 본문 내용을 편집할 수 있습니다.</p>
          <input
            type="text"
            id="description"
            placeholder="본문 내용을 입력해 주세요."
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
                onDragStart={() => questionMethod.dragStart(index, item.id)}
                onDragEnter={() => questionMethod.dragEnter(index)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={() => {
                  questionMethod.drop();
                }}
                className={activeQuestion === item.id ? "active" : undefined}
                onClick={() => {
                  setActiveQuestion(item.id);
                }}
              >
                <QuestionItem
                  index={index + 1}
                  id={item.id}
                  isRequired={item.isRequired}
                  title={item.title}
                  type={item.type}
                  options={item.options}
                  answer={item.answer}
                  questionMethod={questionMethod}
                ></QuestionItem>
              </li>
            );
          })}
        </ul>
      </FormBody>
      <FormFooter>
        <AddButton onClick={onAdd} disabled={loading} value="+ 항목 추가하기" />
        <SubmitButton
          value={`${mode === "modify" ? " 폼 수정하기" : " 폼 제출하기"}`}
          disabled={loading}
          onClick={mode === "modify" ? onModify : onSubmit}
        />
      </FormFooter>
    </FormWrap>
  );
}

const FormWrap = styled.div`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
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
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }

  input {
    font-size: 14px;
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
      transition: transform 0.3s;
      &.active {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
          rgba(0, 0, 0, 0.08) 0px 0px 2px 0px,
          rgba(0, 123, 255, 0.4) 0px 0px 20px 0px;
      }
    }
  }
`;
const FormFooter = styled.div`
  margin-bottom: 100px;
`;

const AddButton = styled.input.attrs({ type: "button" })`
  color: #007bff;
  width: 100%;
  padding: 20px 4px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  margin-bottom: 20px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transition: background-color 0.3s ease;
    background: #007bff;
    color: white;
  }
`;

const SubmitButton = styled.input.attrs({ type: "button" })`
  color: white;
  width: 100%;
  padding: 20px 4px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background: #007bff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transition: background-color 0.3s ease;
    background: #007bff;
    color: white;
  }
`;
export default QuestionContainer;
