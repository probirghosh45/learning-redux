import { quizData } from "@/home/questionData";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentQuesIndex: number;
  userAnswer: (string | null)[];
  quizComplete: boolean;
}

const initialState: QuizState = {
  questions: quizData,
  currentQuesIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
};


export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
      // console.log(questionIndex,answer)
    },
    nextQuestion: (state) => {
      if (state.currentQuesIndex < state.questions.length - 1) {
        state.currentQuesIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuesIndex > 0) {
        state.currentQuesIndex -= 1;
      }
    },
    completeQuiz : (state) =>{
        state.quizComplete = true
    }
  },
});

export const { setAnswer, nextQuestion , previousQuestion , completeQuiz } = quizSlice.actions;
export default quizSlice.reducer;
