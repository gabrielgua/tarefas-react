import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'

type FilterState = {
  term?: string
  type: 'priority' | 'status' | 'all'
  value?: TodoPriority | TodoStatus
}

const initialState: FilterState = {
  term: '',
  type: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    editTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    editFilter: (state, action: PayloadAction<FilterState>) => {
      state.type = action.payload.type
      state.value = action.payload.value
    }
  }
})

export const { editTerm, editFilter } = filterSlice.actions
export default filterSlice.reducer
