import React from 'react'
import styles from '../style'
import { Navbar, Footer, SignInBox } from '../components'

const SignIn = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
      <div className={`flex justify-center`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`flex justify-center py-20`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-row ${styles.paddingX} justify-center md:justify-normal`}>
            <div className='md:flex flex-col w-3/4 pr-14 hidden'>
              <h1 className={`font-outfit font-bold text-[40px] pb-10`}>Seamless Integration. Your Information, Secured.</h1>
              <p className={`${styles.body}`}>task.fy uses Google as its sign-in provider. Through Google, we seamlessly connect your events with your Google Calendar while keeping your information safe and secure.</p>
            </div>
            
            <SignInBox />
          </div> 
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
