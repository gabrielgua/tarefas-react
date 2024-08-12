import Filter from '../../components/Filter'
import { Aside, Filters, Input, Logo } from './styles'

const SideBar = () => (
  <Aside>
    <Logo>Tarefas</Logo>
    <Input type="text" placeholder="Buscar" />
    <Filters>
      <Filter />
      <Filter />
      <Filter />
      <Filter active />
      <Filter />
      <Filter />
    </Filters>
  </Aside>
)

export default SideBar
