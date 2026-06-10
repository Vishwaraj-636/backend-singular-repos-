import { login, register, getMe, logout } from '../services/auth.api';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth.context.jsx';

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const { user, loading, setuser, setloading } = context

  async function handleRegister({ username, email, password }) {
    setloading(true)
    try {
      const data = await register({ username, email, password })
      setuser(data.user)
    } finally {
      setloading(false)
    }
  }

  async function handleLogin({ identifier, password }) {
    setloading(true)
    try {
      const data = await login({ identifier, password })
      setuser(data.user)
    } finally {
      setloading(false)
    }
  }

  async function handleGetMe() {
    try {
      setloading(true)
      const data = await getMe()
      setuser(data.user)
    } catch (error) {
      setuser(null)
    } finally {
      setloading(false)
    }

  }

  async function handleLogout() {
    setloading(true)
    try {
      await logout()
      setuser(null)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    handleGetMe()
  }, [])

  return ({
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout
  })
}