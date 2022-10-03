import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import {
  PriceHighlight,
  TransactionContainer,
  TransationsTable,
} from './styles'

export function Transations() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <TransationsTable>
          <tbody>
            <tr>
              <td width={'50%'}>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 5000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>
            <tr>
              <td width={'50%'}>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 5000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>
          </tbody>
        </TransationsTable>
      </TransactionContainer>
    </div>
  )
}
