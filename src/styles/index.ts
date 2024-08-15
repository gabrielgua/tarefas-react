import styled, { createGlobalStyle } from 'styled-components'

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

export default GlobalStyles
