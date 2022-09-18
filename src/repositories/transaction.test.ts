
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import axios from 'axios'
import { AxiosClient } from 'http/AxiosClient'
import { TransactionRepository } from './transaction'

describe('TransactionRepository', () => {
  let client: AxiosClient

  beforeAll(() => {
    client = new AxiosClient(axios.create({}))
  })

  describe('getAll', () => {
    test('return a empty array', async () => {
      vi.spyOn(client, 'get').mockResolvedValue({ data: { transactions: [] } })

      const transactionRepository = new TransactionRepository(client)

      const transactions = await transactionRepository.getAll()

      expect(transactions).toStrictEqual([])
    })

    test('return an array with one user', async () => {
      vi.spyOn(client, 'get').mockResolvedValue({
        data: {
          transactions: [{
            id: 1,
            title: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00')
          }]
        }
      })

      const transactionRepository = new TransactionRepository(client)

      const transactions = await transactionRepository.getAll()

      expect(transactions).toStrictEqual([{
        id: 1,
        title: 'Freelance de website',
        type: 'deposit',
        category: 'Dev',
        createdAt: '12/02/2021',
        amount: new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL'
        }).format(6000)
      }])
    })

    test('return a unexpected message error', async () => {
      vi.spyOn(client, 'get').mockRejectedValue({ message: 'error' })

      const transactionRepository = new TransactionRepository(client)

      const handle = async (): Promise<any> => await transactionRepository.getAll()

      await expect(handle).rejects.toBeInstanceOf(Error)
      await expect(handle).rejects.toThrowError('unexpected error')
    })

    test('throw a error instance of Error', async () => {
      vi.spyOn(client, 'get').mockRejectedValue(new Error('this is a error'))

      const transactionRepository = new TransactionRepository(client)

      const handle = async (): Promise<any> => await transactionRepository.getAll()

      await expect(handle).rejects.toThrowError('this is a error')
    })
  })
})
