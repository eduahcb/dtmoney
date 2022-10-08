/* eslint-disable import/export */
import React, { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  render,
  // renderHook,
  // RenderHookOptions,
  // RenderHookResult,
  RenderOptions,
  RenderResult
} from '@testing-library/react'

type TestProps = {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0
    }
  }
})

const TestProvider = ({ children }: TestProps): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: TestProvider, ...options })

// const customRenderHook = <
//   Result,
//   Props
// ,>(
//     render: (initialProps: Props) => Result,
//     options?: Omit<RenderHookOptions<Props>, 'wrapper'>
//   ): RenderHookResult<Result, Props> => renderHook(render, { wrapper: TestProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
