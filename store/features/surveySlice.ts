import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SurveyState {
  answers: {
    [key: string]: {
      question: string;
      answer: string;
    };
  };
}

interface SetAnswerPayload {
  questionId: string;
  question: string;
  answer: string;
}

const initialState: SurveyState = { answers: {} };

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
      state.answers[action.payload.questionId] = {
        question: action.payload.question,
        answer: action.payload.answer,
      };
    },
  },
});

export const { setAnswer } = surveySlice.actions;
export default surveySlice.reducer;
