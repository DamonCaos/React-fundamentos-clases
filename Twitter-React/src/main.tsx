import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import storage from './utils/storage.ts'
import { setAuthorizationHeader } from './api/client.ts'

const accessToken = storage.get('auth')

if (accessToken) {
  setAuthorizationHeader(accessToken)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App defaultIsLogged={!!accessToken} />
  </StrictMode>,
)
