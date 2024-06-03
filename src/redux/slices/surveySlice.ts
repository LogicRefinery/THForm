import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SurveyState {
  value1: number;
  value2: number;
  value3: number;
}

const initialState: SurveyState = {
  value1: 1,
  value2: 2,
  value3: 3,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value1 += action.payload;
      state.value2 += action.payload;
      state.value3 += action.payload;
    },
  },
});

export const { add } = surveySlice.actions;

export const selectSurvey = (state: RootState) => state.survey;

export default surveySlice.reducer;
