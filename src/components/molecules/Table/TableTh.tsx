import React, { ReactElement, ReactNode } from 'react'

import { TableTh as StyledTableTh } from './style'

type TableThProps = {
  children: ReactNode
}

export const TableTh = ({ children }: TableThProps): ReactElement => {
  return (
    <StyledTableTh>{ children }</StyledTableTh>
  )
}
