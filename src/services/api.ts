import axios from 'axios'

import { AxiosClient } from 'http/AxiosClient'
import { TransactionRepository } from 'repositories'

const client = new AxiosClient(axios.create({
  baseURL: 'http://localhost:3000/api/'
}))

const transaction = new TransactionRepository(client)

export const api = {
  transaction
}
