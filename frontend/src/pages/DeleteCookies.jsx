import React from 'react'

import styles from '../style'

import Cookies from 'js-cookie'

const DeleteCookies = () => {

  const deleteCookies = () => {
    Cookies.remove("auth_token")
    console.log("Cookies deleted")
  }

  return (
    <div className='bg-primary p-20'>
      <div className={`${styles.button}`} onClick={ () => {
        deleteCookies
        window.location.href = "/dashboard"
      }
        } >
        Delete Cookies
      </div>
    </div>
  )
}

export default DeleteCookies
