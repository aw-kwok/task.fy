import React from 'react'

import { tempPfp } from '../assets'

const ProfileButton = () => {
  return (
    <div className='bg-primary rounded-3xl flex flex-row px-6 py-2'>
      {/* profile image will use a get request */}
      <img src={ tempPfp } className='w-[52px] h-[52px] rounded-full'/>
      <div className='flex flex-col px-2'>
        {/* get request for these with the id_token */}
        <h1 className='text-[20px] font-light'>Andrew Kwok</h1>
        <h1 className='text-[14px] font-extralight'>andrew@task.fy</h1>
      </div>
    </div>
  )
}

export default ProfileButton
