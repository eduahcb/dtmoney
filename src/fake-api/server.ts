import { faker } from '@faker-js/faker'
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

      this.post('/transactions', (schema, request) => {
        const transaction = JSON.parse(request.requestBody)

        transaction.createdAt = faker.date.recent().toISOString()

        const result = schema.create('transaction', transaction)

        return {
          result
        }
      })
    }
  })
}
