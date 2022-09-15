import React, { ReactElement, ReactNode, FC } from 'react'

import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableTh } from './TableTh'
import { TableTd } from './TableTd'
import { TableRow } from './TableRow'

import { Table as StyledTable } from './style'

type TableProps = {
  children: ReactNode
}

interface TableSubComponents {
  Head: typeof TableHead
  Body: typeof TableBody
  Th: typeof TableTh
  Td: typeof TableTd
  Row: typeof TableRow
}

const Table: FC<TableProps> & TableSubComponents = ({ children }: TableProps): ReactElement => {
  return (
    <StyledTable>{ children }</StyledTable>
  )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Th = TableTh
Table.Td = TableTd
Table.Row = TableRow

export { Table }
