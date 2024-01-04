import styles from "../style"

import { placeholder } from '../assets'

const Canvas = () => (
  <div className={`flex md:flex-row flex-col-reverse justify-around pt-10`}>
    <div className='flex justify-center flex-1 py-10'>
      <img className='w-[80%]' src={placeholder} />
    </div>
    <div className='flex-1 px-10'>
      <h1 className={`${styles.infoHeading} py-6`}>Import your assignments from Canvas automatically</h1>
      <p className={`${styles.body}`}>With support for over 25 universities nationwide, including Harvard, MIT, Princeton, and many more, task.fy will import your assignments straight from your Canvas courses.</p>
    </div>
  </div>
)
export default Canvas
