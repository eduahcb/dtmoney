import { HttpClient } from 'http-client'

import { Transaction } from 'types/transaction'

export class TransactionRepository {
  private readonly client: HttpClient

  constructor (client: HttpClient) {
    this.client = client
  }

  async getAll (): Promise<Transaction[]> {
    try {
      const { data } = await this.client.get('/transactions')

      const transactions: Transaction[] = data.transactions

      return Promise.resolve<Transaction[]>(transactions)
    } catch (error: any) {
      return Promise.reject(new Error(error))
    }
  }

  async create (user: any): Promise<void> {
    try {
      await this.client.post('/transactions', { user })
    } catch (error: any) {
      return Promise.reject(new Error(error))
    }
  }
}
