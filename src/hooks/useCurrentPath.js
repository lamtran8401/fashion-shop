import { useLocation } from 'react-router-dom'

const useCurrentPath = () => {
  const location = useLocation()
  const currentPath = location.pathname.startsWith('/user') ? '/user' : location.pathname
  return currentPath
}

export default useCurrentPath
