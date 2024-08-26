import styled from 'styled-components'
import vars from '../../styles/vars'
import { Button, OutlineHoverButton } from '../../styles'

export const Circle = styled(Button)`
  --clr: ${vars.green};
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 32px;
  font-weight: normal;
`
