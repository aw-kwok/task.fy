import React from 'react'

import styles from '../style'

import axios from 'axios'

const DeleteCookies = () => {

  const deleteCookies = async () => {
    try {
      const res = await axios.delete("http://127.0.0.1:8000/api/delete-cookie", {
      withCredentials: true
    })
      console.log(res)
      console.log("id_token deleted")
    }
    catch (err) {
      console.log(err)
    }
    
  }

  return (
    <div className='bg-primary p-20'>
      <div className={`${styles.button}`} onClick={ deleteCookies }>
        Delete Cookies
      </div>
    </div>
  )
}

export default DeleteCookies
