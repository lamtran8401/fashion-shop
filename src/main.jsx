import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context'
import App from './App'
import GlobalProvider from './components/GlobalProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </AuthProvider>
  // </React.StrictMode>
)
