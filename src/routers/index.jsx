import { AuthLayout, MainLayout } from '@/layouts'
import { Error, Home, User } from '@/pages'
import { SignIn, SignUp } from '@/pages/auth'
import { Account, Address, Order } from '@/pages/user'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'user',
        element: <User />,
        errorElement: <Error />,
        children: [
          { path: '', element: <Account /> },
          {
            path: 'account',
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
    errorElement: <Error />,
  },
  {
    path: '/product',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <div>product</div>,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
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
