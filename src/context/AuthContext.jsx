import { createContext, useState } from 'react'

const AuthContext = createContext(null)

const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const login = (user, token) => {
    setCurrentUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const getCurrentUser = () => JSON.parse(localStorage.getItem('user'))

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        getCurrentUser,
        login,
        logout,
      }}
      {...props}
    />
  )
}

export { AuthContext }
export default AuthProvider
