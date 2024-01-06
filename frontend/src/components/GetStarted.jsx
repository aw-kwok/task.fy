import React from 'react'
import styles from "../style"

import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useGoogleLogin } from '@react-oauth/google'

import axios from 'axios'


const GetStarted = () => {
  
  const handleLogin = useGoogleLogin({
      onSuccess: tokenResponse => {
        console.log(tokenResponse)
        Cookies.set('auth_token', tokenResponse.access_token, {expires: 7})
        // axios.post("http://localhost:8000/api/login", {
        //   "accessToken" : tokenResponse.access_token
        // }).then((res) => {
        //   console.log(res)
        // }).err((err) => {
        //   console.log(err)
        // })
        // window.location.href = "/dashboard"
      },
    })

  return (
    <a href='/sign-in'>
      <div className={`${styles.button} py-5 px-8 `}>
        GET STARTED
      </div>
    </a>
)}

export default GetStarted
