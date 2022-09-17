import styled from 'styled-components'
import { Card as CardComponent } from 'components/atoms/Card'
import { Table } from 'components/molecules/Table'

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  margin-top: -80px;

  margin-bottom: 80px;
`

export const Card = styled(CardComponent)`
  color: var(--title);


  strong {
    display: block;
    margin-top: 16px;
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
  }
`

export const GreenCard = styled(Card)`
  background-color: var(--green);
  color: var(--shape-principal);
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  p {
    text-transform: capitalize;
    font-size: 16px;
    line-height: 24px;
  }
`

export const TitleColumn = styled(Table.Td)`
  color: var(--title);
`

type PriceColumnProps = {
  type: 'deposit' | 'withdraw'
}

export const PriceColumn = styled(Table.Td)<PriceColumnProps>`
  color: ${props => props.type === 'deposit' ? 'var(--green)' : 'var(--red)'}
`
