import { createServer, Server } from 'miragejs'

import { models } from './models'
import { factories } from './factories'

export const fakeApi = (environment: 'development' | 'test' = 'development'): Server => {
  return createServer({
    environment,
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

      // Error

      // this.get('/transactions', (schema) => {
      //   return new Response(500, {}, { error: 'kkk' })
      // })
    }
  })
}
