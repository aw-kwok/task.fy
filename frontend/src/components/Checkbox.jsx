import React, { useState } from 'react'

const Checkbox = () => {

  // will be changed to a prop
  const color = "#E67C73"

  const [checked, setIsChecked] = useState(true)

  const handleChange = () => {
    setIsChecked(!checked)
  }

  return (
    <div className='text-[14px] px-6 flex items-center'>
      <input 
        type = "checkbox"
        // make id a prop
        id = "checkbox" 
        checked = { checked }
        onChange = { handleChange }
        // fix this styling
        // className={`appearance-none focus:outline-none w-4 h-4 border-2 border-[#E67C73] rounded checked:bg-[#E67C73] checked:border-[#E67C73] focus:ring-2 focus:ring-offset-0 focus:ring-[#E67C73] text-white`}
      />
      {/* make htmlFor the same prop as id */}
      <label htmlFor="checkbox" className='ml-2'>
        Mgmt Acct
      </label>
    </div>
  )
}

export default Checkbox
