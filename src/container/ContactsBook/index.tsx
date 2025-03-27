import Form from '../../components/Form'
import Header from '../../components/Header'
import { Table, TableFooter, TableTitle } from './styles'

const ContactsBook = () => {
  return (
    <div className="centralizer">
      <Header />
      <Form />
      <Table>
        <thead>
          <tr>
            <TableTitle colSpan={2}>Nome</TableTitle>
            <TableTitle>Número</TableTitle>
            <TableTitle>E-mail</TableTitle>
          </tr>
        </thead>
        <tbody></tbody>
        <TableFooter>
          <tr>
            <td colSpan={4}>&nbsp;</td>
          </tr>
        </TableFooter>
      </Table>
    </div>
  )
}

export default ContactsBook
