import React, { ReactElement, ReactNode, HTMLAttributes } from 'react'

import { StyledModalHeader } from './style'

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const ModalHeader = ({ children, ...rest }: ModalHeaderProps): ReactElement => {
  return (
    <StyledModalHeader {...rest}>
      <h2>{children}</h2>
    </StyledModalHeader>
  )
}
