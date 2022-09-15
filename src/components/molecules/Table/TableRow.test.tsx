import React from 'react'

import { render, screen } from '@testing-library/react'

import { TableRow } from 'components/molecules/Table'

describe('Table component', () => {
  describe('when redered', () => {
    it('renders table content', () => {
      render(
        <table>
          <thead>
            <TableRow>
              <th>name</th>
              <th>description</th>
            </TableRow>
          </thead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
