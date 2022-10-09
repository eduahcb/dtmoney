import styled from 'styled-components'

import { transparentize } from 'polished'

import { Card as CardComponent } from 'components/atoms/Card'
import { Table } from 'components/molecules/Table'
import { RadioBox as RadioBoxComponent } from 'components/atoms/RadioBox'

type PriceColumnProps = {
  type: 'deposit' | 'withdraw'
}

type RadioBoxProps = {
  isActive: boolean
}

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

export const PriceColumn = styled(Table.Td)<PriceColumnProps>`
  color: ${props => props.type === 'deposit' ? 'var(--green)' : 'var(--red)'};
`

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  button {
    width: 100%;
    height: 4rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin-bottom: 1rem;
`

export const RadioBox = styled(RadioBoxComponent)<RadioBoxProps>`
  background-color: ${({ isActive }) =>
    isActive
      ? transparentize(0.9, '#33cc95')
      : transparentize(0.9, '#e62e4d')
  };
`
