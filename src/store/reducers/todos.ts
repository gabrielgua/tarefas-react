import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'
import { Todo } from '../../types/todo.type'

type TodoState = {
  items: Todo[]
}

const initialState: TodoState = {
  items: [
    {
      id: 1,
      title: 'Estudar Typescript',
      description: 'Assistir a aula da EBAC sobre typescrit às 19h',
      priority: TodoPriority.NORMAL,
      status: TodoStatus.PENDENTE
    },
    {
      id: 2,
      title: 'Ir pra academia',
      description: 'Hoje é treino de costas e bíceps',
      priority: TodoPriority.URGENTE,
      status: TodoStatus.PENDENTE
    },
    {
      id: 3,
      title: 'Pagar a conta de internet',
      description: 'Baixar a fatura do gmail',
      priority: TodoPriority.IMPORTANTE,
      status: TodoStatus.FINALIZADA
    }
  ]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((todo) => todo.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload
      const todoIndex = state.items.findIndex((t) => t.id === todo.id)
      if (todoIndex >= 0) {
        state.items[todoIndex].description = todo.description
      }
    },
    save: (state, action: PayloadAction<Todo>) => {
      const last = state.items[state.items.length - 1]
      const todo = {
        ...action.payload,
        id: last ? last.id + 1 : 1
      }
      state.items.push(todo)
    },
    finish: (state, action: PayloadAction<{ id: number; done: boolean }>) => {
      const todoIndex = state.items.findIndex((t) => t.id === action.payload.id)
      if (todoIndex >= 0) {
        state.items[todoIndex].status = action.payload.done
          ? TodoStatus.FINALIZADA
          : TodoStatus.PENDENTE
      }
    }
  }
})

export const { remove, edit, save, finish } = todosSlice.actions
export default todosSlice.reducer
