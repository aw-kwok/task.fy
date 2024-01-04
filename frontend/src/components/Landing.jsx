import React from 'react'

import styles from "../style"

import { Navbar, Hero, AutoSchedule, Canvas, Footer, Google, LearnMore } from "../components"

import { hero_blobs } from "../assets"

const Landing = () => (
  <div className='bg-secondary w-full overflow-hidden bg-local bg-no-repeat md:bg-[65em_-20em] md:bg-auto ss:bg-[25em_25em] ss:bg-[length:65%] bg-[20em_40em] bg-[length:60%]' style={{backgroundImage: `url(${hero_blobs})`}}>
    <div className={`flex justify-center ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <LearnMore />

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} pb-20`}>
      <div className = {`${styles.boxWidth}`}>
        <AutoSchedule />
        <Google />
        <Canvas />
      </div>
    </div>
    <div className="flex justify-center w-screen bg-footer">
      <Footer />
    </div>
  </div>
)

export default Landing
