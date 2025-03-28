import styled from 'styled-components'
import { colors } from '../../styles'

export const TableWrapper = styled.div`
  max-height: 36rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${colors.lightGray} transparent;
`
export const Table = styled.table`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  thead {
    position: sticky;
    top: 0;
    background-color: ${colors.darkGray};
    opacity: 0.95;
  }

  tbody td {
    font-size: 1.6rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${colors.lightGray};
  }

  .contact_profile_img {
    img {
      border-radius: 50%;
      text-align: left;
    }
  }
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

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
