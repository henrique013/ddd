import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@app/index.css'
import App from '@app/components/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
