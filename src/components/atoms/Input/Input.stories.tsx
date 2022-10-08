import React, { InputHTMLAttributes, ReactElement } from 'react'

import { Input } from 'components/atoms/Input'

export default {
  title: 'Components/Input',
  component: Input
}

export const usage = ({ type, placeholder, ...rest }: InputHTMLAttributes<HTMLInputElement>): ReactElement =>
  <Input type={type} placeholder={placeholder} {...rest} />

usage.args = {
  type: 'text',
  placeholder: 'Nome'
}
