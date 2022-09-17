import React, { ReactElement } from 'react'

import { GlobalStyle } from 'styles/global'

import { Dashboard } from 'components/pages/Dashboard'

function App (): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  )
}

export default App
