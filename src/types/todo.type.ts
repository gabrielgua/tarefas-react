import { TodoPriority, TodoStatus } from './todo.enum'

export type Todo = {
  id: number
  title: string
  description: string
  priority: TodoPriority
  status: TodoStatus
}
