import { useMemo } from 'react'

import {
  useQuery
} from '@tanstack/react-query'

import { api } from 'services'

import { Transaction } from 'types/transaction'

type UseGetTransactionResult = {
  transactions: Transaction[]
  isError: boolean
  summary: {
    total: number
    deposit: number
    withdraw: number
  }
}

export const useGetTransactions = (): UseGetTransactionResult => {
  const { data, isError } = useQuery(['transactions'], async () => api.transaction.getAll())

  const summary = useMemo(() => {
    const total = 0; const deposit = 0; const withdraw = 0

    return data?.reduce((totals, transaction) => {
      totals[transaction.type] += transaction.amount

      transaction.type === 'deposit'
        ? totals.total += transaction.amount
        : totals.total -= transaction.amount

      return totals
    }, { total, deposit, withdraw }) ?? { total, deposit, withdraw }
  }, [data])

  return {
    transactions: data ?? [],
    summary,
    isError
  }
}
