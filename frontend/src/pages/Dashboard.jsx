import React from 'react'

import { GoogleLogin } from '@react-oauth/google'

import Cookies from 'js-cookie'

import { jwtDecode } from 'jwt-decode'

const Dashboard = () => {

  return (
    <div className='bg-primary'>
      <p>default dashboard view</p>
      <p>{Cookies.get("auth_token")}</p>
      {/* <p>{ jwtDecode(Cookies.get("auth_token")) }</p> */}
    </div>
  )
}

export default Dashboard