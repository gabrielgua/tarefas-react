import AddBtn from '../../components/AddBtn'
import SideBar from '../../containers/SideBar'
import TodoList from '../../containers/TodoList'

const Home = () => (
  <>
    <SideBar filters={true} />
    <TodoList />
    <AddBtn />
  </>
)

export default Home
