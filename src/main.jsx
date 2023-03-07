import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context'
import App from './App'
import GlobalStyle from './components/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </AuthProvider>
  // </React.StrictMode>
)
