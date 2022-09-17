import React, { ReactElement } from 'react'

import { Header } from 'components/atoms/Header'
import { Brand } from 'components/atoms/Brand'
import { Button } from 'components/atoms/Button'

import IncomeImage from 'assets/income.svg'
import OutcomeImage from 'assets/outcome.svg'
import TotalImage from 'assets/total.svg'

import { Content, Summary, Card, GreenCard, CardHeader, TitleColumn, PriceColumn } from './style'

import { Table } from 'components/molecules/Table'

export const Dashboard = (): ReactElement => {
  return (
    <>
      <Header>
        <Brand />
        <Button color='primary'>nova transação</Button>
      </Header>
      <Content>
        <Summary>
          <Card>
             <CardHeader>
                <p>entradas</p>
                <img src={IncomeImage} alt="" />
             </CardHeader>
             <strong>R$17.0000, 00</strong>
          </Card>

          <Card>
             <CardHeader>
                <p>saída</p>
                <img src={OutcomeImage} alt="" />
             </CardHeader>
             <strong>R$17.0000, 00</strong>
          </Card>

          <GreenCard>
             <CardHeader>
                <p>total</p>
                <img src={TotalImage} alt="" />
             </CardHeader>
             <strong>R$17.0000, 00</strong>
          </GreenCard>
        </Summary>
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
            <Table.Row>
              <TitleColumn>Desenvolvimento</TitleColumn>
              <PriceColumn type={'deposit'}>R$ 12.000, 00</PriceColumn>
              <Table.Td>Venda</Table.Td>
              <Table.Td>13/04/2021</Table.Td>
            </Table.Row>
            <Table.Row>
              <TitleColumn>Hamburger</TitleColumn>
              <PriceColumn type={'withdraw'}> - R$ 59,00</PriceColumn>
              <Table.Td>Alimentação</Table.Td>
              <Table.Td>15/03/2021</Table.Td>
            </Table.Row>
          </Table.Body>
        </Table>
      </Content>
    </>
  )
}
