import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { differenceInCalendarDays, differenceInCalendarMonths } from "date-fns"


import { logoWithName } from '../assets'

const Dashboard = () => {

  const [value, setValue] = useState(new Date())

  const onChange = (nextValue) => {
    setValue(nextValue)
    console.log(value)
  }
  
  const formatDay = ({date}) => {
    // format today
    if (differenceInCalendarDays(date, new Date()) === 0) {
      return "bg-[#4C6BDA] text-white"
    }

    // format selected day
    else if (differenceInCalendarDays(date, value) === 0) {
      return "bg-[#9CBBFF] text-black"
    }

    // format days in different months
    else if (differenceInCalendarMonths(date, value) !== 0) {
      return "text-gray-500"
    }
    else {
      return "text-black"
    }
  }

  const tileClassName = ({date}) => {
    return `${formatDay({date})} text-[14px] aspect-square rounded-full hover:`
  }

  return (
    <div className='flex flex-row bg-[#FBF6F6] h-screen font-outfit'>
      <div className='flex flex-col px-10 py-10 bg-[#F3ECEC]  w-[25vw]'>
        <img src = { logoWithName } className='w-[25%]' alt="task.fy logo" />
        <div className='flex flex-col pt-6 pb-3'>
          <h1 className='px-2 font-extralight text-[32px]'>{ `${value.toLocaleString("default", {month: "long"})} ${value.getFullYear()}` }</h1>
        </div>
        <div className={`bg-primary rounded-3xl`}>
          <Calendar
            className="text-center px-4 py-6 text-[#4C6BDA]"
            calendarType='gregory'
            showNavigation = { false }
            // formatWeekday={(date) => formatDate(date, "d")}
            onChange = { onChange }
            tileClassName={ tileClassName }
            value = { value }
          />
        </div>
        
      </div>
      <div className='flex flex-1 flex-col px-8 py-10 text-[36px] font-light'>
        <h1 className=''>Today's Schedule</h1>
        <h1 className='text-[#4C6BDA]'>{value.toLocaleDateString("default", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h1>
      </div>
      <div className='md:flex flex-1 hidden'>

      </div>
    </div>
  )
}

export default Dashboard