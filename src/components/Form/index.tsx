import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch } from '../../store'
import { ActionButons, FormButton, FormInput, FormWrapper } from './styles'
import addContactImg from '../../assets/images/contact_icon2.png'
import { addContact, updateContact } from '../../store/reducers/contactsSlice'
import { Contact } from '../../types/contact'
import { CancelButton, UpdateButton } from '../Buttons'

interface ContactFormProps {
  editingContact?: Contact | null
  clearEditingContact: () => void
}

const Form = ({ editingContact, clearEditingContact }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name)
      setEmail(editingContact.email)
      setNumber(editingContact.number)
    } else {
      setName('')
      setEmail('')
      setNumber('')
    }
  }, [editingContact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingContact) {
      dispatch(updateContact({ id: editingContact.id, name, email, number }))
      clearEditingContact()
    } else {
      dispatch(addContact({ name, email, number }))
    }
    setName('')
    setEmail('')
    setNumber('')
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="contact-name"
        placeholder="Escreva o nome do contato"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormInput
        type="email"
        name="contact-email"
        placeholder="Escreva o e-mail do contato"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        type="tel"
        name="contact-number"
        placeholder="Número do contato"
        maxLength={11}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <ActionButons>
        <FormButton type="submit">
          {editingContact ? (
            <UpdateButton />
          ) : (
            <img src={addContactImg} alt="Ícone de adicionar um contato" />
          )}
        </FormButton>
        {editingContact && <CancelButton onClick={clearEditingContact} />}
      </ActionButons>
    </FormWrapper>
  )
}

export default Form
