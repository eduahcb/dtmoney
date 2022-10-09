import React, { lazy, ReactElement } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Modal from 'react-modal'

import { GlobalStyle } from 'styles/global'

import { Dashboard } from 'components/pages/Dashboard'

const queryClient = new QueryClient()

const ReactQueryDevTools = lazy(async () =>
  import('@tanstack/react-query-devtools')
    .then(module => ({
      default: module.ReactQueryDevtools
    }))
    .catch((error) => error)
)

const appModule = import.meta.env.MODE

Modal.setAppElement('#root')

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
