import TodoComponent from '../../components/Todo'
import { Todo } from '../../types/todo.type'
import {
  ActiveFilterDescription,
  TodoListContainer,
  TodoListContent,
  TodoListTitle
} from './styles'

const todos: Todo[] = [
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

const TodoList = () => (
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

export default TodoList
