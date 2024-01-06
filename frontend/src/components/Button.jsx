import React from 'react'
import styles from '../style'

const Button = () =>  (
  <a href = "/sign-in">
    <div className={`${styles.button} text-[16px] py-4 px-6 w-52 flex justify-center`}>
    GET TASK.FY
    </div>
  </a>
)

export default Button