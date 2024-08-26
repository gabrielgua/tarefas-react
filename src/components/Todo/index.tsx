import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { edit, finish, remove } from '../../store/reducers/todos'
import { Todo as TodoType } from '../../types/todo.type'
import {
  TodoActions,
  TodoBtn,
  TodoBtnDanger,
  TodoBtnSave,
  TodoCard,
  TodoContent,
  TodoDescription,
  TodoTag,
  TodoTitle
} from './styles'
import { TodoStatus } from '../../types/todo.enum'

const Todo = ({ id, title, status, priority, description }: TodoType) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [desc, setDesc] = useState(description)

  function save(todo: TodoType) {
    dispatch(edit(todo))
    setIsEditing(false)
  }

  function cancel() {
    setIsEditing(false)
    setDesc(description)
  }

  function markAsFinished(event: ChangeEvent<HTMLInputElement>) {
    dispatch(finish({ id, done: event.target.checked }))
  }

  return (
    <TodoCard>
      <TodoContent>
        <label htmlFor={title}>
          <input
            type="checkbox"
            id={title}
            onChange={markAsFinished}
            checked={status === TodoStatus.FINALIZADA}
          />
          <TodoTitle>
            {isEditing && <em>Editando: </em>}
            {title}
          </TodoTitle>
        </label>
        <TodoTag $priority={priority}>{priority}</TodoTag>
        <TodoTag $status={status}>{status}</TodoTag>
        <TodoDescription
          disabled={!isEditing}
          autoFocus={isEditing}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </TodoContent>
      <TodoActions>
        {isEditing ? (
          <>
            <TodoBtnSave
              onClick={() => save({ id, description, priority, status, title })}
            >
              Salvar
            </TodoBtnSave>
            <TodoBtnDanger onClick={cancel}>Cancelar</TodoBtnDanger>
          </>
        ) : (
          <>
            <TodoBtn onClick={() => setIsEditing(true)}>Editar</TodoBtn>
            <TodoBtnDanger onClick={() => dispatch(remove(id))}>
              Remover
            </TodoBtnDanger>
          </>
        )}
      </TodoActions>
    </TodoCard>
  )
}

export default Todo
