import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contact {
  id: number
  name: string
  email: string
  number: string
}

const initialState: Contact[] = [
  {
    id: 1,
    name: 'Ana Souza',
    email: 'ana.souza@teste.com',
    number: '(00) 98765-4321'
  },
  {
    id: 2,
    name: 'Carlos Pereira',
    email: 'carlos.pereira@teste.com',
    number: '(00) 99876-54300'
  },
  {
    id: 3,
    name: 'Beatriz Lima',
    email: 'beatriz.lima@teste.com',
    number: '(00) 91234-0078'
  },
  {
    id: 4,
    name: 'Felipe Costa',
    email: 'felipe.pereira@teste.com',
    number: '(00) 90045-6789'
  },
  {
    id: 5,
    name: 'Mariana Oliveira',
    email: 'mariana.oliveira@teste.com',
    number: '(00) 90406-7890'
  }
]
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Adiciona um novo contato à lista
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const newContact = {
        id: state.length ? state[state.length - 1].id + 1 : 1,
        ...action.payload
      }
      state.push(newContact)
    },
    // Remove um contato da lista pelo ID
    removeContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    // Atualiza os dados de um contato existente
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, updateContact } =
  contactsSlice.actions
export default contactsSlice.reducer
