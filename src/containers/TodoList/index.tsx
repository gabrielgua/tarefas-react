import { useSelector } from 'react-redux'
import TodoComponent from '../../components/Todo'
import { RootReducer } from '../../store'
import {
  ActiveFilterDescription,
  TodoListContainer,
  TodoListContent,
  TodoListTitle
} from './styles'

const TodoList = () => {
  const todos = useSelector((state: RootReducer) => state.todos.items)

  return (
    <TodoListContainer>
      <TodoListTitle>Suas tarefas</TodoListTitle>
      <TodoListContent>
        <ActiveFilterDescription>
          2 tarefas marcadas com &quot;termo&ldquo;
        </ActiveFilterDescription>
        <ul>
          {todos.map((todo) => (
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
