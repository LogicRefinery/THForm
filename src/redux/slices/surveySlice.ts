import { Question, Survey, Surveys } from "./../../model/survey";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

const initialState: Surveys = [
  {
    id: uuidv4(),
    surveyTitle: "기본 설문 입니다.",
    description: "설문에 대한 설명을 입력하는 란 입니다.",
    questions: [
      {
        id: uuidv4(),
        isRequired: true,
        title: "1번 질문입니다.",
        type: "shortSubjective",
        answer: "단문형 or 장문형에 대한 답변입니다.",
        options: null,
      },
    ],
  },
];

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Survey>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((survey) => survey.id !== action.payload);
    },
    modify: (state, action: PayloadAction<Survey>) => {
      return state.map((survey) =>
        survey.id === action.payload.id ? action.payload : survey
      );
    },
  },
});

export const { add, remove, modify } = surveySlice.actions;

export const selectSurvey = (state: RootState) => state.survey;

export default surveySlice.reducer;
