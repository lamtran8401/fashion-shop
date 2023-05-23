import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ role = [], children }) => {
  const { currentUser } = useAuth()

  if (!currentUser) return <Navigate to='/auth/login' />

  if (role && !role.includes(currentUser.role)) return <Navigate to='/404' />

  return <>{children}</>
}

export default ProtectedRoute
