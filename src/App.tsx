import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import GlobalStyles, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
