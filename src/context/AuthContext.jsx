import { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState({})

  return <AuthContext.Provider value={[currentUser, setCurrentUser]} {...props} />
}

export { AuthContext }
export default AuthProvider
