import React, { ReactElement, ReactNode } from 'react'

type TableBodyProps = {
  children: ReactNode
}

export const TableBody = ({ children }: TableBodyProps): ReactElement => {
  return (
    <tbody>{children}</tbody>
  )
}
