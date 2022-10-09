import React, { ReactElement, Suspense, lazy } from 'react'

import { useCreateTransaction, useGetTransactions, useModal } from 'hooks'

import { Header } from 'components/atoms/Header'
import { Brand } from 'components/atoms/Brand'
import { Button } from 'components/atoms/Button'

import { Content } from './style'

import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'

const NewTransactionModal = lazy(async () =>
  import('./NewTransactionModal')
    .then(({ NewTransactionModal }) => ({
      default: NewTransactionModal
    }))
)

export const Dashboard = (): ReactElement => {
  const { transactions, isError, summary } = useGetTransactions()
  const { createTransaction } = useCreateTransaction()
  const { open: isOpen, openModal, closeModal } = useModal(false)

  return (
    <>
      <Header>
        <Brand />
        <Button color='primary' onClick={openModal}>nova transação</Button>
      </Header>
      <Content>
        <Summary summary={summary}/>
        {
          !isError && <TransactionTable transactions={transactions}/>
        }
      </Content>
        {
          isOpen && (
            <Suspense>
              <NewTransactionModal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  createTransaction= {createTransaction}
                />
            </Suspense>
          )
        }

    </>
  )
}
