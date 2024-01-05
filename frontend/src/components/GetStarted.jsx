import React from 'react'
import styles from "../style"

import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useGoogleLogin } from '@react-oauth/google'

import axios from 'axios'


const GetStarted = () => {
  
  const handleLogin = useGoogleLogin({
      onSuccess: async tokenResponse => {
        try {
          const res = await axios.get("https://googleapis.com/oauth2/v3/userinfo", {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              "Access-Control-Allow_Origin": "*",
            }
          })
          console.log(res)
          Cookies.set('auth_token', res.credentials, {expires: 7})
          // window.location.href = "/dashboard"
        }
        catch (err) {
          console.log(err)
        }
      },
    })

  return (
  <div className={`${styles.button} py-5 px-8 `} onClick={() => { Cookies.get("auth_token") ? window.location.href = "/dashboard" : handleLogin() }}>
    GET STARTED
  </div>
 
)}

export default GetStarted
