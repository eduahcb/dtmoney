import axios from 'axios'

import { AxiosClient } from 'http-client/axios'
import { TransactionRepository } from './transaction'

import mockedTransactions from 'fixtures/transaction.json'

vi.mock('axios')

describe('TransactionRepository', () => {
  let client: AxiosClient

  beforeAll(() => {
    vi.mocked(axios.create).mockReturnThis()
    client = new AxiosClient()
  })

  afterEach(() => {
    vi.spyOn(axios, 'get').mockClear()
  })

  describe('getAll', () => {
    test('should return a empty array', async () => {
      vi.spyOn(axios, 'get').mockResolvedValue({ data: { transactions: [] }, status: 200 })

      const transactionRepository = new TransactionRepository(client)

      const transactions = await transactionRepository.getAll()

      expect(transactions).toStrictEqual([])
    })

    test('should return an array with one user', async () => {
      vi.spyOn(axios, 'get').mockResolvedValue({
        data: {
          transactions: [mockedTransactions[0]]
        },
        status: 200
      })

      const transactionRepository = new TransactionRepository(client)

      const transactions = await transactionRepository.getAll()

      expect(transactions).toStrictEqual([{
        id: 0,
        title: 'facilis',
        type: 'withdraw',
        category: 'minima',
        amount: 237,
        createdAt: '2022-07-24T21:10:32.363Z'
      }])
    })

    test('throw a error instance of Error', async () => {
      vi.spyOn(axios, 'get').mockRejectedValue(new Error('this is a error'))

      const transactionRepository = new TransactionRepository(client)

      const handle = async (): Promise<any> => await transactionRepository.getAll()

      await expect(handle).rejects.toThrowError('this is a error')
    })
  })
})
