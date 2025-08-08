import type { RootState } from '@/redux/store'
import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
export interface QuizState {
  value: number
}

// Define the initial state using that type
const initialState: QuizState = {
  value: 0
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {}
})


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default quizSlice.reducer