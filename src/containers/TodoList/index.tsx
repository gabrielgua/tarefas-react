import { useSelector } from 'react-redux'
import TodoComponent from '../../components/Todo'
import { RootReducer } from '../../store'
import {
  ActiveFilterDescription,
  TodoListContainer,
  TodoListContent,
  TodoListTitle
} from './styles'
import { Todo } from '../../types/todo.type'

const TodoList = () => {
  const todos = useSelector((state: RootReducer) => state.todos.items)
  const filter = useSelector((state: RootReducer) => state.filter)

  function filterTodos() {
    let filteredTodos = todos

    filteredTodos = todos.filter(
      (t) => t.title.toLocaleLowerCase().search(filter.term!) >= 0
    )

    if (filter.type === 'all') {
      return filteredTodos
    }

    if (filter.type === 'priority') {
      filteredTodos = filteredTodos.filter((t) => t.priority === filter.value)
      return filteredTodos
    }

    filteredTodos = filteredTodos.filter((t) => t.status === filter.value)
    return filteredTodos
  }

  return (
    <TodoListContainer>
      <TodoListTitle>Suas tarefas</TodoListTitle>
      <TodoListContent>
        <ActiveFilterDescription>
          2 tarefas marcadas com
          {filter.term?.length ? '"' + filter.term + '"' : ''}
        </ActiveFilterDescription>

        <ul>
          {filterTodos().map((todo) => (
            <li key={todo.id}>
              <TodoComponent
                id={todo.id}
                title={todo.title}
                description={todo.description}
                status={todo.status}
                priority={todo.priority}
              />
            </li>
          ))}
        </ul>
      </TodoListContent>
    </TodoListContainer>
  )
}

export default TodoList
