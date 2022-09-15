import React from 'react'

import { render, screen } from '@testing-library/react'

import { TableBody } from 'components/molecules/Table'

describe('TableBody component', () => {
  describe('when rendered', () => {
    it('renders table content', () => {
      render(
        <table>
          <TableBody>
            <tr>
              <td>carlim</td>
              <td>23</td>
            </tr>
          </TableBody>
        </table>
      )

      expect(screen.getByText('carlim')).toBeInTheDocument()
      expect(screen.getByText('23')).toBeInTheDocument()
    })
  })
})
