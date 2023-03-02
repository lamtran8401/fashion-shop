import { Link, Outlet } from 'react-router-dom'
import { BaseLayout } from '../Shares'

const MainLayout = () => {
  return (
    <BaseLayout>
      <Outlet />
      <Link to='/user'>User dashboard</Link>
    </BaseLayout>
  )
}

export default MainLayout
