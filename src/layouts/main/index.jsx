import Cart from '@/components/Cart'
import Loading from '@/components/Loading'
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
