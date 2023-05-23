import MainLayout from '@/layouts/main'
import UserPage from '@/pages/user'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
// layouts
const AuthLayout = lazy(() => import('@/layouts/auth'))
// pages
const ErrorPage = lazy(() => import('@/pages/error'))
const HomePage = lazy(() => import('@/pages/home'))
// const UserPage = lazy(() => import('@/pages/user'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const RegisterPage = lazy(() => import('@/pages/auth/register'))
// children page
const AccountPage = lazy(() => import('@/pages/user/account'))
const AddressPage = lazy(() => import('@/pages/user/address'))
const OrderPage = lazy(() => import('@/pages/user/order'))

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
        element: <div>product</div>,
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
