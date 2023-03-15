import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './components/GlobalStyle'
import Loading from './components/Loading'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle>
        <Suspense fallback={<Loading />}>
          <CartProvider>
            <App />
          </CartProvider>
        </Suspense>
      </GlobalStyle>
    </AuthProvider>
  </React.StrictMode>
)
