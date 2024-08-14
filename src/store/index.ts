import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/todos'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
