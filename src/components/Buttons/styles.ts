import styled from 'styled-components'
import { colors } from '../../styles'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${colors.lightGray};
    width: 2.4rem;
    height: 2.4rem;
  }

  .editButton {
    &:hover {
      fill: yellow;
    }
  }

  .removeButton {
    &:hover {
      fill: red;
    }
  }
`
