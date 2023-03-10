import logo from '@/assets/logo-header.png'
import { Link, Outlet } from 'react-router-dom'
import './AuthLayout.scss'
import './Form.scss'

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__logo'>
        <Link to='/'>
          <img src={logo} alt='Brand Logo' className='auth-layout__logo' />
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
