import React, { useState } from 'react'
import Calendar from 'react-calendar'


import { logoWithName } from '../assets'

const Dashboard = () => {

  const [value, setValue] = useState(new Date())

  const onChange = (nextValue) => {
    setValue(nextValue)
    console.log(value)
  }

  return (
    <div className='flex flex-row bg-[#FBF6F6] h-screen'>
      <div className='flex flex-1 flex-col px-10 py-10 bg-[#F3ECEC] font-outfit'>
        <img src = { logoWithName } className='w-[25%]' alt="task.fy logo" />
        <div className='flex flex-col pt-6 pb-3'>
          <h1 className='px-2 font-extralight text-[32px]'>{ `${value.toLocaleString("default", {month: "long"})} ${value.getFullYear()}` }</h1>
        </div>
        <div className={`bg-primary rounded-3xl`}>
          <Calendar
            className="text-center px-4 py-4 text-[#4C6BDA]"
            calendarType='gregory'
            showNavigation = { false }
            onChange = { onChange }
            tileClassName={`text-[#000000] text-[14px] font-outfit`}
            value = { value }
          />
        </div>
        
      </div>
      <div className='flex flex-1'>

      </div>
      <div className='flex flex-1'>

      </div>
    </div>
  )
}

export default Dashboard