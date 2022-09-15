import React from 'react'

import { render, screen } from '@testing-library/react'

import { TableHead } from 'components/molecules/Table'

describe('TableHead component', () => {
  describe('when rendered', () => {
    it('renders table content', () => {
      render(
        <table>
          <TableHead>
            <tr>
              <th>name</th>
              <th>description</th>
            </tr>
          </TableHead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
