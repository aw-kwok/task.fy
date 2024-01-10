import React from 'react'

import { syncIcon } from '../assets'

import styles from '../style'

// add on click POST request for sync

const SyncEventsButton = () => {
  return (
    <div className={`${styles.button} flex flex-row justify-around items-center px-6 mx-14 py-2`}>
      <img src={ syncIcon } className='h-[32px] w-[32px]' />
      <h1>SYNC EVENTS</h1>
    </div>
  )
}

export default SyncEventsButton
