import styled from 'styled-components'
import { FilterProps } from '.'

export const Card = styled.div<FilterProps>`
  padding: 0.5rem;
  border: none;
  background-color: #fcfcfc;
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 0.5rem;
  cursor: pointer;
  outline: 1px solid ${(props) => (props.active ? '#1e90ff' : '#fcfcfc')};
  transition: all 50ms ease;

  &:hover {
    outline: ${(props) =>
      props.active ? '1px solid #1e90ff' : '3px solid #fcfcfc'};
  }
`

export const Count = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.div`
  font-size: 14px;
`
