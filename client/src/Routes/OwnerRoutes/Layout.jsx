import React from 'react'
import Navbar from '../../components/OwnerComponents/Navbar'
import Sidebar from '../../components/OwnerComponents/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
        </div>
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout