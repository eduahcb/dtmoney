
import { AxiosClient } from 'http-client'
import { TransactionRepository } from 'repositories'

const client = new AxiosClient('http://localhost:3000/api/')

const transaction = new TransactionRepository(client)

export const api = {
  transaction
}
