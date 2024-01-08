import React from 'react'
import styles from '../style'
import { GoogleLogin } from '@react-oauth/google'

import axios from 'axios'

import { jwtDecode } from "jwt-decode"

const SignInBox = () => {
  return (
    <div className={`flex flex-col items-center ${styles.boxWidth} rounded-3xl bg-primary w-[25vw]`}>
          <h1 className={`font-outfit font-bold text-[32px] pt-10 pb-8`}>Sign In</h1>
          <div className='flex justify-center items-center pb-10'>
            <GoogleLogin 
              onSuccess = { async (CredentialResponse) => {
                console.log(CredentialResponse)
                console.log(jwtDecode(CredentialResponse.credential))

                // store jwt in cookie
                // Cookies.set('id_token', CredentialResponse, {expires: 7})

                // send credential to backend for authentication
                const res = await axios.post("http://127.0.0.1:8000/api/login", CredentialResponse, {
                  withCredentials: true
                })
                console.log(res.headers["set-cookie"])
                console.log(res)
                // window.location.href = "/dashboard"
              }}
              onError = {() => {console.log("An error has occured")}}
              text = "signin_with"
              shape = "pill"
              size='large'
              login_uri=''
              className = "pb-10"
              />
          </div>
    </div>
  )
}

export default SignInBox
