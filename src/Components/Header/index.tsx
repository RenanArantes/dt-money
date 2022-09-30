import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT-Money" />

        <NewTransationButton>Nova transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
