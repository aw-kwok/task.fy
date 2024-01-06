import React from 'react'

import styles from '../style'

import Cookies from 'js-cookie'

const DeleteCookies = () => {

  const deleteCookies = () => {
    Cookies.remove("id_token")
    console.log("id_token deleted")
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
