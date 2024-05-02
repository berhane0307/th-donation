// TransactionHistory.tsx
import React, { useState, useEffect } from 'react'
import '../styles/index.scss'
import { fetchTransactionHistory } from '../../client/apis/TransactionHistoryApiClient'
import Transaction from '../../models/transaction'


const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const transactions = await fetchTransactionHistory()
        setTransactions(transactions)
        setLoading(false)
      } catch (error) {
        setError('Error fetching transactions. Please try again later.')
        setLoading(false)
        console.error('Error fetching transactions:', error)
      }
    }
    fetchTransactions()
  }, [])

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              Amount: {transaction.amount}, Description:{' '}
              {transaction.description}, Date: {transaction.date.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TransactionHistory
