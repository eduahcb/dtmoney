import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  test('renders the brand', () => {
    render(<App />)

    expect(screen.getByAltText('dt money logo')).toBeInTheDocument()
  })
})
