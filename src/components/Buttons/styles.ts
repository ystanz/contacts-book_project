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
    transition: all ease-in-out 0.2s;
    &:hover {
      transform: scale(1.07);
      filter: brightness(1.2);
    }
  }

  .editButton {
    &:hover {
      fill: ${colors.editIcon};
    }
  }

  .removeButton {
    &:hover {
      fill: ${colors.removeIcon};
    }
  }
`
