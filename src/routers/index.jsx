import ROLE from '@/constant/role.constant'
import MainLayout from '@/layouts/main'
import ProductDetailPage from '@/pages/product/detail'
import UserPage from '@/pages/user'
import { productService } from '@/services/product.service'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
// layouts
const AuthLayout = lazy(() => import('@/layouts/auth'))
const AdminLayout = lazy(() => import('@/layouts/admin'))
// pages
const ErrorPage = lazy(() => import('@/pages/error'))
const HomePage = lazy(() => import('@/pages/home'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const RegisterPage = lazy(() => import('@/pages/auth/register'))
const ProductPage = lazy(() => import('@/pages/product'))
const CheckOutPage = lazy(() => import('@/pages/checkout'))
const OrderResultPage = lazy(() => import('@/pages/orderResult'))
// children page
const AccountPage = lazy(() => import('@/pages/user/account'))
const AddressPage = lazy(() => import('@/pages/user/address'))
const OrderPage = lazy(() => import('@/pages/user/order'))
const AdminOrdersPage = lazy(() => import('@/pages/admin/orders'))
const AdminProductsPage = lazy(() => import('@/pages/admin/products'))
const AdminDeliveryPage = lazy(() => import('@/pages/admin/delivery'))
const AdminDashboardPage = lazy(() => import('@/pages/admin/dashboard'))

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
        path: 'checkout',
        element: <CheckOutPage />,
      },
      {
        path: 'order-result',
        element: <OrderResultPage />,
      },
      {
        path: 'user',
        element: (
          <ProtectedRoute role={[ROLE.USER, ROLE.ADMIN]}>
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
    path: '/admin',
    element: (
      <ProtectedRoute role={[ROLE.ADMIN]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <AdminDashboardPage />,
      },
      {
        path: 'orders',
        element: <AdminOrdersPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'delivery',
        element: <AdminDeliveryPage />,
      },
    ],
    errorElement: <ErrorPage />,
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
