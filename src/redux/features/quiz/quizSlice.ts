import { quizData } from '@/home/questionData'
import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  questions: QuizQuestion[];
}

// Define the initial state using that type
const initialState: QuizState = {
  questions : quizData
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {}
})

export default quizSlice.reducer