import styles from "../style"

import { gcalTemp } from '../assets'

import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

const AutoSchedule = () => {
  
  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className={`flex md:flex-row flex-col-reverse justify-around pt-10`}>
      <div className='flex justify-center flex-1 py-10' data-aos="fade-up">
        <img className='w-[80%] animate-fadeUp' src={gcalTemp}/>
      </div>
      <div className='flex-1 px-10'>
        <h1 className={`${styles.infoHeading} py-6`}>Automatically make time for your assignments</h1>
        <p className={`${styles.body}`}>Our scheduling platform automatically blocks out time in your day to work on your projects, study for tests, and much more. We’ll help you get started on things early and prevent those dreaded all-nighters.</p>
      </div>
    </div>
  )
}


export default AutoSchedule
