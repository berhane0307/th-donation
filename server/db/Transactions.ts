import connection from './connection.ts'
import Transaction from '../../models/transaction.ts'

export async function getAllTransactions(
  db = connection,
): Promise<Transaction[]> {
  return db('transaction').select()
}
