import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      {React.Children.only(children)}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider
