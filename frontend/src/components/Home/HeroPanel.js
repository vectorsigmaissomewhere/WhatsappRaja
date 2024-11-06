import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const HeroPanel = () => {
  return (
    <div className='flex flex-col justify-center min-h-[80vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
      <div className='flex flex-row gap-x-9 font-black text-5xl font-sans text-white'>
        <p>Discover</p>
        <FaUsers />
        <p className='font-serif'>What</p>
        <p>Raja</p>
      </div>
      <div className='flex flex-row font-bold text-1xl gap-x-5'>
        <p className='font-sans text-white'>We  love  to  connect  people  together</p>
        <span role="img" aria-label="namaste">🙏</span> 
      </div>
      <div className='flex flex-row bg-slate-400'>
        <FaSearch className='text-white mx-3 my-1'/>
        <input type="text"/>
        <button className='bg-black text-white px-1 rounded'>Search</button>
      </div>
      <div className='flex flex-row text-xs	gap-x-2 font-sans text-white font-bold'>
        <h2>Server admin?</h2>
        <button className='bg-black py-1'>ADD YOUR SERVER!</button>
      </div>
    </div>
  )
}

export default HeroPanel
