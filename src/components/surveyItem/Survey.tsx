import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Questions } from "../../model/survey";
import { useAppDispatch } from "../../redux/hooks";
import { remove } from "../../redux/slices/surveySlice";
type Props = {
  id: string;
  index: number;
  title: string;
  description: string;
  questions: Questions;
};

function Survey({ id, index, title, description, questions }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const afterSubmitSuccess = () => {
    dispatch(remove(id));
  };

  const onRemove = async () => {
    try {
      const response = await axios.post("/api/survey");
      if (response) {
        const isConfirmed = window.confirm(
          "정말로 이 캐치폼을 삭제하시겠습니까?"
        );
        if (isConfirmed) {
          afterSubmitSuccess();
          alert(`\"${title}\" 캐치폼이 삭제되었습니다.`);
        }
      } else {
        throw new Error("캐치폼 삭제중 에러가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onModify = () => {
    navigate(`/?mode=modify&id=${id}`);
  };

  return (
    <SurveyWrap>
      <SurveyHeader>
        <div>{index + 1}</div>
        <div>{title}</div>
        <div>{description}</div>
      </SurveyHeader>
      <SurveyBody>
        <Button value="수정" onClick={onModify} />
        <Button value="삭제" onClick={onRemove} />
      </SurveyBody>
    </SurveyWrap>
  );
}
export default Survey;

const SurveyWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
  width: 50%;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  border-radius: 5px;
`;

const SurveyHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
`;
const SurveyBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.input.attrs({ type: "button" })`
  padding: 8px 16px;
  margin-right: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
