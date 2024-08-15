import { FormEvent, useState } from 'react'
import {
  ScrollContainer,
  ContentHeader,
  ContentContainer,
  Input
} from '../../styles'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'
import {
  TodoForm,
  PriorityInputRadio,
  PriorityContainer,
  PriorityItem,
  PriorityTitle,
  PriorityLabel,
  FormBtn
} from './styles'
import { useDispatch } from 'react-redux'
import { Todo } from '../../types/todo.type'
import { useNavigate } from 'react-router-dom'
import { save } from '../../store/reducers/todos'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<TodoPriority>(TodoPriority.NORMAL)

  function submit(event: FormEvent) {
    event.preventDefault()
    const todo: Todo = {
      title,
      description,
      priority,
      status: TodoStatus.PENDENTE,
      id: 10
    }

    dispatch(save(todo))
    navigate('/')
  }

  return (
    <ScrollContainer>
      <ContentHeader>Nova tarefa</ContentHeader>
      <ContentContainer>
        <TodoForm onSubmit={submit}>
          <Input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            type="text"
            $secondary={true}
            placeholder="Título da tarefa"
          />
          <Input
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            as="textarea"
            $secondary={true}
            placeholder="Descrição da tarefa"
          ></Input>

          <PriorityContainer>
            <PriorityTitle>Prioridade</PriorityTitle>

            {Object.values(TodoPriority).map((p) => (
              <PriorityItem key={p} $priority={p} selected={p === priority}>
                <PriorityInputRadio
                  value={p}
                  onChange={({ target }) =>
                    setPriority(target.value as TodoPriority)
                  }
                  name="priority"
                  type="radio"
                  id={p}
                  defaultChecked={p === TodoPriority.NORMAL}
                />
                <PriorityLabel htmlFor={p}>{p}</PriorityLabel>
              </PriorityItem>
            ))}
          </PriorityContainer>

          <FormBtn type="submit">Cadastrar</FormBtn>
        </TodoForm>
      </ContentContainer>
    </ScrollContainer>
  )
}

export default Form
