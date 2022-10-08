import React, { ReactElement, useMemo } from 'react'

import { useTransactionList } from 'hooks'

import { Header } from 'components/atoms/Header'
import { Brand } from 'components/atoms/Brand'
import { Button } from 'components/atoms/Button'

import { Content } from './style'

import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'

export const Dashboard = (): ReactElement => {
  const { data } = useTransactionList()

  const summary = useMemo(() => {
    const summaryInitialValue = {
      total: 0,
      deposits: 0,
      withdraws: 0
    }

    return data?.reduce((totals, transaction) => {
      if (transaction.type === 'deposit') {
        totals.deposits += transaction.amount
        totals.total += transaction.amount
      } else {
        totals.withdraws += transaction.amount
        totals.total -= transaction.amount
      }
      return totals
    }, summaryInitialValue) ?? summaryInitialValue
  }, [data])

  const transactions = data ?? []

  return (
    <>
      <Header>
        <Brand />
        <Button color='primary'>nova transação</Button>
      </Header>
      <Content>
        <Summary summary={summary}/>
        <TransactionTable transactions={transactions}/>
      </Content>
    </>
  )
}
