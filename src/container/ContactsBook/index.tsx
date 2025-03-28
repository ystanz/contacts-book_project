import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header'
import {
  ActionButtons,
  Table,
  TableFooter,
  TableTitle,
  TableWrapper
} from './styles'
import { EditButton, RemoveButton } from '../../components/Buttons'

interface Contact {
  name: string
  email: string
  number: string
}

const ContactsBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      name: 'Ana Souza',
      email: 'ana.souza@teste.com',
      number: '(00) 98765-4321'
    },
    {
      name: 'Carlos Pereira',
      email: 'carlos.pereira@teste.com',
      number: '(00) 99876-54300'
    },
    {
      name: 'Beatriz Lima',
      email: 'beatriz.lima@teste.com',
      number: '(00) 91234-0078'
    },
    {
      name: 'Felipe Costa',
      email: 'felipe.pereira@teste.com',
      number: '(00) 90045-6789'
    },
    {
      name: 'Mariana Oliveira',
      email: 'mariana.oliveira@teste.com',
      number: '(00) 90406-7890'
    }
  ])
  const [editingContact, setEditingContact] = useState<Contact | null>(null)

  const handleAddContact = (name: string, email: string, number: string) => {
    if (editingContact) {
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.name === editingContact.name
            ? { name, email, number }
            : contact
        )
      )
      setEditingContact(null)
    } else {
      if (contacts.some((contact) => contact.name === name)) {
        alert(`${name} já foi adicionado à lista de contatos`)
        return
      }
      setContacts([...contacts, { name, email, number }])
    }
  }

  function handleRemoveContact(name: string) {
    setContacts(contacts.filter((contact) => contact.name !== name))
  }

  function handleEditContact(contact: Contact) {
    setEditingContact(contact)
  }

  return (
    <div className="centralizer">
      <Header />
      <Form onAddContact={handleAddContact} editingContact={editingContact} />
      <TableWrapper>
        <Table cellSpacing={0}>
          <thead>
            <tr>
              <TableTitle colSpan={2}>Nome</TableTitle>
              <TableTitle>Número</TableTitle>
              <TableTitle>&nbsp;</TableTitle>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="contact_profile_img">
                  <img
                    src="https://placecats.com/80/80"
                    alt="Foto de perfil do contato"
                  />
                </td>
                <td style={{ textAlign: 'left' }}>
                  <div>{contact.name}</div>
                  <div>{contact.email}</div>
                </td>
                <td>{contact.number}</td>
                <td>
                  <ActionButtons>
                    <EditButton onClick={() => handleEditContact(contact)} />
                    <RemoveButton
                      onClick={() => handleRemoveContact(contact.name)}
                    />
                  </ActionButtons>
                </td>
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
