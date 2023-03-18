import MainLayout from '@/layouts/MainLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
// layouts
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))
// pages
const ErrorPage = lazy(() => import('@/pages/error'))
const HomePage = lazy(() => import('@/pages/home'))
const UserPage = lazy(() => import('@/pages/user'))
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
        element: <UserPage />,
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
