import React from 'react'
import styles from "../style"

import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useGoogleLogin } from '@react-oauth/google'

import axios from 'axios'


const GetStarted = () => {
  return (
    <a href='/sign-in'>
      <div className={`${styles.button} py-5 px-8 `}>
        GET STARTED
      </div>
    </a>
)}

export default GetStarted
