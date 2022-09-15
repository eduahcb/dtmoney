import React from 'react'

import { render, screen } from '@testing-library/react'

import { Table } from 'components/molecules/Table'

describe('Table component', () => {
  describe('when rendered', () => {
    it('renders table content', () => {
      render(
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Math</td>
              <td>math@test.com</td>
            </tr>
          </tbody>
        </Table>
      )

      expect(screen.getByText('name')).toBeInTheDocument()
      expect(screen.getByText('Math')).toBeInTheDocument()
    })
  })
})
