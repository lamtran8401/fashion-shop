import MainLayout from '@/layouts/main'
import ProductDetailPage from '@/pages/product/detail'
import UserPage from '@/pages/user'
import { productService } from '@/services/product.service'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
// layouts
const AuthLayout = lazy(() => import('@/layouts/auth'))
// pages
const ErrorPage = lazy(() => import('@/pages/error'))
const HomePage = lazy(() => import('@/pages/home'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const RegisterPage = lazy(() => import('@/pages/auth/register'))
// children page
const AccountPage = lazy(() => import('@/pages/user/account'))
const AddressPage = lazy(() => import('@/pages/user/address'))
const OrderPage = lazy(() => import('@/pages/user/order'))
const ProductPage = lazy(() => import('@/pages/product'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetailPage />,
        loader: ({ params }) => productService.getDetail(params.productId),
      },
      {
        path: 'user',
        element: (
          <ProtectedRoute role={['USER']}>
            <UserPage />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <AccountPage />,
          },
          {
            path: 'address',
            element: <AddressPage />,
          },
          {
            path: 'order',
            element: <OrderPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

export default router
