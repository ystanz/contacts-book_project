import addContactImg from '../../assets/images/contact_icon2.png'
import { FormButtonAdd, FormInput, FormWrapper } from './styles'

const Form = () => {
  return (
    <FormWrapper>
      <FormInput
        type="text"
        name="contact-name"
        placeholder="Escreva o nome do contato"
        required
      />
      <FormInput
        type="email"
        name="contact-email"
        placeholder="Escreva o e-mail do contato"
        required
      />
      <FormInput
        type="tel"
        name="contact-number"
        placeholder="Número do contato"
        maxLength={11}
        required
      />
      <FormButtonAdd type="submit">
        <img src={addContactImg} alt="Ícone de adicionar um contato" />
      </FormButtonAdd>
    </FormWrapper>
  )
}

export default Form
