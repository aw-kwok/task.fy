import React from 'react'

import Checkbox from './Checkbox'

const SelectedSubjects = () => {
  return (
    <div className='flex flex-col bg-primary rounded-3xl my-5 py-5'>
      <h1 className='px-6 text-[24px] font-light'>Selected Events</h1>
      <Checkbox />
    </div>
  )
}

export default SelectedSubjects
