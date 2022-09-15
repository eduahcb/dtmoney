import React, { ReactElement, ReactNode } from 'react'

type TableRowProps = {
  children: ReactNode
}

export const TableRow = ({ children }: TableRowProps): ReactElement => {
  return (
    <tr>{ children }</tr>
  )
}
