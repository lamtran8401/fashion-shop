import { Link, Outlet } from 'react-router-dom'
import BaseLayout from '../Shares/Base'
import './UserLayout.scss'
import { Typography } from 'antd'

const UserLayout = () => {
  return (
    <BaseLayout>
      <Typography.Title level={1}>User dashboard</Typography.Title>
      <Outlet />
      <Link to='/user/account'>account</Link>
      <br />
      <Link to='/user/address'>address</Link>
      <br />
      <Link to='/user/order'>order</Link>
      <br />
      <br />
      <Link to='/'>Home</Link>
    </BaseLayout>
  )
}

export default UserLayout
