import { createServer, Server } from 'miragejs'

import { models } from './models'
import { factories } from './factories'

export const fakeApi = (): Server => {
  return createServer({
    models,

    factories,

    seeds (server) {
      server.createList('transaction', 10)
    },

    routes () {
      this.namespace = 'api'

      this.get('/transactions', (schema) => ({
        transactions: schema.all('transaction').models
      }))
    }
  })
}
