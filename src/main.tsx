import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

if (import.meta.env.MODE === 'development') {
  import('fake-api/server')
    .then(module => {
      module.fakeApi()
    })
    .catch(error => console.error(error))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
