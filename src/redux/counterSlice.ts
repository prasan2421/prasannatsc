import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// Define a type for the slice state
interface CounterState {
  value: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
}

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value = true
    },
    decrement: (state) => {
      state.value = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {actions, reducer}= counterSlice;

// export const { increment, decrement } = counterSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer