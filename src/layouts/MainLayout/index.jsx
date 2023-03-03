import { Outlet } from 'react-router-dom'
import { BaseLayout } from '../Shares'

const MainLayout = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

export default MainLayout
