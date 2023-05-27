import logo from '@/assets/logo-header.png'
import Dropdown from '@/components/Dropdown'
import Search from '@/components/Search'
import useCart from '@/features/cart/hooks/useCart'
import useAuth from '@/hooks/useAuth'
import useCurrentPath from '@/hooks/useCurrentPath'
import userService from '@/services/user.service'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Badge, Button, Divider, Layout, Menu } from 'antd'
import { useCallback } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

const items = [
  {
    key: '/',
    label: <NavLink to='/'>Home</NavLink>,
  },
  {
    key: '/product',
    label: <NavLink to='/product'>Sản phẩm</NavLink>,
  },
  {
    key: '/about',
    label: <NavLink to='/#'>Giới thiệu</NavLink>,
  },
]

const Header = () => {
  const currentMenuPath = useCurrentPath()
  const { cart, toggle } = useCart()
  const { currentUser, getCurrentUser, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = e => {
    e.preventDefault()
    userService.logout()
    logout()
    navigate('/auth/login')
  }

  const user = useCallback(getCurrentUser(), [currentUser])

  const dropdownItems = [
    {
      key: 'profile',
      label: <Link to='/user'>Thông tin cá nhân</Link>,
    },
    {
      key: 'logout',
      label: <Link onClick={handleLogout}>Đăng xuất</Link>,
    },
  ]

  return (
    <Layout.Header id='header' className='container'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' loading='lazy' className='logo-img' />
        </Link>
      </div>
      <nav className='top-nav'>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={[currentMenuPath]}
          selectedKeys={[currentMenuPath]}
          items={items}
        />
      </nav>
      <div className='header-search'>
        <Search placeholder='Tìm kiếm sản phẩm...' />
      </div>
      <div className='top-action'>
        {!user ? (
          <>
            <Link to='/auth/register' className='btn-action'>
              Tạo tài khoản
            </Link>
            <Divider type='vertical' />
            <Link to='/auth/login' className='btn-action'>
              <Button type='primary'>Đăng nhập</Button>
            </Link>
          </>
        ) : (
          <>
            <Badge count={cart.totalQuantity} size='small'>
              <ShoppingBagIcon onClick={toggle.toggleOn} className='top-bag-icon' />
            </Badge>
            <Dropdown items={dropdownItems}>
              <>
                <UserCircleIcon className='top-user-icon' />
                <span style={{ marginLeft: '5px' }}>{user?.name}</span>
              </>
            </Dropdown>
          </>
        )}
      </div>
    </Layout.Header>
  )
}

export default Header
