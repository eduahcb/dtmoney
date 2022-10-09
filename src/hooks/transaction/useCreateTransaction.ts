
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

import { api } from 'services'

type UseCreateTransactionResult = {
  createTransaction: (transaction: any) => Promise<void>
}

export const useCreateTransaction = (): UseCreateTransactionResult => {
  const queryClient = useQueryClient()

  const mutation = useMutation(async (transaction: any) => api.transaction.create(transaction), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['transactions'])
    }
  })

  const createTransaction = async (user: any): Promise<void> => {
    return mutation.mutateAsync(user)
  }

  return {
    createTransaction
  }
}
