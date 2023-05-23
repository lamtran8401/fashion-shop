import Cart from '@/components/Cart'
import Loading from '@/components/Loading'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { BaseLayout } from '../shared'

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
