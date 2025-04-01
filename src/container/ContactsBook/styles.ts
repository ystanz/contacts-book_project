import styled from 'styled-components'
import { colors } from '../../styles'

export const TableWrapper = styled.div`
  max-height: 36rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${colors.lightGray} transparent;

  @media (max-width: 767px) {
    max-height: 32rem;
  }
`
export const Table = styled.table`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;
    background-color: ${colors.darkGray};
    opacity: 0.95;
  }

  tbody tr {
    border-bottom: 1px solid ${colors.lightGray};
  }

  tbody td {
    font-size: 1.6rem;
    padding: 0.5rem 0;
  }

  .contact_profile_img {
    img {
      border-radius: 50%;
      text-align: left;
    }
  }

  @media (max-width: 767px) {
    width: 80%;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0 1.6rem;

    thead {
      display: none;
    }

    tbody tr td:nth-child(2),
    tr td:nth-child(3) {
      display: block;
    }

    tbody td {
      font-size: 1.4rem;
    }

    .contact_profile_img {
      img {
        width: 5rem;
        height: 5rem;
        margin-right: 1rem;
      }
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

  @media (max-width: 767px) {
    margin-left: 1.6rem;
  }
`

export const CopyrightInfo = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;

  a {
    cursor: pointer;
    transition: color ease-in-out 0.2s;
    &:hover {
      color: ${colors.editIcon};
    }
  }
`
