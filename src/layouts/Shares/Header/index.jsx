import { Badge, Divider, Drawer, Layout, Menu } from 'antd'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../../assets/logo-header.png'
import Search from '@/components/Search'
import './Header.scss'
import { useCurrentPath } from '@/hooks'

const HeaderComp = Layout.Header

const items = [
  {
    key: '/',
    label: <Link to='/'>Home</Link>,
  },
  {
    key: '/user',
    label: <Link to='/user'>Sản phẩm</Link>,
  },
]

const Header = () => {
  const currentMenuPath = useCurrentPath()

  const [openDrawer, setOpenDrawer] = useState(false)

  const showDrawer = () => {
    setOpenDrawer(true)
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  console.log('header re-render')
  return (
    <>
      <HeaderComp id='header' className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo-img' />
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
        <Search placeholder='Search for any product...' />
        <div className='top-action'>
          <Link to='#' className='btn-action'>
            Sign in
          </Link>
          <Divider type='vertical' />
          <Link to='#' className='btn-action'>
            Create Account
          </Link>
          <Badge count={2} size='small'>
            <ShoppingBagIcon onClick={showDrawer} className='top-bag-icon' />
          </Badge>
          <Link to='/user' className='top-user'>
            <UserCircleIcon className='top-user-icon' />
          </Link>
        </div>
      </HeaderComp>
      <Drawer
        title='Shopping bag'
        headerStyle={{ borderBottom: 'none' }}
        open={openDrawer}
        onClose={handleCloseDrawer}
      />
    </>
  )
}

export default Header
