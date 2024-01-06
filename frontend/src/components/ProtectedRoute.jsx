import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  // make sure to see if id is in cookies
  const isAuthenticated = Cookies.get('id_token')

  if (!isAuthenticated) return (
    <Navigate to="/sign-in" replace />
  )

  return (
    <Outlet />
  )
}

export default ProtectedRoute
