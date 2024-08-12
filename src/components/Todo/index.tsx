import { useState } from 'react'
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

type TodoProps = {
  title: string
  priority: string
  status: string
  description: string
}

const Todo = ({ title, status, priority, description }: TodoProps) => {
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
            <TodoBtnDanger>Remover</TodoBtnDanger>
          </>
        )}
      </TodoActions>
    </TodoCard>
  )
}

export default Todo
