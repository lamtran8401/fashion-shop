import MainLayout from '@/layouts/MainLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
// layouts
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'))
// pages
const Error = lazy(() => import('@/pages/error'))
const Home = lazy(() => import('@/pages/home'))
const User = lazy(() => import('@/pages/user'))
const SignIn = lazy(() => import('@/pages/auth/signin'))
const SignUp = lazy(() => import('@/pages/auth/signup'))
// children page
const Account = lazy(() => import('@/pages/user/account'))
const Address = lazy(() => import('@/pages/user/address'))
const Order = lazy(() => import('@/pages/user/order'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'product',
        element: <div>product</div>,
      },
      {
        path: 'user',
        element: <User />,
        children: [
          {
            path: '',
            element: <Account />,
          },
          {
            path: 'address',
            element: <Address />,
          },
          {
            path: 'order',
            element: <Order />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
])

export default router
