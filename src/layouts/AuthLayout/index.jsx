import logo from '@/assets/logo-header.png'
import { Loading } from '@/components'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './AuthLayout.scss'
import './Form.scss'

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-layout__logo'>
        <Link to='/'>
          <img src={logo} alt='Brand Logo' loading='lazy' className='auth-layout__logo' />
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default AuthLayout
