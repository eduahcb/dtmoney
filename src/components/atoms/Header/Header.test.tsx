import React from 'react'

import { render, screen } from '@testing-library/react'

import { Header } from 'components/atoms/Header'

describe('Header', () => {
  test('renders children', () => {
    render(<Header><p>this is a text</p></Header>)

    expect(screen.getByText('this is a text')).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Header><p>this is a text</p></Header>)

    expect(asFragment()).toMatchSnapshot()
  })
})
