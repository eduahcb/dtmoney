const path = require('path')
const fs = require('fs')

const { faker } = require('@faker-js/faker')

const buildTransactions = (number) => {
  const transactions = []

  for (let i = 0; i < number; i++) {
    transactions.push({
      id: i,
      title: faker.lorem.word(),
      type: faker.helpers.arrayElement(['deposit', 'withdraw']),
      category: faker.lorem.word(),
      amount: Number(faker.commerce.price()),
      createdAt: faker.date.past()
    })
  }

  return transactions
}

const transactions = buildTransactions(100)

const transactionsPath = path.join(__dirname, '..', '..', 'src', 'fixtures', 'transaction.json')

fs.writeFile(transactionsPath, JSON.stringify(transactions, null, '  '), (err) => {
  if (err) console.error(err)
})
