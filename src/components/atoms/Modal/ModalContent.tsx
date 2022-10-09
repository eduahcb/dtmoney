import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

import { StyledModalContent } from './style'

type ModalContentProp = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const ModalContent = ({ children, ...rest }: ModalContentProp): ReactElement => {
  return (
    <StyledModalContent {...rest}>
      { children }
    </StyledModalContent>
  )
}
