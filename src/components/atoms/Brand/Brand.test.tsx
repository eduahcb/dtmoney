import React from 'react'
import { render, screen } from '@testing-library/react'

import { Brand } from 'components/atoms/Brand'

describe('Brand component', () => {
  test('render component', () => {
    render(<Brand />)

    expect(screen.getByAltText('dt money logo')).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Brand />)

    expect(asFragment()).toMatchSnapshot()
  })
})
