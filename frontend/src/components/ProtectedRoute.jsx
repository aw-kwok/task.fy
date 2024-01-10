import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  // make sure to see if id is in cookies

  // if (!isAuthenticated) return (
  //   <Navigate to="/sign-in" replace />
  // )

  return (
    <Outlet />
  )
}

export default ProtectedRoute
