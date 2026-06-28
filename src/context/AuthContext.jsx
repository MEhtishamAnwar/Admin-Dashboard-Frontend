import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

const storedUser = typeof window !== 'undefined' ? localStorage.getItem('adminUser') : null

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      localStorage.setItem('adminUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('adminUser')
    }
  }, [user])

  const login = ({ email, password }) => {
    const validEmail = 'admin@example.com'
    const validPassword = 'admin123'
    if (email === validEmail && password === validPassword) {
      const authUser = { name: 'Admin', email: validEmail, role: 'Super Admin' }
      setUser(authUser)
      navigate('/dashboard', { replace: true })
      return { success: true }
    }
    return { success: false, message: 'Invalid email or password' }
  }

  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export function RequireAuth({ children }) {
  const auth = useAuth()
  if (!auth.user) {
    return null
  }
  return children
}
