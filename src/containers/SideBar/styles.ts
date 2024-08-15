import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: #eee;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Logo = styled.h2`
  font-weight: bold;
  font-style: italic;
  color: #666666;
  font-size: 26px;
  display: block;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
