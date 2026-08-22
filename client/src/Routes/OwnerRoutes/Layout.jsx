import React from 'react'
import Navbar from '../../components/OwnerComponents/Navbar'
import Sidebar from '../../components/OwnerComponents/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen bg-[#121212] text-white'>
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout