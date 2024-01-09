import React from 'react'

import { leftArrow } from '../assets'

const DayBefore = (props) => {

  const handleClick = () => {
    // set value to day before
    const newDate = new Date(props.date)
    newDate.setDate(newDate.getDate() - 1)
    props.onUpdate(newDate)
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center rounded-full bg-primary hover:cursor-pointer' onClick={ handleClick }>
        <img src={ leftArrow } className='aspect-square h-[25px] m-2' />
      </div>
    </div>
  )
}

export default DayBefore
