import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeContact } from '../../store/reducers/contactsSlice'
import { EditButton, RemoveButton } from '../../components/Buttons'
import Form from '../../components/Form'
import Header from '../../components/Header'
import { ActionButtons, Table, TableFooter, TableTitle, TableWrapper } from './styles'
import { useState } from 'react'
import { Contact } from '../../types/contact'

const ContactsBook: React.FC = () => {
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  return (
    <div className="centralizer">
      <Header />
      <Form editingContact={editingContact} clearEditingContact={() => setEditingContact(null)} />
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
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="contact_profile_img">
                  <img src="https://placecats.com/80/80" alt="Foto de perfil do contato" />
                </td>
                <td style={{ textAlign: 'left' }}>
                  <div>{contact.name}</div>
                  <div>{contact.email}</div>
                </td>
                <td>{contact.number}</td>
                <td>
                  <ActionButtons>
                    <EditButton onClick={() => setEditingContact(contact)} />
                    <RemoveButton onClick={() => dispatch(removeContact(contact.id))} />
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
