import { useDispatch, useSelector } from 'react-redux'
import { Card, Count, Label } from './styles'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'
import { editFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

type FilterProps = {
  title: string
  type: 'status' | 'priority' | 'all'
  value?: TodoPriority | TodoStatus
}

const Filter = ({ title, type, value }: FilterProps) => {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootReducer) => state.todos)
  const filter = useSelector((state: RootReducer) => state.filter)

  function filterCriteria() {
    dispatch(editFilter({ type, value }))
  }

  function isActive() {
    return filter.type === type && filter.value === value
  }

  function getCount() {
    if (type === 'priority') {
      return todos.items.filter((t) => t.priority === value).length
    }

    if (type === 'status') {
      return todos.items.filter((t) => t.status === value).length
    }

    return todos.items.length
  }

  return (
    <Card $active={isActive()} onClick={filterCriteria}>
      <Count>{getCount()}</Count>
      <Label>{title}</Label>
    </Card>
  )
}

export default Filter
