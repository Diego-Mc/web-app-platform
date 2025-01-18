import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import { Provider } from './provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
)
