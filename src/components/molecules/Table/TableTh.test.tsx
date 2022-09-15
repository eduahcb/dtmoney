import React from 'react'

import { render, screen } from '@testing-library/react'

import { TableTh } from 'components/molecules/Table'

describe('TableTh component', () => {
  describe('when rendered', () => {
    it('renders table content', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableTh>name</TableTh>
              <TableTh>description</TableTh>
            </tr>
          </thead>
        </table>
      )

      expect(screen.getByText('description')).toBeInTheDocument()
      expect(screen.getByText('name')).toBeInTheDocument()
    })
  })
})
