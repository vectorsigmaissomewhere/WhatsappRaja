import React from 'react'
import { FaSearch } from 'react-icons/fa';

const NavbarPanel = () => {
  return (
    <header>
        <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex justify-between p-20 border-b-2-white">
            {/*left division */}
            <div class="text-white flex justify-center">
                <div class="px-10 py-2">
                    <p>logo</p>
                </div>
                <div class="px-10 py-2 flex items-center">
                    <FaSearch className="w-5 h-auto mr-2"/>
                    <span className="text-lg ">search</span>
                </div>
                <div class="px-10 py-2">
                    <p>servers</p>
                </div>
                <div class="px-10 py-2">
                    <p>reviews</p>
                </div>
            </div>
            {/*right division */}
            <div class="text-white px-20 py-2">
                <div>
                    <p>dashboard</p>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavbarPanel
