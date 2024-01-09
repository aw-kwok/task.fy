import React from 'react'

import { settings } from '../assets'

const SettingsButton = () => {
  return (
    <div className='flex items-center p-4'>
      <img src = {settings} className='w-[40px]'/>
    </div>
  )
}

export default SettingsButton
