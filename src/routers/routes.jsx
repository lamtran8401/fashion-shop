import { createBrowserRouter } from 'react-router-dom'
import { MainLayout, UserLayout, ProductLayout } from '@/layouts'
import { Home, Address, Account, Order, Error } from '@/pages'

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
])

export default router
