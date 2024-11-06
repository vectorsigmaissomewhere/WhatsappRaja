import React from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className='flex flex-col justify-center min-h-[40vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
            <div className='flex flex-row gap-x-9 font-black text-5xl font-sans text-white'>
                <p>Search What Servers</p>
            </div>
            <div className='flex flex-row bg-slate-400 p-4'>
                <FaSearch className='text-white mx-3 my-1 text-2xl' />
                <input type="text" className='p-2 text-lg rounded flex-grow w-96'/>  
                <button className='bg-black text-white px-4 py-2 text-lg rounded ml-2'>Search</button>
            </div>

        </div>
    )
}

export default SearchBar
