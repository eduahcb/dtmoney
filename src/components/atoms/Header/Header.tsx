import React, { ReactElement, ReactNode } from 'react'

import { Container, Content } from './style'

type HeaderProps = {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps): ReactElement => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}
