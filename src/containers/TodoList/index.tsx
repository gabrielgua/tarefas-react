import { useSelector } from 'react-redux'
import TodoComponent from '../../components/Todo'
import { RootReducer } from '../../store'
import {
  ActiveFilterText,
  ActiveFilterTag,
  ActiveFilterTags,
  TodoListContainer,
  TodoListContent,
  TodoListTitle
} from './styles'

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

  const filteredTodos = filterTodos()

  return (
    <TodoListContainer>
      <TodoListTitle>Suas tarefas</TodoListTitle>
      <TodoListContent>
        <ActiveFilterTags>
          <ActiveFilterText>Filtros: </ActiveFilterText>
          {filter.value && <ActiveFilterTag>{filter.value}</ActiveFilterTag>}
          {filter.term && (
            <ActiveFilterTag>&quot;{filter.term}&ldquo;</ActiveFilterTag>
          )}
          <ActiveFilterText>
            {filteredTodos.length}{' '}
            {filteredTodos.length === 1 ? 'tarefa' : 'tarefas'}.
          </ActiveFilterText>
        </ActiveFilterTags>
        <ul>
          {filteredTodos.map((todo) => (
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
