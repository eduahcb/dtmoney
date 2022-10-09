import React, { ReactElement } from 'react'

import { formatNumber } from 'helpers/format'

import {
  Summary as StyleSummary,
  Card,
  CardHeader,
  GreenCard
} from './style'

import IncomeImage from 'assets/income.svg'
import OutcomeImage from 'assets/outcome.svg'
import TotalImage from 'assets/total.svg'

type SummaryProps = {
  summary: {
    total: number
    withdraw: number
    deposit: number
  }
}

export const Summary = ({ summary }: SummaryProps): ReactElement => {
  const { deposit, withdraw, total } = summary

  return (
    <StyleSummary>
      <Card>
          <CardHeader>
            <p>entradas</p>
            <img src={IncomeImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(deposit)}</strong>
      </Card>

      <Card>
          <CardHeader>
            <p>saída</p>
            <img src={OutcomeImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(withdraw)}</strong>
      </Card>

      <GreenCard>
          <CardHeader>
            <p>total</p>
            <img src={TotalImage} alt="" />
          </CardHeader>
          <strong>{formatNumber(total)}</strong>
      </GreenCard>
    </StyleSummary>
  )
}
