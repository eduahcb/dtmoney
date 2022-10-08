import React, { ReactElement } from 'react'

import { StyledButton } from './style'

type RadioBoxProps = {
  title: string
  img: string
  alt?: string
}

export const RadioBox = ({ title, img, alt = '' }: RadioBoxProps): ReactElement => {
  return (
    <StyledButton type='button'>
      <img src={img} alt={alt} />
      <span>{ title }</span>
    </StyledButton>
  )
}
