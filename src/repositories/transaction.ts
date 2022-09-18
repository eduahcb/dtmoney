import { AxiosResponse } from 'axios'
import { IHttpClient } from 'http/IHttpClient'

import { Transaction } from 'types/transaction'

export class TransactionRepository {
  private readonly client: IHttpClient

  constructor (client: IHttpClient) {
    this.client = client
  }

  async getAll (): Promise<Transaction[]> {
    try {
      const { data } = await this.client.get<AxiosResponse>('/transactions')

      const transactions: Transaction[] = data.transactions.map((transaction: any) => ({
        ...transaction,
        createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)),
        amount: new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL'
        }).format(transaction.amount)
      }))

      return Promise.resolve(transactions)
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(new Error(error.message))
      }

      return Promise.reject(new Error('unexpected error'))
    }
  }
}
