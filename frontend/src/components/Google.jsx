import styles from "../style"

import { placeholder } from '../assets'

const Google = () => (
  <div className={`flex md:flex-row flex-col justify-around pt-10`}>
    <div className='flex-1 px-10'>
      <h1 className={`${styles.infoHeading} py-6`}>Sync your plans with Google Calendar</h1>
      <p className={`${styles.body}`}>Make sure you always have your schedule with you, even when you’re on the go. task.fy will automatically sync your time blocks with your calendar for access from Google Calendar on any device.</p>
    </div>
    <div className='flex justify-center flex-1 py-10'>
      <img className='w-[80%]' src={placeholder} />
    </div>
  </div>
)
export default Google

