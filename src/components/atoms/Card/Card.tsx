import React, { ReactElement, ReactNode } from 'react'

import { Card as StyledCard } from './style'

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps): ReactElement => {
  return (
    <StyledCard>{ children }</StyledCard>
  )
}
