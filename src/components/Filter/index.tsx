import { Card, Count, Label } from './styles'

export type FilterProps = {
  count: number
  title: string
  active?: boolean
}

const Filter = ({ count, title, active }: FilterProps) => (
  <Card active={active}>
    <Count>{count}</Count>
    <Label>{title}</Label>
  </Card>
)

export default Filter
