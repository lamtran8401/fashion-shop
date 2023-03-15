import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Loading } from './components'
import GlobalStyle from './components/GlobalStyle'
import { AuthProvider, CartProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <GlobalStyle>
      <Suspense fallback={<Loading />}>
        <CartProvider>
          <App />
        </CartProvider>
      </Suspense>
    </GlobalStyle>
  </AuthProvider>
  // </React.StrictMode>
)
