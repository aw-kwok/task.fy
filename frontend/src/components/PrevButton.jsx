import React from 'react'

import { leftArrow } from '../assets'

const PrevButton = (props) => {

  const handleClick = () => {
    // set activeStartDate to previous month
    const newMonth = new Date(props.activeStartDate)
    newMonth.setMonth(newMonth.getMonth() - 1)
    props.onUpdate(newMonth)
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center rounded-full bg-primary hover:cursor-pointer' onClick={ handleClick }>
        <img src={ leftArrow } className='aspect-square h-[1vw] m-2' />
      </div>
    </div>
  )
}

export default PrevButton
