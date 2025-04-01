import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../types/contact'

const initialState: Contact[] = [
  {
    id: 1,
    name: 'Ana Souza',
    email: 'ana.souza@teste.com',
    number: '0098765432'
  },
  {
    id: 2,
    name: 'Carlos Pereira',
    email: 'carlos.pereira@teste.com',
    number: '00998765430'
  },
  {
    id: 3,
    name: 'Beatriz Lima',
    email: 'beatriz.lima@teste.com',
    number: '0091234007'
  },
  {
    id: 4,
    name: 'Felipe Costa',
    email: 'felipe.pereira@teste.com',
    number: '0090045678'
  },
  {
    id: 5,
    name: 'Mariana Oliveira',
    email: 'mariana.oliveira@teste.com',
    number: '0090406789'
  }
]

// Função para verificar se já existe um contato com o mesmo nome, número ou email
const contactExists = (
  state: Contact[],
  { name, email, number, id }: Omit<Contact, 'id'> & { id?: number }
) => {
  return state.some(
    (contact) =>
      (contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number ||
        contact.email.toLocaleLowerCase() === email.toLocaleLowerCase()) &&
      contact.id !== id // Se for o mesmo ID, não considera duplicado
  )
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Adiciona um novo contato à lista
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const { name, email, number } = action.payload
      if (contactExists(state, { name, email, number })) {
        alert('Já existe um contato com esse nome, email ou número')
        return
      }

      const newContact = {
        id: state.length ? state[state.length - 1].id + 1 : 1,
        ...action.payload
      }
      state.push(newContact)
    },
    // Remove um contato da lista pelo ID
    removeContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
    // Atualiza os dados de um contato existente
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email, number } = action.payload

      if (contactExists(state, { name, email, number, id })) {
        alert('Já existe um contato com esse nome, email ou número')
        return
      }

      const contact = state.find((contact) => contact.id === id)
      if (contact) {
        contact.name = name
        contact.email = email
        contact.number = number
      }
    }
  }
})

export const { addContact, removeContact, updateContact } = contactsSlice.actions
export default contactsSlice.reducer
