
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

import { api } from 'services'

type UseCreateTransactionResult = {
  createTransaction: (user: any) => Promise<void>
}

export const useCreateTransaction = (): UseCreateTransactionResult => {
  const queryClient = useQueryClient()

  const mutation = useMutation(async (user: any) => api.transaction.create(user), {
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
