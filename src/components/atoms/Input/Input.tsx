import React, { InputHTMLAttributes, ReactElement } from 'react'

import { StyledInput } from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = ({ ...rest }: InputProps): ReactElement => {
  return (
    <StyledInput { ...rest} />
  )
}
