import React, { ReactElement, ReactNode } from 'react'

import { TableTd as StyleTableTd } from './style'

type TableTdProps = {
  children: ReactNode
}

export const TableTd = ({ children }: TableTdProps): ReactElement => {
  return (
    <StyleTableTd>{ children }</StyleTableTd>
  )
}
