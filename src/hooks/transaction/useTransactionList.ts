import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { api } from 'services'
import { Transaction } from 'types/transaction'

export const useTransactionList = (): UseQueryResult<Transaction[], unknown> => {
  const response = useQuery(['transactions'], async () => await api.transaction.getAll())

  return {
    ...response
  }
}
