import axios from "axios";
import React from "react";
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
        const isConfirmed = window.confirm("정말로 이 폼을 삭제하시겠습니까?");
        if (isConfirmed) {
          afterSubmitSuccess();
          alert(`\"${title}\" 폼이 삭제되었습니다.`);
        }
      } else {
        throw new Error("폼 삭제중 에러가 발생했습니다.");
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
        <TitleArea>
          <TitleAreaInner>
            <span>{index + 1}.</span>
            <span>{title}</span>
          </TitleAreaInner>
        </TitleArea>
        <DescArea>
          <Desc>{description}</Desc>
        </DescArea>
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
  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  border-radius: 5px;
`;
const TitleArea = styled.div`
  width: 100%;
  display: block;
  gap: 4px;
  font-weight: 800;
  font-size: 18px;
  height: 24px;
  position: relative;
`;

const TitleAreaInner = styled.div`
  width: 100%;
  display: block;
  gap: 4px;
  font-weight: 800;
  font-size: 19px;
  height: 24px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
`;

const DescArea = styled.div`
  width: 100%;
  position: relative;
  height: 20px;
`;
const Desc = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  left: 0;
  top: 0;
  height: 20px;
  line-height: 20px;
`;
const SurveyHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;
const SurveyBody = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.input.attrs({ type: "button" })`
  color: #007bff;
  width: 100%;
  padding: 8px 12px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  background: white;
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
