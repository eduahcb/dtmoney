import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import { Button as StyledButton } from './style'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color: 'primary' | 'secondary'
}

export const Button = ({ children, color, ...rest }: ButtonProps): ReactElement => {
  return (
    <StyledButton color={color} {...rest}>{children}</StyledButton>
  )
}
