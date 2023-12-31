import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice'
import dogReducer from './dog/dogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dog: dogReducer,
  },
})

export default store

// type

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
