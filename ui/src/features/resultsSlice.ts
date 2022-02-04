import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';
import resultsApi from './resultsApi';
import { RankedResult, UnrankedResult } from './types';

export interface ResultsState {
  data: RankedResult[]
}

export const INITIAL_STATE: ResultsState = {
  data: resultsApi.getResults()
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState: INITIAL_STATE,
  reducers: {
    addResult: (state, action: PayloadAction<UnrankedResult>) => {
      resultsApi.addResult(action.payload)

      state.data = resultsApi.getResults()
    }
  }
})

export const selectResults = (state: RootState) => state.results

export const { addResult } = resultsSlice.actions

export default resultsSlice.reducer