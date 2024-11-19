"use client";
import React from 'react'
import { Bell, Menu} from "lucide-react"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/* Left side */}
        <div className='flex justify-between items-center gap-5'>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => {}}>
                <Menu className="w-4 h-4" />
            </button>
        </div>
        <div className="relative">
            <input type='search' placeholder='Start typing to search groups & products' className='pl-10 pr-4 w-50 md:w-80 border-2 border-gray-200 bg-white rounded-lg focus:outline-none focus:border-blue-500' />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non ">
                <Bell className='text-gray-500' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar