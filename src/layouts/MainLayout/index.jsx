import { Loading } from '@/components'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { BaseLayout } from '../Shares'

const MainLayout = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </BaseLayout>
  )
}

export default MainLayout
