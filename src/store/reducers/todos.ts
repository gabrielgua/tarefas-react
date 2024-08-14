import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
      priority: 'normal',
      status: 'pendente'
    },
    {
      id: 2,
      title: 'Ir pra academia',
      description: 'Hoje é treino de costas e bíceps',
      priority: 'urgente',
      status: 'pendente'
    },
    {
      id: 3,
      title: 'Pagar a conta de internet',
      description: 'Baixar a fatura do gmail',
      priority: 'importante',
      status: 'finalizada'
    }
  ]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const { remove } = todosSlice.actions
export default todosSlice.reducer
