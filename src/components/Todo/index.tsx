import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { Todo as TodoType } from '../../types/todo.type'
import { remove } from '../../store/reducers/todos'

const Todo = ({ id, title, status, priority, description }: TodoType) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  function edit() {
    setIsEditing(true)
  }

  function save() {
    setIsEditing(false)
  }

  return (
    <TodoCard>
      <TodoContent>
        <TodoTitle>{title}</TodoTitle>
        <TodoTag priority={priority}>{priority}</TodoTag>
        <TodoTag status={status}>{status}</TodoTag>
        <TodoDescription value={description} />
      </TodoContent>
      <TodoActions>
        {isEditing ? (
          <>
            <TodoBtnSave onClick={save}>Salvar</TodoBtnSave>
            <TodoBtnDanger>Cancelar</TodoBtnDanger>
          </>
        ) : (
          <>
            <TodoBtn onClick={edit}>Editar</TodoBtn>
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
