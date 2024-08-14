import { TodoPriority, TodoStatus } from '../../types/todo.enum'

type FilterState = {
  term: string
  criteria: 'priority' | 'status' | 'all'
  value: TodoPriority | TodoStatus
}
