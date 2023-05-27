import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import GlobalStyle from './components/GlobalStyle'
import Loading from './components/Loading'
import { store } from './config/store'
import AuthProvider from './context/AuthContext'
import NotifyProvider from './context/NotifyContext'
import CartProvider from './features/cart/context/CartContext'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <AuthProvider>
      <Provider store={store}>
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
      </Provider>
    </AuthProvider>
  </ErrorBoundary>
  // </React.StrictMode>
)
