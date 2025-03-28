import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header'
import { Table, TableFooter, TableTitle, TableWrapper } from './styles'

interface Contact {
  name: string
  email: string
  number: string
}

const ContactsBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([])

  const handleAddContact = (name: string, email: string, number: string) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} já foi adicionado à lista de contatos`)
      return
    }
    setContacts([...contacts, { name, email, number }])
  }
  return (
    <div className="centralizer">
      <Header />
      <Form onAddContact={handleAddContact} />
      <TableWrapper>
        <Table cellSpacing={0}>
          <thead>
            <tr>
              <TableTitle colSpan={2}>Nome</TableTitle>
              <TableTitle>E-mail</TableTitle>
              <TableTitle>Número</TableTitle>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="contact_profile_img">
                  <img src="https://placecats.com/80/80" alt="" />
                </td>
                <td style={{ textAlign: 'left' }}>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
              </tr>
            ))}
          </tbody>
          <TableFooter>
            <tr>
              <td colSpan={4}>&nbsp;</td>
            </tr>
          </TableFooter>
        </Table>
      </TableWrapper>
    </div>
  )
}

export default ContactsBook
