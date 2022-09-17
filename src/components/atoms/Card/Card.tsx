import React, { ReactElement, ReactNode, HtmlHTMLAttributes } from 'react'

import { Card as StyledCard } from './style'

type CardProps = HtmlHTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export const Card = ({ children, className }: CardProps): ReactElement => {
  return (
    <StyledCard className={className}>{ children }</StyledCard>
  )
}
