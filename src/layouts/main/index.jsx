import Loading from '@/components/Loading'
import Cart from '@/features/cart/components/Cart'
import { Layout } from 'antd'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../shared'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Layout.Content className='container'>
        <Cart />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
      <Footer />
    </>
  )
}

export default MainLayout
