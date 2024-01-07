import React from 'react'

import { logoWithName } from '../assets'

import Button from './Button'

import styles from '../style'

const CTABox = () => (
    <div className='flex flex-col font-outfit px-8 rounded-[2rem] bg-[#D9D9D9] w-[350px] h-[350px] ml-20'>
        <img src = { logoWithName } alt="task.fy logo" className='pt-6 w-[40%]' />
        <h1 className='font-semibold text-[40px] pt-2 leading-[50px]'>
            Unlock time freedom today
        </h1>
        <p className={`${styles.body} pt-3 pb-5`}>Take back control of your time with the help of task.fy</p>
        <Button />
    </div>
)

export default CTABox
