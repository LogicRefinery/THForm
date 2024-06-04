import { Question } from "./../../model/survey";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Survey } from "../../model/survey";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

const initialState: Survey = {
  id: uuidv4(),
  title: "기본 설문 입니다.",
  description: "설문에 대한 설명을 입력하는 란 입니다.",
  questions: [
    {
      id: uuidv4(),
      isRequired: true,
      question: "1번 질문입니다.",
      type: "shortSubjective",
      answer: "단문형 or 장문형에 대한 답변입니다.",
    },
  ],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      // state.value1 += action.payload;
      // state.value2 += action.payload;
      // state.value3 += action.payload;
    },
  },
});

export const { add } = surveySlice.actions;

export const selectSurvey = (state: RootState) => state.survey;

export default surveySlice.reducer;
