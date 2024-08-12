export type Todo = {
  id: number
  title: string
  description: string
  priority: 'normal' | 'importante' | 'urgente'
  status: 'pendente' | 'finalizada'
}
