import request from 'superagent'
import Transaction from '../../models/transaction'

const rootUrl = '/api/v1'

export async function fetchTransactionHistory(): Promise<Transaction[]> {
  try {
    const res = await request.get(`${rootUrl}/transactions`)
    return res.body.transactions
  } catch (error) {
    throw new Error('Failed to fetch transaction history')
  }
}
