import React, { HTMLAttributes, ReactElement } from 'react'

import { StyledButton } from './style'

type RadioBoxProps = HTMLAttributes<HTMLButtonElement> & {
  title: string
  img: string
  alt?: string
}

export const RadioBox = ({ title, img, alt = '', ...rest }: RadioBoxProps): ReactElement => {
  return (
    <StyledButton type='button' { ...rest }>
      <img src={img} alt={alt} />
      <span>{ title }</span>
    </StyledButton>
  )
}
