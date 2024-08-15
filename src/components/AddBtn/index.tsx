import { Link } from 'react-router-dom'
import { Circle } from './styles'

const AddBtn = () => (
  <Link to="new">
    <Circle>+</Circle>
  </Link>
)

export default AddBtn
