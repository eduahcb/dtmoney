import React from 'react'

import { render, screen } from '@testing-library/react'

import { Card } from 'components/atoms/Card'

describe('Card component', () => {
  test('renders children', () => {
    render(<Card><p>this is a text</p></Card>)

    expect(screen.getByText('this is a text')).toBeInTheDocument()
  })

  test('to match snapshot', () => {
    const { asFragment } = render(<Card><p>this is a text</p></Card>)

    expect(asFragment()).toMatchSnapshot()
  })
})
