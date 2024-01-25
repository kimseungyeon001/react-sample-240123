import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { config } from './config.ts'
import { initMocks } from './mocks'

async function main() {
  if (config.useMockApi) {
    await initMocks()
  }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

main()
