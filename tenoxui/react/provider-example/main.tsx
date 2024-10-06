import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TenoxUIProvider } from '/path/to/provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TenoxUIProvider>
      <App />
    </TenoxUIProvider>
  </StrictMode>
)
