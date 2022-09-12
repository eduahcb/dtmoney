import React from 'react'

import { render, screen } from '@testing-library/react'

import { Button } from 'components/atoms/Button'

describe('Button component', () => {
  test('renders content', () => {
    render(<Button color='primary'>my content</Button>)

    expect(screen.getByText('my content')).toBeInTheDocument()
  })

  test('renders primary button', () => {
    render(<Button color='primary'>my content</Button>)

    expect(screen.getByText('my content')).toHaveStyleRule('background-color', 'var(--blue-light)')
  })

  test('renders secondary button', () => {
    render(<Button color='secondary'>my content</Button>)

    expect(screen.getByText('my content')).toHaveStyleRule('background-color', 'var(--green)')
  })
})
