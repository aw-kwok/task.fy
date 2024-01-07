import { useState } from 'react'

import { close, logo, menu, logoWithName } from "../assets"

import styles from '../style'

import { navLinks } from "../constants"

const Navbar = () => (
    <nav className = {`w-full flex ${styles.paddingX} py-6 mt-2 justify-between items-center navbar`}>
        <img src = { logoWithName } alt = "task.fy" className = {`w-[124px]`} />
    </nav>
)

export default Navbar
