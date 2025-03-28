import { useState } from 'react'
import addContactImg from '../../assets/images/contact_icon2.png'
import { FormButtonAdd, FormInput, FormWrapper } from './styles'

interface FormProps {
  onAddContact: (name: string, number: string, email: string) => void
}

const Form = ({ onAddContact }: FormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    onAddContact(name, email, number)

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
      <FormButtonAdd type="submit">
        <img src={addContactImg} alt="Ícone de adicionar um contato" />
      </FormButtonAdd>
    </FormWrapper>
  )
}

export default Form
