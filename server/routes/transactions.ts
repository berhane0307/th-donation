// routes/transactions.ts
import express, { Request, Response } from 'express'
import { Transaction } from '../../models/transaction'
import { getAllTransactions } from '../db/Transactions'

const router = express.Router()

// GET endpoint to retrieve transactions
router.get('/', async (req: Request, res: Response) => {
  // Assuming getAllTransactions fetches transactions from the database
  const transactions: Transaction[] = await getAllTransactions()
  res.json(transactions)
})

export default router
