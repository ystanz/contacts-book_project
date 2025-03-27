import styled from 'styled-components'
import { colors } from '../../styles'

export const Table = styled.table`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`

export const TableTitle = styled.th`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0 1rem;
  border-bottom: 1px solid ${colors.lightGray};
`

export const TableFooter = styled.tfoot`
  padding: 5rem 0;
`
