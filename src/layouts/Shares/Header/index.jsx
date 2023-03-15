import logo from '@/assets/logo-header.png'
import Search from '@/components/Search'
import { useCart } from '@/features/cart/hooks'
import useCurrentPath from '@/hooks/useCurrentPath'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Badge, Button, Divider, Layout, Menu } from 'antd'
import { Link, NavLink } from 'react-router-dom'
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
    key: '/top',
    label: <NavLink to='/#'>Top</NavLink>,
  },
  {
    key: '/bottom',
    label: <NavLink to='/#'>Bottom</NavLink>,
  },
  {
    key: '/accessories',
    label: <NavLink to='/#'>Accessories</NavLink>,
  },
]

const Header = () => {
  const currentMenuPath = useCurrentPath()
  const { toggleOn } = useCart()

  console.log('header')

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

export default Header
