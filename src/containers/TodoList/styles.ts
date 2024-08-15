import styled from 'styled-components'

export const TodoListContainer = styled.main`
  height: 100dvh;
  overflow-y: scroll;
`

export const TodoListTitle = styled.h1`
  padding: 1.5rem 2rem;
  font-weight: bold;
  color: #1e90ff;
  font-size: 32px;
  display: block;
  position: sticky;
  top: 0;
  background-color: #fcfcfc;
  box-shadow: 0px 7px 55px 0px rgba(100, 100, 111, 0.1);
`

export const TodoListContent = styled.div`
  padding: 2rem;
`

export const ActiveFilterDescription = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const ActiveFilterTags = styled.div`
  margin-bottom: 1rem;
`

export const ActiveFilterTag = styled.span`
  background-color: #e5e5e5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 12px;
  margin-right: 0.5rem;
  font-weight: bold;
`

export const ActiveFilterText = styled.span`
  font-size: 13px;
  margin-right: 0.25rem;
`
