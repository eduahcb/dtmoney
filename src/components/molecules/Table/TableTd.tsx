import React, { ReactElement, ReactNode, TdHTMLAttributes } from 'react'

import { TableTd as StyleTableTd } from './style'

type TableTdProps = TdHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

export const TableTd = ({ children, className }: TableTdProps): ReactElement => {
  return (
    <StyleTableTd className={className}>{ children }</StyleTableTd>
  )
}
