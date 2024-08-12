import Filter from '../../components/Filter'
import { Aside, Filters, Input, Logo } from './styles'

const SideBar = () => (
  <Aside>
    <Logo>tarefasApp</Logo>
    <Input type="text" placeholder="Buscar" />
    <Filters>
      <Filter count={1} title="pendetes" />
      <Filter count={2} title="concluídas" />
      <Filter count={5} title="urgentes" />
      <Filter count={6} title="importantes" active />
      <Filter count={4} title="normal" />
      <Filter count={9} title="todas" />
    </Filters>
  </Aside>
)

export default SideBar
