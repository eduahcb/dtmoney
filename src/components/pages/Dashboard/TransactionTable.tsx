import React, { ReactElement } from 'react'

import { formatNumber } from 'helpers/format'

import {
  TitleColumn,
  PriceColumn
} from './style'

import { Table } from 'components/molecules/Table'
import { Transaction } from 'types/transaction'

type TransactionTableProps = {
  transactions: Transaction[]
}

const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date))

export const TransactionTable = ({ transactions }: TransactionTableProps): ReactElement => {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Th>Título</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Categoria</Table.Th>
          <Table.Th>Data</Table.Th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {
          transactions.map(transaction => (
            <Table.Row key={transaction.id}>
              <TitleColumn>{transaction.title}</TitleColumn>
              <PriceColumn type={transaction.type}>
                {transaction.type === 'withdraw' && '- '}
                {formatNumber(transaction.amount)}
              </PriceColumn>
              <Table.Td>{transaction.category}</Table.Td>
              <Table.Td>{formatDate(transaction.createdAt)}</Table.Td>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}
