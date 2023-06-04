import femaleAvatar from '@/assets/images/user-female-avatar.png'
import maleAvatar from '@/assets/images/user-male-avatar.png'
import logo from '@/assets/logo-header.png'
import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import useCurrentPath from '@/hooks/useCurrentPath'
import { CubeIcon, NewspaperIcon, Squares2X2Icon, TruckIcon } from '@heroicons/react/24/outline'
import { Divider, Menu, Typography } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AdminLayout.scss'

const items = [
  {
    key: '/admin',
    label: <Link to='/admin'>Tổng quan</Link>,
    icon: <Squares2X2Icon className='icon' />,
  },
  {
    key: '/admin/orders',
    label: <Link to='/admin/orders'>Đơn hàng</Link>,
    icon: <NewspaperIcon className='icon' />,
  },
  {
    key: '/admin/products',
    label: <Link to='/admin/products'>Sản phẩm</Link>,
    icon: <CubeIcon className='icon' />,
  },
  {
    key: '/admin/delivery',
    label: <Link to='/admin/delivery'>Vận chuyển</Link>,
    icon: <TruckIcon className='icon' />,
  },
]

const AdminLayout = () => {
  const { currentUser } = useAuth()
  const currentUserMenuPath = useCurrentPath()
  const avt = currentUser.gender === 'MALE' ? maleAvatar : femaleAvatar
  return (
    <div className='admin-page'>
      <section className='admin-page__menu'>
        <div className='logo'>
          <img src={logo} alt='logo' loading='lazy' className='logo-img' />
        </div>
        <div className='admin-page__menu__user'>
          <img src={avt} alt='avatar' loading='lazy' className='admin-page__menu__user-avatar' />
          <div className='admin-page__menu__user-info'>
            <Typography.Text level={4} className='admin-page__menu__user-name'>
              {currentUser.name}
            </Typography.Text>
            <Typography.Text className='admin-page__menu__user-role'>Admin</Typography.Text>
          </div>
        </div>
        <Divider />
        <aside className='admin-page__menu__aside'>
          <Menu
            className='admin-menu'
            defaultSelectedKeys={[currentUserMenuPath]}
            selectedKeys={[currentUserMenuPath]}
            items={items}
          />
        </aside>
      </section>
      <section className='admin-page__content'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  )
}

export default AdminLayout
