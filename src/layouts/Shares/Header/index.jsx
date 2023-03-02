import './Header.scss'
import { Layout, Menu } from 'antd'
import logo from '../../../assets/logo-header.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
  const location = useLocation()

  return (
    <HeaderComp id='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo-img' />
        </Link>
      </div>
      <nav className='top-nav'>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={[location.pathname]}
          security={location.pathname}
          items={items}
        />
      </nav>
    </HeaderComp>
  )
}

export default Header
