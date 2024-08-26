import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const ScrollContainer = styled.div`
  height: 100dvh;
  overflow-y: auto;
`

export const ContentContainer = styled.div`
  padding: 2rem;
`

export const ContentHeader = styled.h1`
  padding: 1.5rem 2rem;
  font-weight: bold;
  color: #1e90ff;
  font-size: 24px;
  display: block;
  position: sticky;
  top: 0;
  background-color: #fcfcfc;
  box-shadow: 0px 7px 55px 0px rgba(100, 100, 111, 0.1);
`

type InputProps = {
  $secondary?: boolean
}

export const Input = styled.input<InputProps>`
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  color: #666666;
  outline: 1px solid #fff;
  border: none;
  width: 100%;
  resize: none;
  transition: all 50ms ease;

  background-color: ${(props) => (props.$secondary ? '#eee' : '#fff')};

  &:focus,
  &:hover {
    outline-width: 3px;
    outline-color: ${(props) => (props.$secondary ? '#eee' : '#fff')};
  }

  &:focus {
    outline-offset: 2px;
    outline-color: #666666;
  }
`

export const OutlineHoverButton = styled.button`
  transition: all 50ms ease;
  outline-width: 0;
  outline-color: transparent;
  outline-offset: 0;
  outline-style: solid;

  &:hover {
    outline: 2px solid rgb(var(--clr));
  }

  &:focus {
    outline-offset: 2px;
  }
`
export const Button = styled(OutlineHoverButton)`
  border: none;
  background-color: rgb(var(--clr));
  padding: 0.5rem 0.75rem;
  width: max-content;
  border-radius: 0.75rem;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export default GlobalStyles
