import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { UserButton } from '@clerk/react'

const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between px-4 md:px-8 border-b py-3 border-gray-700 bg-gray-900 transition-all duration-300">
            <Link to= "/">
                <img src={logo} alt="Logo" className='h-9 brightness-0 invert' />
            </Link>
            <UserButton/>
        </div>
        </>
    )
}

export default Navbar