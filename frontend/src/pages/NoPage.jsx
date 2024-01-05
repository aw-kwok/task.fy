import React from 'react'

import styles  from '../style'

import { Navbar, Footer, GoHome, ContactButton } from "../components"
import { pageNotFound } from '../assets'

const NoPage = () => (
  <div className='bg-secondary w-full overflow-hidden'>
    <div className={`flex justify-center`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className='flex justify-center'>
      <div className={`flex md:flex-row flex-col ${styles.boxWidth} ${styles.paddingX} pb-16`}>
        <div className={`flex flex-1 flex-col md:pt-40 pt-20`}>
          <h1 className={`${styles.headline} text-[52px]`}>PAGE NOT FOUND</h1>
          <p className={`text-[20px] pt-7 pb-16 ss:leading-[1.5em]`}>The page you are looking for has either been moved, renamed, or does not exist. Please contact the administrator if you think this is an issue.</p>
          <div className='flex flex-row'>
            <div className='pr-6'>
              <GoHome />
            </div>
            <ContactButton />
          </div>
        </div>
        <div className='flex flex-1 flex-col md:pt-2 pt-10'>
          <div className='flex justify-center pb-4'>
            <img src={pageNotFound} className='w-[80%]' />
          </div>
          <p className='flex justify-center'><a href="https://www.freepik.com/free-vector/page-found-concept-illustration_7887410.htm#query=404%20page%20not%20found%20illustration&position=1&from_view=search&track=ais&uuid=3299821f-633b-4f69-bc02-93309abd5811">Image by storyset</a>&nbsp;on Freepik </p>
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
)


export default NoPage
