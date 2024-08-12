import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: #eee;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Logo = styled.h1`
  font-weight: bold;
  color: #1e90ff;
  font-size: 32px;
  display: block;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  outline: 1px solid #fff;
  border: none;
  width: 100%;
  transition: all 50ms ease;

  &:focus,
  &:hover {
    outline-width: 3px;
  }

  &:focus {
    outline-offset: 2px;
    outline-color: #666666;
  }
`
