import React from 'react'
import { Response, Server } from 'miragejs'

import Modal from 'react-modal'

import { render, screen, waitFor } from 'test-utils'
import userEvent from '@testing-library/user-event'

import { fakeApi } from 'fake-api/server'

import { Dashboard } from './Dashboard'

import mockedTransactions from 'fixtures/transaction.json'

describe('Dashboard page', () => {
  let server: Server

  beforeAll(() => {
    server = fakeApi('test')
  })

  afterAll(() => {
    server.shutdown()
  })

  test('should render data', async () => {
    server.get('/transactions', schema => ({
      transactions: mockedTransactions.slice(0, 2)
    }))

    render(<Dashboard />)

    const firsTransaction = await screen.findByText('facilis')
    const secondTransaction = await screen.findByText('ea')

    expect(firsTransaction).toBeInTheDocument()
    expect(secondTransaction).toBeInTheDocument()
  })

  test('should not render data', async () => {
    server.get('/transactions', schema => {
      return new Response(500, {}, { error: { msg: 'this is a error' } })
    })

    render(<Dashboard />)

    await waitFor(() => expect(screen.queryByText('facilits')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('ea')).not.toBeInTheDocument())
  })

  test('should open modal', async () => {
    server.get('/transactions', schema => ({
      transactions: mockedTransactions.slice(0, 2)
    }))

    render(
      <div id="root">
        <Dashboard />
      </div>
    )

    Modal.setAppElement('#root')

    const newTransactionButton = screen.getByText('nova transação')

    await userEvent.click(newTransactionButton)

    await screen.findByText('Cadastrar transação')
  })
})
