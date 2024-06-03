import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { SurveyState } from "../../model/survey";
import type { RootState } from "../store";

const initialState: any = [
  {
    id: 1,
    title: "폼 전체 제목입니다.",
    description: "본문내용 입니다.",
    questions: [
      {
        id: 1,
        isRequired: true,
        questionText: "What is your name?",
        answerType: 1,
        answer: ["답변이 들어있는 배열"],
      },
    ],
  },
];

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
