import { createBrowserRouter } from 'react-router-dom'
import { MainLayout, UserLayout, ProductLayout, AuthLayout } from '@/layouts'
import { Home, Address, Account, Order, Error, SignIn, SignUp } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/product',
    element: <ProductLayout />,
  },
  {
    path: '/user',
    element: <UserLayout />,
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
])

export default router
