import femaleAvatar from '@/assets/images/user-female-avatar.png'
import maleAvatar from '@/assets/images/user-male-avatar.png'

import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import useCurrentPath from '@/hooks/useCurrentPath'
import {
  IdentificationIcon,
  LockClosedIcon,
  MapIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline'
import { Menu, Typography } from 'antd'
import { Suspense, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './UserPage.scss'

const items = [
  {
    key: '/user',
    label: <Link to='/user'>Tài khoản</Link>,
    icon: <IdentificationIcon className='icon' />,
  },
  {
    key: '/user/address',
    label: <Link to='/user/address'>Địa chỉ</Link>,
    icon: <MapIcon className='icon' />,
  },
  {
    key: '/user/order',
    label: <Link to='/user/order'>Đơn hàng</Link>,
    icon: <QueueListIcon className='icon' />,
  },
  {
    key: '/user/password',
    label: <Link to='/user/password'>Mật khẩu</Link>,
    icon: <LockClosedIcon className='icon' />,
  },
]

const UserPage = () => {
  const { currentUser } = useAuth()

  const { id, name, email, phone, birthDate, gender, isEmailVerified } = currentUser
  const [avatarUrl, setAvatarUrl] = useState(gender === 'MALE' ? maleAvatar : femaleAvatar)
  const currentUserMenuPath = useCurrentPath()
  useEffect(() => {
    setAvatarUrl(gender === 'MALE' ? maleAvatar : femaleAvatar)
  }, [gender])

  return (
    <div className='user-page'>
      <section className='user-page__menu'>
        <div className='user-page__menu__avatar'>
          <img src={avatarUrl} alt='User avatar' loading='lazy' className='user__avatar' />
          <Typography.Title level={4} className='user__name'>
            {name}
          </Typography.Title>
        </div>
        <aside className='user-page__menu__divider'>
          <Menu
            className='user-menu'
            defaultSelectedKeys={[currentUserMenuPath]}
            selectedKeys={[currentUserMenuPath]}
            items={items}
          />
        </aside>
      </section>
      <section className='user-page__content'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  )
}

export default UserPage
