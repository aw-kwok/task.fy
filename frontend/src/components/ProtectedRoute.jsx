import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const isAuthenticated = Cookies.get('auth_token')

  if (!isAuthenticated) return (
    <Navigate to="/" replace />
  )

  return (
    <Outlet />
  )
}

export default ProtectedRoute
