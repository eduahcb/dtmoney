import React from 'react'

import { render, screen } from '@testing-library/react'

import { TableTd } from 'components/molecules/Table'

describe('TableTd component', () => {
  describe('when rendered', () => {
    it('renders table content', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableTd>name</TableTd>
              <TableTd>description</TableTd>
            </tr>
          </tbody>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
