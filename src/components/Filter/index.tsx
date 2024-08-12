import { Card, Count, Label } from './styles'

export type FilterProps = {
  active?: boolean
}

const Filter = (props: FilterProps) => (
  <Card active={props.active}>
    <Count>3</Count>
    <Label>pendente</Label>
  </Card>
)

export default Filter
