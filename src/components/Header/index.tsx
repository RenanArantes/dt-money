import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'
import { NewTransacionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="DT-Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransacionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
