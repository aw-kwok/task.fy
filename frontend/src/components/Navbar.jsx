import { useState } from 'react'

import { close, logo, menu, temp_logo } from "../assets"

import { navLinks } from "../constants"

const Navbar = () => (
    <nav className = "w-full flex py-6 justify-between items-center navbar">
        <img src = { temp_logo } alt = "task.fy" className = "w-[124px] h-[32px]" />
    </nav>
)

export default Navbar
