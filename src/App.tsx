import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import GlobalStyles, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </>
  )
}

export default App
