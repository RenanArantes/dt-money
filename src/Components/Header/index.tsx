import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'
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

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
