import logo from '@/assets/logo-header.png'
import { Search } from '@/components'
import { useCart } from '@/features/cart/hooks'
import { useCurrentPath } from '@/hooks'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Badge, Button, Divider, Layout, Menu } from 'antd'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const items = [
  {
    key: '/',
    label: <Link to='/'>Home</Link>,
  },
  {
    key: '/product',
    label: <Link to='/product'>Sản phẩm</Link>,
  },
  {
    key: '/top',
    label: <Link to='/#'>Top</Link>,
  },
  {
    key: '/bottom',
    label: <Link to='/#'>Bottom</Link>,
  },
  {
    key: '/accessories',
    label: <Link to='/#'>Accessories</Link>,
  },
]

const Header = () => {
  const currentMenuPath = useCurrentPath()

  const { toggleOn } = useCart()

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
      <Search placeholder='Search for any product...' />
      <div className='top-action'>
        <Link to='/auth/sign-up' className='btn-action'>
          Create Account
        </Link>
        <Divider type='vertical' />
        <Link to='/auth/sign-in' className='btn-action'>
          <Button type='primary'>Sign in</Button>
        </Link>
        <Badge count={2} size='small'>
          <ShoppingBagIcon onClick={toggleOn} className='top-bag-icon' />
        </Badge>
        <Link to='/user' className='top-user'>
          <UserCircleIcon className='top-user-icon' />
        </Link>
      </div>
    </Layout.Header>
  )
}

export default memo(Header)
