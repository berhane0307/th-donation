import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { Transaction } from '../../models/transaction'
import { fetchTransactionHistory } from '../../client/apis/TransactionHistoryApiClient'

export function useFetchTransactions() {
  return useQuery<Transaction[]>({
    queryKey: ['transactions'],
    queryFn: async () => fetchTransactionHistory(),
  })
}

export function useSubmitDonation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (donationData: { amount: number; message: string }) =>
      submitDonation(donationData.amount, donationData.message),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      })
    },
  })
}
