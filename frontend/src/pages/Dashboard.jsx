import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { differenceInCalendarDays, differenceInCalendarMonths } from "date-fns"


import { logoWithName } from '../assets'
import { DayAfter, DayBefore, PrevButton, NextButton, SettingsButton, ProfileButton } from '../components'

const Dashboard = () => {

  const [value, setValue] = useState(new Date())
  const [activeStartDate, setActiveStartDate] = useState(new Date())

  const getDayEvents = (day) => {
    // houses get request
  }

  // idk if i do this on page load or on component load
  useEffect(() => {
    getDayEvents(value)
  })

  const handleActiveStartDateUpdate = (newActiveStartDate) => {
    setActiveStartDate(newActiveStartDate)
    console.log(newActiveStartDate)
  }

  const handleValueUpdate = (newValue) => {
    setValue(newValue)
  }

  const onChange = (nextValue) => {
    setValue(nextValue)
    setActiveStartDate(nextValue)
    console.log(value)
  }
  
  const formatDay = ({date}) => {
    // format today
    if (differenceInCalendarDays(date, new Date()) === 0) {
      return "tile-today"
    }

    // format selected day
    else if (differenceInCalendarDays(date, value) === 0) {
      return "tile-selected"
    }

    // format days in different months
    else if (differenceInCalendarMonths(date, activeStartDate) !== 0) {
      return "tile-different-month"
    }
  }

  const tileClassName = ({date}) => {
    return `${formatDay({date})} aspect-square tile rounded-full`
  }

  return (
    <div className='flex flex-row bg-[#FBF6F6] h-screen font-outfit'>
      <div className='lg:flex hidden flex-col px-10 py-10 bg-[#F3ECEC]  w-[25vw]'>
        <a href = "/dashboard">
          <img src = { logoWithName } className='w-[7vw]' alt="task.fy logo" />
        </a>

        <div className='flex flex-col pt-6 pb-3'>
          <div className='flex flex-row justify-between pr-2'>
            <h1 className='px-2 font-extralight text-[1.67vw]'>{ `${activeStartDate.toLocaleString("default", {month: "long"})} ${activeStartDate.getFullYear()}` }</h1>
            <div className='flex flex-row gap-[.5vw]'>
              <PrevButton activeStartDate = { activeStartDate } onUpdate = { handleActiveStartDateUpdate } />
              <NextButton activeStartDate = { activeStartDate } onUpdate = { handleActiveStartDateUpdate } />
            </div>
          </div>
          
        </div>
        <div className={`bg-primary rounded-3xl`}>
          <Calendar
            activeStartDate={ activeStartDate }
            className="text-center px-4 py-6 text-[#4C6BDA] text-[.9vw]"
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
        <div className='flex flex-row'>
          <h1>Today's Schedule</h1>
          <div className='flex flex-row pl-4 w-[105px] justify-between'>
            <DayBefore date = { value } onUpdate = { handleValueUpdate } />
            <DayAfter date = { value } onUpdate = { handleValueUpdate } />
          </div>
          
        </div>
        <h1 className='text-[#4C6BDA]'>{value.toLocaleDateString("default", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h1>
      </div>
      <div className='flex flex-col flex-1 px-8 py-10'>
        <div className='flex flex-row'>
          <SettingsButton />
          <ProfileButton />
        </div>
      </div>
    </div>
  )
}

export default Dashboard