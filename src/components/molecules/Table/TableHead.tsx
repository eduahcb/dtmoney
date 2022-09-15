import React, { ReactElement, ReactNode } from 'react'

type TableHeadProps = {
  children: ReactNode
}

export const TableHead = ({ children }: TableHeadProps): ReactElement => {
  return (
    <thead>{children}</thead>
  )
}
