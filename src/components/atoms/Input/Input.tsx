import React, { InputHTMLAttributes, forwardRef } from 'react'

import { StyledInput } from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref}/>
})

Input.displayName = 'Input'
