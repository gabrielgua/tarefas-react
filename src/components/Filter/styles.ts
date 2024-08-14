import styled from 'styled-components'

type Props = {
  active: boolean
}

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: none;
  background-color: #fcfcfc;
  border-radius: 0.5rem;
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  outline-offset: ${(props) => (props.active ? '2px' : '0')};
  outline-width: ${(props) => (props.active ? '3px' : '0')};
  outline-color: ${(props) => (props.active ? '#1e90ff' : '#fcfcfc')};
  outline-style: solid;

  cursor: pointer;
  transition: all 50ms ease;

  &:hover {
    outline-width: 3px;
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
