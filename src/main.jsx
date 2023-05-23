import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import GlobalStyle from './components/GlobalStyle'
import Loading from './components/Loading'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'
import NotifyProvider from './context/NotifyContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <AuthProvider>
      <GlobalStyle>
        <Suspense fallback={<Loading />}>
          <NotifyProvider>
            <CartProvider>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </CartProvider>
          </NotifyProvider>
        </Suspense>
      </GlobalStyle>
    </AuthProvider>
  </ErrorBoundary>
  // </React.StrictMode>
)
