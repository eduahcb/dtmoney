import React, { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const Style = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --text: #969cb3;
    --title: #363f5f;
    --shape-principal: #ffffff;
    --red: #e62e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
  }
  
  html {
    box-sizing: border-box;
    font-size: 100%;
    font-weight: 400;

    @media (max-width: 1080px) {
      font-size: 0.9375rem;
    }

    @media (min-width: 720px) {
      font-size: 0.875rem;
    }
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, a, input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.4;
    cursor: not-allowed;
  }
`
export function GlobalStyle (): ReactElement {
  return (
    <>
      <Style />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&family=Merriweather:wght@400;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Helmet>
    </>
  )
}
