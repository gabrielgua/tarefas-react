import styled from 'styled-components'
import { TodoPriority } from '../../types/todo.enum'
import vars from '../../styles/vars'

type PriorityItemProps = {
  $priority: TodoPriority
  selected?: boolean
}

const getColor = (props: PriorityItemProps) => {
  if (props.$priority === TodoPriority.IMPORTANTE) return vars.secondaryYellow
  else if (props.$priority === TodoPriority.URGENTE) return vars.red
  return vars.gray
}

export const TodoForm = styled.form`
  width: min(500px, 100%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PriorityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
`

export const PriorityTitle = styled.p`
  width: 100%;
  font-size: 13px;
  color: #666666;
  font-weight: bold;
`

export const PriorityItem = styled.div<PriorityItemProps>`
  --clr: ${(props) => getColor(props)};
  --clr-opacity: 0.2;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: rgba(var(--clr), var(--clr-opacity));
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;

  outline-color: ${(props) =>
    props.selected ? 'rgba(var(--clr), var(--clr-opacity))' : 'transparent'};
  outline-width: ${(props) => (props.selected ? '2px' : '0px')};
  outline-style: solid;
  outline-offset: ${(props) => (props.selected ? '2px' : '0px')};

  transition: all 50ms ease;

  &:hover {
    outline-width: 2px;
    outline-color: rgba(var(--clr), var(--clr-opacity));
  }
`

export const PriorityLabel = styled.label`
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  color: rgb(var(--clr));
`

export const PriorityInputRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: 2px solid white;
  outline: 1px solid rgb(var(--clr));
  transition: all 50ms ease;
  width: 12px;
  height: 12px;
  background-color: #fff;

  &:checked {
    background-color: rgb(var(--clr));
  }
`

export const FormBtn = styled.button`
  --clr: ${vars.green};
  border: none;
  background-color: rgb(var(--clr));
  padding: 0.5rem 0.75rem;
  width: max-content;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 50ms ease;

  &:hover {
    outline: 2px solid rgb(var(--clr));
    transition: all 50ms ease;
  }

  &:focus {
    outline-offset: 2px;
  }
`
