import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducers/todos'
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

  return (
    <TodoCard>
      <TodoContent>
        <TodoTitle>{title}</TodoTitle>
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
