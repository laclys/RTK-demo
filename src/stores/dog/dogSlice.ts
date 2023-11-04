import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { fetchDogRandom } from '../../api/dogAPI'

export interface DogState {
  url: string
  status: 'idle' | 'loading' | 'failed'
}

const initialState: DogState = {
  url: '',
  status: 'idle',
}

export const fetchDogAsync = createAsyncThunk(
  'dog/fetch',
  async () => {
    const response = await fetchDogRandom()
    return response
  }
)

export const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDogAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.url = action.payload?.message || ''
      })
      .addCase(fetchDogAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const selectDog = (state: RootState) => state.dog

export default dogSlice.reducer
