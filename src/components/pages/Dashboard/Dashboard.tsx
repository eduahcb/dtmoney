import React, { ReactElement } from 'react'

import { useGetTransactions } from 'hooks'

import { Header } from 'components/atoms/Header'
import { Brand } from 'components/atoms/Brand'
import { Button } from 'components/atoms/Button'

import { Content } from './style'

import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'

export const Dashboard = (): ReactElement => {
  const { transactions, isError, summary } = useGetTransactions()

  return (
    <>
      <Header>
        <Brand />
        <Button color='primary'>nova transação</Button>
      </Header>
      <Content>
        <Summary summary={summary}/>
        {
          !isError && <TransactionTable transactions={transactions}/>
        }
      </Content>
    </>
  )
}
