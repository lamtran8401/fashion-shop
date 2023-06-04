import useAuth from '@/hooks/useAuth'
import userService from '@/services/user.service'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ role = [], children }) => {
  const { currentUser } = useAuth()

  if (!currentUser) return <Navigate to='/auth/login' />

  const { data, isLoading, isError } = useQuery({
    queryKey: 'user-profile',
    queryFn: () => userService.getMyInfo(),
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error when fetching user data</div>

  if (role && !role.includes(data.role)) return <Navigate to='/404' />

  return <>{children}</>
}

export default ProtectedRoute
