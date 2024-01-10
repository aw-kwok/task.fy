import React from 'react'

import { gcalLogo, canvasLogo } from '../assets'
import SyncEventsButton from './SyncEventsButton'

const DashboardWidget = () => {
  return (
    <div className='flex flex-col bg-primary rounded-3xl my-5 py-5'>
      <h1 className='text-[24px] font-light px-6'>Dashboard</h1>
      <div className='flex flex-row px-4 py-2'>
        <div className='flex flex-col items-center w-[80px]'>
          <a href='https://calendar.google.com/'>
            <img src = {gcalLogo} className='h-[48px] w-[48px]' />
          </a>
          <p className='w-[80px] text-[10px] font-light text-center py-1'>Google Calendar</p>
        </div>
        <div className='flex flex-col items-center w-[80px]'>
          {/* do a get request for this link */}
          <a href='https://georgetown.instructure.com/'>
            <img src = {canvasLogo} className='h-[48px] w-[48px]' />
          </a>
          <p className='w-[80px] text-[10px] font-light text-center py-1'>Canvas</p>
        </div>
      </div>
      <SyncEventsButton />
    </div>
  )
}

export default DashboardWidget
