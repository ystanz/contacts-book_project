import contactIcon from '../../assets/images/contact_icon.png'
import { HeaderIcon, HeaderTitle, HeaderWrapper } from './styles'
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderIcon src={contactIcon} alt="Ícone de agenda telefônica" />
      <HeaderTitle>Meus Contatos</HeaderTitle>
    </HeaderWrapper>
  )
}

export default Header
