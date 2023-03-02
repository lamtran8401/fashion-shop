import { useContext } from 'react'
import { AuthContext } from '../context'

const useAuthContext = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext)

  return [currentUser, setCurrentUser]
}

export default useAuthContext
