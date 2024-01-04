import React from 'react'

import Button from './Button'

import styles from '../style'

const CTABox = () => (
    <div className='flex flex-col font-outfit px-8 rounded-[2rem] bg-[#D9D9D9] w-[350px] h-[350px] ml-20'>
        <p className='text-[24px] pt-7'> task.fy </p>
        <h1 className='font-semibold text-[40px] pt-4 leading-[50px]'>
            Unlock time freedom today
        </h1>
        <p className={`${styles.body} pt-3 pb-5`}>Take back control of your time with the help of task.fy</p>
        <Button />
    </div>
)

export default CTABox
