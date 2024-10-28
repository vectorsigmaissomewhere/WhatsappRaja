import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import logo from '../images/lanadelrey.jpg';

const NavbarPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)&& !buttonRef.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
  return (
    <header>
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex justify-between p-20 border-b-2-white sticky top-0 z-1000">
            {/*left division */}
            <div className="text-white flex justify-center">
                <div className="px-10 py-2 flex items-center bg-slate-50 text-black">
                    <img src={logo} alt="Logo" className="h-10 w-auto rounded-full mr-2"/>
                    <span className='text-lg'>whatraja</span>
                </div>
                <div className="px-10 py-2 flex items-center">
                    <FaSearch className="w-5 h-auto mr-2"/>
                    <span className="text-lg ">search</span>
                </div>
                <div className="px-10 py-2 flex items-center">
                    <FaUsers className='w-5 h-auto mr-2'/>
                    <span className='text-lg'>servers</span>
                </div>
                <div className="px-10 py-2 flex items-center">
                    <FaStar className='w-5 h-auto mr-2'/>
                    <span className='text-lg'>reviews</span>
                </div>
            </div>
            {/*right division */}
            <div className="text-white flex justify-center">
                <div className="px-10 py-2 flex items-center">
                <button className='text-lg' id='menu-button' onClick={toggleDropdown} ref={buttonRef}>dashboard</button>
                </div>
                {isOpen && (
                <div className="absolute right-0 z-10 mt-12 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" ref={menuRef}>
                    <div className="py-1" role='none'>
                        <a class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                        <a class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                        <a class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                        <form method="POST">
                            <button type='submit' class='block w-full px-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='menuitem-3'>Sign out</button>
                        </form>
                    </div>
                </div>
                )}
            </div>
        </nav>
    </header>
  )
}

export default NavbarPanel
