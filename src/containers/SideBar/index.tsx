import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../components/Filter'
import { RootReducer } from '../../store'
import { editTerm } from '../../store/reducers/filter'
import { Input } from '../../styles'
import { TodoPriority, TodoStatus } from '../../types/todo.enum'
import { Aside, Filters, HomeButton, Logo } from './styles'
import { useNavigate } from 'react-router-dom'

type SideBarProps = {
  filters: boolean
}

const SideBar = ({ filters }: SideBarProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const term = useSelector((state: RootReducer) => state.filter.term)

  return (
    <Aside>
      <Logo>tarefasApp</Logo>
      {!filters ? (
        <HomeButton onClick={() => navigate('/')}>Voltar à home</HomeButton>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Buscar"
            value={term}
            onChange={(e) => dispatch(editTerm(e.target.value))}
          />
          <Filters>
            <Filter
              value={TodoStatus.PENDENTE}
              type="status"
              title="pendetes"
            />
            <Filter
              value={TodoStatus.FINALIZADA}
              type="status"
              title="finalizadas"
            />
            <Filter
              value={TodoPriority.URGENTE}
              type="priority"
              title="urgentes"
            />
            <Filter
              value={TodoPriority.IMPORTANTE}
              type="priority"
              title="importantes"
            />
            <Filter
              value={TodoPriority.NORMAL}
              type="priority"
              title="normal"
            />
            <Filter type="all" title="todas" />
          </Filters>
        </>
      )}
    </Aside>
  )
}

export default SideBar
