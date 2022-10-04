import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransationsTable,
} from './styles'

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transations() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    console.log(data)
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransationsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width={'50%'}>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransationsTable>
      </TransactionContainer>
    </div>
  )
}
