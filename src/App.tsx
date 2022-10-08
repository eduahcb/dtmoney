import React, { lazy, ReactElement } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyle } from 'styles/global'

import { Dashboard } from 'components/pages/Dashboard'

import { queryClient } from 'services'

const ReactQueryDevTools = lazy(async () =>
  import('@tanstack/react-query-devtools')
    .then(module => ({
      default: module.ReactQueryDevtools
    }))
    .catch((error) => error)
)

const appModule = import.meta.env.MODE

function App (): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Dashboard />

      {
        appModule === 'development' && <ReactQueryDevTools />
      }
    </QueryClientProvider>
  )
}

export default App
