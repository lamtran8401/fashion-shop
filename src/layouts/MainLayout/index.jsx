import Loading from '@/components/Loading'
import Cart from '@/features/cart/components/Cart'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { BaseLayout } from '../Shares'

const MainLayout = () => {
  return (
    <BaseLayout>
      <Cart />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </BaseLayout>
  )
}

export default MainLayout
