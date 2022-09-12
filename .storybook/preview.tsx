import React from 'react'
import { GlobalStyle } from '../src/styles/global'

export const decorators = [(StoryFn) => (
  <>
    <GlobalStyle />
    <StoryFn />
  </>
)]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}