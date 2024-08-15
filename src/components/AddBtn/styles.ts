import styled from 'styled-components'
import vars from '../../styles/vars'

export const Circle = styled.button`
  --clr: #44bd32;
  width: 55px;
  height: 55px;
  background-color: var(--clr);
  color: white;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 32px;
  cursor: pointer;
  border: none;
  transition: all 50ms ease;
  outline-width: 0px;
  outline-style: solid;
  outline-color: var(--clr);

  &:hover {
    outline-width: 3px;
  }

  &:focus {
    outline-offset: 2px;
  }
`
