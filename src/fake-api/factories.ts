import { Factory } from 'miragejs'
import { faker } from '@faker-js/faker'

export const factories = {
  transaction: Factory.extend({
    title () {
      return faker.lorem.word()
    },
    type () {
      return faker.helpers.arrayElement(['deposit', 'withdraw'])
    },
    category () {
      return faker.lorem.word()
    },
    amount () {
      return Number(faker.commerce.price())
    },
    createdAt () {
      return faker.date.past()
    }
  })
}
