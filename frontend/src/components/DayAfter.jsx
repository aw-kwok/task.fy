import React from 'react'

import { rightArrow } from '../assets'

const DayAfter = (props) => {

  const handleClick = () => {
    // set value to day after
    const newDate = new Date(props.date)
    newDate.setDate(newDate.getDate() + 1)
    props.onUpdate(newDate)
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center rounded-full bg-primary hover:cursor-pointer' onClick={ handleClick }>
        <img src={ rightArrow } className='aspect-square h-[25px] m-2' />
      </div>
    </div>
  )
}

export default DayAfter
